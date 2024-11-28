import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import { Eye, Home, Info, Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Navbar:React.FC = () => {
  const navigate = useNavigate()
  const { user, getCookie, deleteCookie } = useAuth()
  const [logout, setLogout] = useState<boolean>(false)
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
          <li onClick={directToDetection} className='cursor-pointer'>Detection</li>
        </ul>
        <div>
          {user !== null?
            <Button onClick={handleLogout} className={'hidden sm:block bg-red-500'} type='button'>Logout</Button>
          :
            <Link to={'/login'}>
              <Button className={'hidden sm:block'} type='button'>Login</Button>
            </Link>
          }
          <Menu onClick={()=>setIsMenuMobile(prev => !prev)}  className='block sm:hidden cursor-pointer'/>
          {isMenuMobile && 
            <div className='absolute top-16 left-0 right-0 bg-white p-5 shadow-md'>
              <ul className=''>
                <Link to={'/'}><li className='py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Home /> Home</li></Link>
                <Link to={'/about'}><li className='py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Info /> About</li></Link>
                <Link to={'/detection'}><li className='py-3 px-5 hover:bg-slate-200 rounded flex items-center gap-x-2'><Eye /> Detection</li></Link>
                {user !== null?
                  <Button onClick={handleLogout} className={'w-full mt-5 bg-red-500'} type='button'>Logout</Button>
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