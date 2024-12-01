import React, { useState } from 'react'
import { Client } from "@gradio/client";
import ContentRenderer from '../components/template/ContentRenderer';

interface DetectionResult {
  label: string
  confidences: {
    label: string;
    confidence: number;
  }[];
}


const detection = async (image:Blob) => {
  const client = await Client.connect("dielz/eye-disease-classification");
  const result = await client.predict("/predict", { 
    image: image, 
  });

  return result.data
}

const Detection:React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [label, setLabel] = useState<string|null>(null);
  const [result, setResult] = useState<string|null>(null);
  const [confidience, setConfidience] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk menangani unggah gambar
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Mencegah perilaku default membuka file
  };
  
  const handleDropOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Mencegah perilaku default membuka file
    const file = e.dataTransfer.files[0];
    setImage(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string); // Menampilkan gambar di halaman
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk mengirim gambar ke API Gradio
  const handleSubmit = async () => {
    if (!image) {
      alert("Harap unggah gambar terlebih dahulu!");
      return;
    }

    setIsLoading(true);

    try {
      // Convert gambar menjadi Blob
      const imageBlob = await new Promise<Blob>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(new Blob([reader.result as ArrayBuffer], { type: image.type })); // Tambahkan tipe MIME dari file asli
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(image);
      });
      const result= await detection(imageBlob) as string[]
      if (typeof result[0] == 'object' && result[0] !== null) {
        const data: DetectionResult = result[0]
        const labelObject = result[0] as { label: string };
        const confidence = data.confidences[0].confidence
        const confidencePercent = Math.round(confidence * 100)
        setLabel(labelObject.label)
        setConfidience(confidencePercent)
      }

      const cleanedResult = result[1]
        .replace(/Action:/g, '')
        .replace(/\(if applicable\):/gi, '')
        .replace(/style="[^"]*"/gi, "")
        .replace(/\(If Necessary\):/gi, '');

      setResult(cleanedResult)
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setResult("Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setImage(null);
    setImageUrl(null);
    setLabel(null);
    setResult(null);
    setConfidience(0);
  }

  return (
    <div className='bg-secondary'>
      <div className='max-w-[1600px] mx-auto p-10 h-screen'>
        <div className='grid md:grid-cols-2 gap-5'>
          <div>
            <div className='border p-3 rounded-lg bg-white'>
              {image ? (
                <div className='relative max-w-[300px] max-h-[300px] mx-auto'>
                  <div className={`${isLoading && 'loader1'} absolute rounded-lg`}></div>
                  <img src={imageUrl ?? ''} alt="Preview" className='mx-auto rounded-lg' style={{ maxWidth: "300px" }} />
                </div>
              ):(
                <div onDragOver={handleDragOver} onDrop={handleDropOver} className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    </label>
                </div> 
              )}
            </div>
            <div className='flex items-center gap-3'>
              <button onClick={handleClear} className={`mt-3 w-full border border-orange-600 hover:bg-orange-50 text-orange-600 font-medium py-2 px-4 rounded`}>
                Clear
              </button>
              <button onClick={handleSubmit} disabled={isLoading} className={`mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded`}>
                {isLoading? 'Detection...': 'Submit'}
              </button>
            </div>
          </div>
          <div>
            <div className='p-3 border rounded-lg bg-white'>
              <h5>Prediction</h5>
              <div className='h-[90px]'>
                <h6 className='font-medium text-center py-5 text-xl'>{label?label:<p className='opacity-50'>Diagnosis</p>}</h6>
                <div>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-orange-600 text-xs font-medium text-orange-100 text-center p-0.5 leading-none rounded-full" style={{ width: confidience+'%' }}>{confidience&&`${confidience}%`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-3 border rounded-lg mt-3 bg-white min-h-[600px] max-h-[700px] overflow-y-scroll output'>
              {/* {result && <div  dangerouslySetInnerHTML={{ __html: result }}></div>} */}
              <ContentRenderer content={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detection