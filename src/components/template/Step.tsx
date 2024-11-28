import React, { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import stepImage from './../../assets/images/step.png'
import AOS from 'aos'
import "aos/dist/aos.css"

type StepType = {
  point: string;
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
      point: "Step",
      explain:
        "Patients attend a screening location with TeleEye Scan or a compatible retinal camera. The attendee of the screening location uses the TeleEye MD web platform. Patients are invited to access their own results via downloading the TeleEye MD mobile app. For each patient, a series of retinal photos are taken, scanned and analysed by RetinoScan - our sophisticated AI service.",
    },
    {
      point: "Detect",
      explain:
        "In under a minute, RetinoScan's AI powered diagnostic imaging is complete.  Patients with no disease identified can readily access their RetinoScan report in the TeleEye MD mobile app. Patients with a detected disease require the further intelligence of RetinoScan Advanced for disease verification, referral pathway and ongoing monitoring.",
    },
    {
      point: "Refer",
      explain:
        "Once the review is complete, the RetinoScan report is verified and a virtual referral pathway is inititated to coordinate care on behalf of the patient. Referrals are sent via the TeleEye MD platform to the patient’s exisitng or local Optometrist, Ophthalmologist, General Practitioner, Endocrinologist, Nutritionist or Sight Services Association, as required.",
    },
    {
      point: "Monitor",
      explain: `Patients with a disease diagnosis (verified in their RetinoScan results) are intelligently monitored by RetinoScan Advanced within the TeleEye MD platform.

      RetinoScan Advanced measures a patient's progression over time with lesion analysis and monitoring. Health Practitioners within a patient's referral pathway recieve clinical updates on the TeleEye MD web platform.

      Patients with the TeleEye MD mobile app can access their real time health information while AI powered alerts remind the patient to receive followup care.`,
    },
    {
      point: "Educate & Empower",
      explain:
        "At all stages of the RetinoScan patient journey, we aim to educate and empower patients to optimize their own health outcomes through the TeleEye MD platform. We provide AI powered reminders, alerts, information and recommendations based on a patient's verified RetinoScan diagnosis.",
    },
  ];

  return (
    <div className="max-w-[1080px] mx-auto py-16 px-5">
      <div className="title font-medium text-aksen">
        <h6 data-aos="fade-right">THE FUTURE OF AI ASSISTED EYE HEALTH CARE</h6>
        <h4 data-aos="fade-right" data-aos-delay="200" className="text-3xl mt-2">Join Us on the Journey</h4>
      </div>
      <div className="grid lg:grid-cols-2 py-28">
        <div className="pt-10 px-16 sm:px-40 lg:px-0">
          <img data-aos="fade-up" data-aos-delay="200" src={stepImage} />
        </div>

        <div className="p-10 text-slate-600">
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
                <p className="pb-5 trasition ease-linear">
                  {item.explain}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
