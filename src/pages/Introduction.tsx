import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/template/Navbar'
import dashboard1 from './../assets/images/dashboard1.png'
import dashboard2 from './../assets/images/dashboard2.png'
import { ArrowRight, Eye, File, Globe, Target } from 'lucide-react'
import Button from '../components/atoms/Button'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Card:React.FC<CardProps> = ({icon, title, description}) => {
    return (
        <div>
            {icon}
            <h6 className='text-xl font-bold mt-3 mb-2 text-aksen'>{title}</h6>
            <p className='text-slate-600 text-sm'>{description}</p>
        </div>
    )
}

const Introduction:React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAuth();
    const directToDetection = () => {
        if(user !== null) {
          navigate('/detection')
        } else {
          navigate('/login')
        }
      }


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
    <Navbar />
    <div className='bg-secondary'>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-2 pt-56 pb-36 px-5 items-center'>
            <div>
                <h3 data-aos="fade-right" className='text-2xl lg:text-3xl font-bold text-aksen'>Preserve Your Eyes, Evey Vision Matters</h3>
                <p className='text-slate-500 mt-5 mb-14 font-medium' data-aos="fade-right" data-aos-delay="200">Whether you’re a medical professional or an individual seeking answers, our accurate and accessible solution ensures every eye gets the attention it deserves</p>
                <Button onClick={directToDetection} type='button'  dataAos={{type:"fade-right", delay:"200"}} className='flex gap-x-2 items-center'>Let's detection <ArrowRight size={20} className='mt-0.5'/></Button>
            </div>
            
            <div className='hidden md:block gap-x-5 -mt-16 relative bg-aksen'>
                <div className='ngambang1 absolute left-2 top-[-120px] border p-5 w-[250px] bg-white rounded-lg'>
                    <img src={dashboard1} data-aos="zoom-out" />
                </div>
                <div className='ngambang2 absolute top-[-60px] right-0 border p-5 w-[250px] bg-white rounded-lg'>
                    <img src={dashboard2} data-aos="zoom-out" />
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className='max-w-[1080px] gap-x-5 gap-y-10 mx-auto grid md:grid-cols-2 py-24 px-5 items-center'>
            <Card icon={<Target size={40} className='text-slate-500'/>} title='Accuracy You Can Trust' description='With a 92% accuracy rate, our AI model ensures reliable and precise predictions, enabling confident decision-making for eye health.'/>
            <Card icon={<Eye size={40} className='text-slate-500'/>} title='Comprehensive Eye Condition Coverage' description='Detect four essential conditions—Cataract, Glaucoma, Diabetic Retinopathy, and Normal Vision—all in one platform.'/>
            <Card icon={<File size={40} className='text-slate-500'/>} title='Seamless Reporting' description='Export detailed prediction reports effortlessly. Perfect for medical consultations or personal records'/>
            <Card icon={<Globe size={40} className='text-slate-500'/>} title='Accessible Anytime, Anywhere' description='As a web-based platform, Know Your Sight is available whenever and wherever you need it.'/>
        </div>
    </div>
    </>
  )
}

export default Introduction