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
                        <p className='text-sm mt-3'>Explore how AI can help you with everyday tasks</p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-slate-400 bg-gray-100'>Current plan</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Assistance with writing, problem solving and more</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Access to GPT-4o mini</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Limited access to GPT‑4o</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Use custom GPTs</li>
                    </ul>
                </div>
                <div className='border p-7 rounded-lg'>
                    <h4 className='text-2xl font-medium'>Plus</h4>
                    <div className='my-5'>
                        <p><span className='text-4xl'>Rp150.000</span> / month</p>
                        <p className='text-sm mt-3'>Explore how AI can help you with everyday tasks</p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-white bg-aksen'>Upgrade</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Assistance with writing, problem solving and more</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Access to GPT-4o mini</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Limited access to GPT‑4o</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> Use custom GPTs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpgradePlan