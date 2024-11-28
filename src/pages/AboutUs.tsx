import React, { useEffect } from 'react'
import AOS from 'aos'
import working from './../assets/images/working.svg'
import Navbar from '../components/template/Navbar'
import abdil from '../assets/images/abdil.png'
import jimly from '../assets/images/jimly.jpg'
import iwan from '../assets/images/iwan.jpg'

const AboutUs:React.FC = () => {
    useEffect(()=>{
        AOS.init({
          duration: 1000,
          offset: 100,
          easing: "ease-in-out",
          once: true,
        })
      })
  return (
    <>
    <Navbar/>
    <div className=' bg-secondary'>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 pt-56 pb-28 px-5 items-center'>
            <div>
            <h1  className='text-4xl lg:text-5xl font-bold text-slate-400'><span className='text-aksen'>K</span>now <span className='text-aksen'>Y</span>our <span className='border relative border-blue-900 px-3 pb-1 text-aksen'>
            Sight 
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] bottom-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] bottom-[-4px]"></div>
            </span></h1>
            <p className='text mt-5 mb-14 font-medium'>We use powerful AI to create diagnostic imaging solutions and virtual patient management systems to optimize eye health outcomes.</p>
            </div>
            
            <div className='hidden md:block'>
                <div className="relative max-w-[400px] mx-auto">
                    <img src={working} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 py-28 px-5 items-center'>
            <div className=''>
                <h6 className='text-xl text-aksen font-medium mb-3'>A New Vision for Eyecare</h6>
                <p>Our products enable the accurate screening, diagnosis, monitoring and management of sight threatening and chronic diseases such as Diabetic Retinopathy, Glaucoma, Age Related Macula Degeneration, Hypertension, Stroke and Kidney Disease.</p>
            </div>
            <div className='border-2 rounded-lg border-aksen p-4 m-10'>
                <p className='text mt-5 mb-14 font-medium'>We want to improve access to eye care globally and our low-cost solutions for point-of-care screening are suitable for mass deployment.</p>
            </div>
        </div>
    </div>
    <div className='bg-secondary'>
        <div className='max-w-[1080px] mx-auto py-24'>
            <h4 className='text-center text-aksen font-medium text-3xl'>The Know Your Sight Team</h4>
            <div className='grid md:grid-cols-3 gap-5 mt-16'>
                <div className='p-5 flex flex-col items-center hover:transition-all hover:bg-white hover:shadow-lg rounded-xl'>
                    <div className='w-44 h-44 rounded-full overflow-hidden border-2 border-slate-300 shadow-lg'>
                        <img src={abdil} className='w-full h-full object-cover' />
                    </div>
                    <h5 className='text-lg font-medium mt-3 mb-2'>M Abdiel Al Hafiz</h5>
                    <p>Machine Learning Developer</p>
                </div>
                <div className='p-5 flex flex-col items-center hover:transition-all hover:bg-white hover:shadow-lg rounded-xl'>
                    <div className='w-44 h-44 rounded-full overflow-hidden border-2 border-slate-300 shadow-lg'>
                        <img src={iwan} className='w-full h-full object-cover' />
                    </div>
                    <h5 className='text-lg font-medium mt-3 mb-2'>Iwan Haryatno</h5>
                    <p>Backend Developer</p>
                </div>
                <div className='p-5 flex flex-col items-center hover:transition-all hover:bg-white hover:shadow-lg rounded-xl'>
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