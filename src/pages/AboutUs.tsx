import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import hero5 from './../assets/images/hero5.jpg'
import Navbar from '../components/template/Navbar'
import abdil from '../assets/images/abdil.jpg'
import jimly from '../assets/images/jimly.jpg'
import iwan from '../assets/images/iwan.jpg'

const AboutUs:React.FC = () => {
    useEffect(()=>{
        AOS.init({
          duration: 1000,
          offset: 100,
          easing: "ease-in-out",
          once: false,
        })
      })
  return (
    <>
    <Navbar/>
    <div className=''>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 pt-56 pb-28 px-5 items-center'>
            <div>
            <h1  className='text-4xl lg:text-5xl font-bold text-slate-400'><span className='text-aksen' data-aos="fade-left">K</span>now <span className='text-aksen' data-aos="fade-left" data-aos-delay="200">Y</span>our <span className='inline-block mt-2 sm:mt-0 border relative border-blue-900 px-4 py-2 text-aksen' data-aos="fade-right" data-aos-delay="500">
            Sight 
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] bottom-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] bottom-[-4px]"></div>
            </span></h1>
            <p className='text-slate-500 mt-5 mb-14 font-medium' data-aos="fade-right" data-aos-delay="700">We use powerful AI to create diagnostic imaging solutions and virtual patient management systems to optimize eye health outcomes.</p>
            </div>
            
            <div className='hidden md:block -mt-16'>
                <img src={hero5} data-aos="zoom-out" className='rounded-xl w-[300px] mx-auto' />
            </div>
        </div>
    </div>
    <div className='bg-secondary'>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 py-24 px-5 items-center'>
            <div className=''>
                <h6 data-aos="fade-right" className='text-2xl text-aksen font-medium mb-3'>A New Vision for Eyecare</h6>
                <p data-aos="fade-right" data-aos-delay="200">Our products enable the accurate screening, diagnosis, monitoring and management of sight threatening and chronic diseases such as Diabetic Retinopathy, Glaucoma, Age Related Macula Degeneration, Hypertension, Stroke and Kidney Disease.</p>
            </div>
            <div data-aos="fade-left" className='relative border bg-white rounded-lg py-7 px-12 m-10'>
                <p className='absolute text-aksen opacity-40 text-[80px] inline-block'>"</p>
                <p className='text-lg my-12'>We want to improve access to eye care globally and our low-cost solutions for point-of-care screening are suitable for mass deployment.</p>
            </div>
        </div>
    </div>
    <div className=''>
        <div className='max-w-[1080px] mx-auto py-24'>
            <h4 data-aos="fade-up" className='text-center text-aksen font-medium text-2xl'>The Know Your Sight Team</h4>
            <div className='grid md:grid-cols-3 gap-5 mt-16'>
                <div data-aos="fade-up" className='p-5 flex flex-col items-center hover:transition-all hover:bg-secondary hover:shadow-lg rounded-xl'>
                    <div className='w-44 h-44 rounded-full overflow-hidden border-2 border-slate-300 shadow-lg'>
                        <img src={abdil} className='w-full h-full object-cover' />
                    </div>
                    <h5 className='text-lg font-medium mt-3 mb-2'>M Abdiel Al Hafiz</h5>
                    <p>Machine Learning Developer</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className='p-5 flex flex-col items-center hover:transition-all hover:bg-secondary hover:shadow-lg rounded-xl'>
                    <div className='w-44 h-44 rounded-full overflow-hidden border-2 border-slate-300 shadow-lg'>
                        <img src={iwan} className='w-full h-full object-cover' />
                    </div>
                    <h5 className='text-lg font-medium mt-3 mb-2'>Iwan Haryatno</h5>
                    <p>Backend Developer</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className='p-5 flex flex-col items-center hover:transition-all hover:bg-secondary hover:shadow-lg rounded-xl'>
                    <div className='w-44 h-44 rounded-full overflow-hidden border-2 border-slate-300 shadow-lg'>
                        <img src={jimly} className='w-full h-full object-cover' />
                    </div>
                    <h5 className='text-lg font-medium mt-3 mb-2'>Jimly Assidqi H</h5>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs