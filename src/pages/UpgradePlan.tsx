import React from 'react'
import { FaCheck } from 'react-icons/fa'

const UpgradePlan:React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-[1080px] py-24'>
            <h4 className='text-center text-2xl font-medium'>Upgrade Plan</h4>
            <div className="grid sm:grid-cols-2 py-10 px-24 gap-3">
                <div className='border p-7 rounded-lg'>
                    <h4 className='text-2xl font-medium'>Free</h4>
                    <div className='my-5'>
                        <p><span className='text-4xl'>Rp0</span> / month</p>
                        <p className='text-sm mt-3'>Explore basic eye health detection features.</p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-slate-400 bg-gray-100'>Current plan</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Assistance with basic eye health screening</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Access to limited AI disease detection</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> View basic diagnostic suggestions</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Learn about common eye conditions</li>
                    </ul>
                </div>
                <div className='border p-7 rounded-lg'>
                    <h4 className='text-2xl font-medium'>Plus</h4>
                    <div className='my-5'>
                        <p><span className='text-4xl'>Rp150.000</span> / month</p>
                        <p className='text-sm mt-3'>Unlock advanced AI tools for eye health analysis.</p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-white bg-aksen'>Upgrade</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Comprehensive eye disease detection</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Access to advanced AI for rare conditions</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Personalized diagnostic reports</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Recommendations for treatment and specialists</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpgradePlan