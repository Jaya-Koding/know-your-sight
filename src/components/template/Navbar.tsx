import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import { Eye, Home, Info, LogOut, Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { FaRegUser } from 'react-icons/fa'
import { GrUpgrade } from 'react-icons/gr'

const Navbar:React.FC = () => {
  const navigate = useNavigate()
  const { user, getCookie, deleteCookie } = useAuth()
  const [logout, setLogout] = useState<boolean>(false)
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false)

  useEffect(()=>{
    getCookie()
  },[logout])

  const directToDetection = () => {
    if(user !== null) {
      navigate('/detection')
    } else {
      navigate('/login')
    }
  }

  const handleLogout = () => {
    deleteCookie()
    setLogout(prev => !prev)
  }

  return (
    <div className='fixed top-0 right-0 left-0 z-50 bg-white'>
      <div className="max-w-[1080px] mx-auto flex items-center py-5 justify-between px-5">
        <div className="logo text-3xl font-bold text-slate-600">KY<span className='text-aksen'>S</span></div>
        <ul className='hidden sm:flex items-center gap-x-7 text-lg text-slate-500'>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/upgrade'}><li>Pricing</li></Link>
          <li onClick={directToDetection} className='cursor-pointer'>Detection</li>
        </ul>
        <div>
          {user !== null?
            <div className='relative hidden sm:block'>
              <div onClick={()=>setIsMenu(prev => !prev)} className='absolute cursor-pointer -top-5 right-0 p-2.5 rounded-full bg-slate-100'>
                <FaRegUser size={18} className='text-slate-600'/>
              </div>
              {isMenu && 
                <div className="absolute text-slate-700 text-sm left-[-300px] top-10 w-[300px] bg-white border rounded-xl p-3 flex flex-col">
                  <div className='flex items-center gap-x-3 hover:bg-slate-100 p-3 rounded-lg mb-1'>
                    <FaRegUser size={20}/>
                    <p>{user.name}</p>
                  </div>
                  <hr />
                  <Link to={'/upgrade'}>
                    <div className='flex items-center gap-x-3 hover:bg-slate-100 p-3 my-1 rounded-lg'>
                      <GrUpgrade size={20}/>
                      <p>Upgrade Plan</p>
                    </div>
                  </Link>
                  <hr />
                  <div onClick={handleLogout} className='flex cursor-pointer items-center gap-x-3 hover:bg-slate-100 p-3 mt-1 rounded-lg'>
                    <LogOut size={20}/>
                    <p>Logout</p>
                  </div>
                </div>
              }
            </div>
          :
            <Link to={'/login'}>
              <Button className={'hidden sm:block'} type='button'>Login</Button>
            </Link>
          }
          <Menu onClick={()=>setIsMenuMobile(prev => !prev)}  className='block sm:hidden cursor-pointer'/>
          {isMenuMobile && 
            <div className='absolute text-slate-700  text-sm sm:hidden top-16 left-0 right-0 bg-white p-5 shadow-md'>
              <ul className=''>
                <Link to={'/'}><li className='py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Home /> Home</li></Link>
                <Link to={'/about'}><li className='py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Info /> About</li></Link>
                <li onClick={directToDetection} className='cursor-pointer py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Eye /> Detection</li>
                {user !== null?
                  <div className="bg-white border rounded-xl p-3 flex flex-col mt-3">
                    <div className='flex items-center gap-x-3 hover:bg-slate-100 p-3 rounded-lg mb-1'>
                      <FaRegUser size={20}/>
                      <p>{user.name}</p>
                    </div>
                    <hr />
                    <Link to={'/upgrade'}>
                      <div className='flex items-center gap-x-3 hover:bg-slate-100 p-3 my-1 rounded-lg'>
                        <GrUpgrade size={20}/>
                        <p>Upgrade Plan</p>
                      </div>
                    </Link>
                    <hr />
                    <div onClick={handleLogout} className='flex cursor-pointer items-center gap-x-3 hover:bg-slate-100 p-3 mt-1 rounded-lg'>
                      <LogOut size={20}/>
                      <p>Logout</p>
                    </div>
                  </div>
                :
                  <Link className='mx-auto' to={'/login'}>
                    <Button className='w-full mt-5' type='button'>Login</Button>
                  </Link>
                }
              </ul>
            </div>
          }
        </div>
      </div>
      </div>
  )
}

export default Navbar