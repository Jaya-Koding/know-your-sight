import React from 'react'
import { FaCheck } from 'react-icons/fa'

const UpgradePlan:React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-[1080px] py-24'>
            <h4 className='text-center text-2xl font-medium'>Upgrade Plan</h4>
            <div className="grid sm:grid-cols-3 py-10 px-24 gap-10">
                <div className='border p-7 rounded-lg w-[300px]'>
                    <h4 className='text-2xl font-medium'>Starter</h4>
                    <div className='my-5'>
                        <p><span className='text-2xl'>Rp200.000</span></p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-white bg-aksen cursor-pointer'>Upgrade</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 5 Prediction</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 5 Print Report</li>
                    </ul>
                </div>
                <div className='border p-7 rounded-lg w-[300px]'>
                    <h4 className='text-2xl font-medium'>Basic</h4>
                    <div className='my-5'>
                        <p><span className='text-2xl'>Rp550.000</span></p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-white bg-aksen cursor-pointer'>Upgrade</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 15 Prediction</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 15 Print Report</li>
                    </ul>
                </div>
                <div className='border p-7 rounded-lg w-[300px]'>
                    <h4 className='text-2xl font-medium'>Premium</h4>
                    <div className='my-5'>
                        <p><span className='text-2xl'>Rp900.000</span></p>
                    </div>
                    <p className='my-5 p-3 rounded-full text-sm text-center text-slate-400 bg-gray-100'>Current Plan</p>
                    <ul className='text-[13px] font-[400]'>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 30 Prediction</li>
                        <li className='flex items-center gap-x-2 mb-3'><FaCheck /> 30 Print Report</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpgradePlan