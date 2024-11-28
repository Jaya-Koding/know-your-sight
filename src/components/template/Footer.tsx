import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='pt-20 pb-16 border-t max-w-[1080px] mx-auto'>
      <p className='text-[12px] md:text-[14px] flex items-center gap-x-3 justify-center'><span>Copyright © 2024 Invfest All rights reserved.</span> | <span className='text-blue-500'>Privacy Policy</span> | <span className='text-blue-500'>Terms of Use</span></p>
    </div>
  )
}

export default Footer