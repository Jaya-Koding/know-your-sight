import React, { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import stepImage from './../../assets/images/step.png'
import vector from './../../assets/images/vector.png'
import AOS from 'aos'
import "aos/dist/aos.css"

type StepType = {
  point: string;
  short: string;
  explain: string;
};

const Step: React.FC = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    })
  })

  const [isOpen, setIsOpen] = useState<string>('');

  const step: StepType[] = [
    {
      point: "Upload",
      short:'"Fast, Accurate Detection Starts Here"',
      explain:
        "Upload retinal images to the Know Your Sight platform. Powered by our state-of-the-art EfficientNet B0 model, the system analyzes images in minutes, identifying cataracts, glaucoma, diabetic retinopathy, or confirming normal eye health—all with an impressive 92% accuracy.",
    },
    {
      point: "Diagnose",
      short:'"Clear, Actionable Insights Delivered Instantly"',
      explain:
        "After the scan, receive a detailed diagnosis. The results are easy to understand and designed to guide medical professionals and patients toward informed decisions.",
    },
    {
      point: "Recomended",
      short:'"Your Next Steps, Simplified"',
      explain:
        "Based on the diagnosis, our platform provides tailored recommendations. Whether it’s further medical evaluation or routine monitoring, Know Your Sight ensures you’re never left guessing what to do next.",
    },
    {
      point: "Report",
      short:'"Stay Informed, Stay Connected"',
      explain: "Generate a comprehensive, downloadable report. This ensures seamless communication between healthcare providers and patients while keeping everyone informed about the next steps.",
    },
  ];

  return (
    <div className="max-w-[1080px] mx-auto py-16 px-5">
      <div className="title font-medium text-aksen">
        <h6 data-aos="fade-right">THE FUTURE OF AI ASSISTED EYE HEALTH CARE</h6>
        <h4 data-aos="fade-right" data-aos-delay="200" className="text-3xl mt-2">Join Us on the Journey</h4>
      </div>
      <div className="grid lg:grid-cols-2 items-start">
        <div className="px-18 sm:px-40 lg:px-0">
          <img data-aos="fade-up" data-aos-delay="200" src={vector} />
        </div>

        <div className="mt-28 ms-5 text-slate-600">
          {step.map((item, index) => (
            <div key={index} data-aos="fade-up" className="border-b">
              <div className="flex items-center justify-between py-4">
                <h5 className="font-medium md:text-[18px]">{item.point}</h5>
                {isOpen == item.point? (
                  <Minus
                    className="cursor-pointer"
                    onClick={() => setIsOpen('')}
                    size={22}
                  />
                ) : (
                  <Plus
                    className="cursor-pointer"
                    onClick={() => setIsOpen(item.point)}
                    size={22}
                  />
                )}
              </div>
              {isOpen == item.point && (
                <>
                  <p className="italic font-medium mb-2">{item.short}</p>
                  <p className="pb-5 trasition ease-linear">
                    {item.explain}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
