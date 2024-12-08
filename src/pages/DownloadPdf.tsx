import React, {useRef} from 'react'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from 'react-router-dom';
import ContentRenderer from '../components/template/ContentRenderer';
import Button from '../components/atoms/Button';
import { useAuth } from '../context/AuthContext';

const DownloadPdf:React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { state } = location as { state: { img: string, label: string, percent: number, result: string }};

  const reportRef = useRef<HTMLDivElement>(null);
  const recommendationRef = useRef<HTMLDivElement>(null);

  const generatePdf = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    // Fungsi untuk menambahkan bagian ke PDF
    const addSectionToPdf = async (ref: React.RefObject<HTMLDivElement>, pdf: jsPDF) => {
      if (!ref.current) return;

      const canvas = await html2canvas(ref.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, Math.min(imgHeight, pdfHeight));
    };

    // Tambahkan halaman Report
    await addSectionToPdf(reportRef, pdf);

    // Tambahkan halaman baru untuk Recommendation
    pdf.addPage();
    await addSectionToPdf(recommendationRef, pdf);

    // Simpan PDF
    pdf.save("document.pdf");
  };


  return (
    <>
      <div className='border-b fixed left-0 top-0 right-0 bg-white z-10'>
          <div className='max-w-[1600px] mx-auto py-5 px-10 flex items-center justify-between'>
              <h5 className='text-xl'>Download Pdf</h5>
              <Button type='button' onClick={generatePdf}>Download</Button>
          </div>
      </div>
      <div className='absolute left-0 right-0 top-0 bg-secondary p-10 pt-16'>
        {/* Bagian Report */}
        <div ref={reportRef} className="bg-white md:w-[700px] lg:w-[800px] mx-auto border-l border-t border-r px-10">
          <div className="header py-5">
            <h1 className="text-xl font-bold text-center mt-12 text-aksen">KNOW YOUR SIGHT</h1>
            <p className="text-center text-sm mt-2">Empowering Eye Health with AI Precision</p>
          </div>
          <hr />
          <div>
            <div className="text-sm w-[400px] grid grid-cols-3 gap-y-2 mt-10">
              <p>Name</p>
              <p className="col-span-2">: {user?.name}</p>
              <p>Email</p>
              <p className="col-span-2">: {user?.email}</p>
              <p>Date</p>
              <p className="col-span-2">: 2024/12/22</p>
            </div>
          </div>
          <h5 className="mt-16 mb-2">Report</h5>
          <div className="border grid grid-cols-4 text-sm">
            <p className="border-b py-3 ps-2">Image</p>
            <div className="col-span-3 border-b py-3 border-s px-2">
              <img src={state.img} className="w-[200px] h-[200px]" alt="Report" />
            </div>
            <p className="py-5 ps-2">Diagnose</p>
            <p className="col-span-3 py-5 border-s px-2">{state.label}</p>
          </div>
          <div className='mt-5 pb-10'>
            <p>Disclaimers :</p>
            <p>This report does not replace professional medical advice, diagnosis or treatment.</p>
          </div>
        </div>

        {/* Bagian Recommendation */}
        <div ref={recommendationRef} className="bg-white md:w-[700px] lg:w-[800px] mx-auto h-full border px-10 py-5">
          <div className="border grid grid-cols-4 text-sm">
            <p className="border-b py-3 ps-2">Recommendation</p>
            <p className="col-span-3 border-b py-3 border-s px-2">
              <ContentRenderer content={state?.result}/>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadPdf