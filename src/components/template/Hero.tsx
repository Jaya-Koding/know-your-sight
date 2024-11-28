import React, { useEffect } from 'react'
import Button from '../atoms/Button'
import { ArrowRight } from 'lucide-react' 
import hero7 from './../../assets/images/hero7.jpg'
import hero2 from './../../assets/images/hero2.jpg'
import hero3 from './../../assets/images/hero3.jpg'
import hero6 from './../../assets/images/hero6.jpg'
import star from './../../assets/images/star.png'
import star1 from './../../assets/images/staroutline.png'
import circle from './../../assets/images/circle.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import apple from './../../assets/images/apple.png'

const Hero:React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth ();
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    })
  })

  const directToDetection = () => {
    if(user !== null) {
      navigate('/detection')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className=' bg-secondary'>
      <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 pt-52 pb-28 px-5 items-center'>
        <div className='relative'>
          <div data-aos="fade-right" className='text-4xl font-medium'><p className='mb-2'>AI-Powered</p> <p>Eye Care <span className='border relative border-blue-900 px-3 pb-1 text-blue-900'>
            Inovations 
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] bottom-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] top-[-4px]"></div>
            <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] bottom-[-4px]"></div>
            </span></p>
          </div>
          <p data-aos="fade-right" className='my-10 text-gray-500'><span className='font-medium'>Know Your Sight</span> is an industry leader in developing sophisticated and revolutionary AI powered eye disease detection and management solutions.</p>
          <div className="cta-box">
            <Button onClick={directToDetection} dataAos={{type:"fade-right", delay:"200"}} type='button' className='flex gap-x-2 items-center'>Lets Detection <ArrowRight size={20} className='mt-0.5'/></Button>
          </div>
          <div className='absolute left-0 top-[-50px]'>
              <img src={apple} className='w-[70px]' />
            </div>
        </div>
        
        <div className='hidden md:block'>
          <div className="relative max-w-[450px] h-[350px] mx-auto">
            <div className='ngambang3 absolute left-5 -top-12 w-[250px] h-[200px]'>
              <img src={hero6} className="w-full h-full object-cover object-left rounded-lg" />
            </div>
            <div className='ngambang1 absolute right-3 w-[150px] h-[150px]'>
              <img src={hero3} className="w-full h-full object-cover position-center rounded-lg" />
            </div>
            <div className='ngambang4 absolute right-0 -bottom-5 w-[250px] h-[200px]'>
              <img src={hero2} className="w-full h-full object-cover object-left rounded-lg" />
            </div>
            <div className='ngambang2 absolute left-8 bottom-7 w-[150px] h-[150px]'>
              <img src={hero7} className="w-full h-full object-cover object-left rounded-lg" />
            </div>
            
            <div className="absolute right-0 -top-16">
              <img src={star} className="w-[30px] ngambang3 putar" />
            </div>
            <div className="absolute -left-10 top-[50px]">
              <img src={star1} className="w-[30px] ngambang3 putar1" />
            </div>
            <div className="absolute left-[-100px] bottom-[0] flex items-center gap-x-[400px]">
              <img src={circle} className="w-[15px] rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero