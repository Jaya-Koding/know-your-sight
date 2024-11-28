import React, {  useState } from 'react'
import Cookies from 'js-cookie'
import { FaRegEye, FaRegEyeSlash, FaRegUser } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'
import Button from '../components/atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../api/user'
import Loading from '../components/molecules/Loading'

type DataUser = {
  email: string,
  password: string,
}

const Login:React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<DataUser>({email: "", password: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({...dataUser, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(dataUser.email === "" || dataUser.password === "") {
        setIsWrong("Email atau password tidak boleh kosong")
      } else {
        const credential = {email: dataUser.email, password: dataUser.password}
        setIsloading(true)
        const response = await loginApi(credential)
        if(response.success === true) {
          const data:{id: number, name: string, email: string} = {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email
          }
          Cookies.set('data', JSON.stringify(data), { expires: 7, secure: true, sameSite: 'Strict' })
          navigate("/")
        } else {
          setIsWrong("Email atau password salah");
          console.log(response)
        }
        setIsloading(false)
      }
    } catch (error) {
      console.error('Internal server error');
    }
  }

  return (
    <div className='h-screen grid lg:grid-cols-2'>
      <div className='hidden bg-aksen lg:flex items-center justify-center'>
        <div>
          <h1 className='font-medium text-3xl text-white flex items-end'><span className='inline-block px-3 py-1 font-bold rounded bg-white text-aksen'>K</span>now <span className='inline-block px-3 py-1 font-bold rounded bg-white text-aksen ms-3'>Y</span>our <span className='inline-block px-3 py-1 font-bold rounded bg-white text-aksen ms-3'>S</span>ight</h1>
        </div>
      </div>
      <div className='relative flex items-center justify-center'>
        <div className='relative w-[400px] px-10 py-16 rounded-xl bg-white'>
          <h4 className='font-bold text-3xl text-slate-600 mb-10'>Login</h4>
          <form onSubmit={handleSubmit}>
            <label className='text-sm'>Email</label>
            <div className='border-b py-3 flex items-center gap-x-3 mb-5'>
              <FaRegUser className='opacity-60' size={20}/>
              <input onChange={handleChange} name='email' type="text" className='outline-none border-none w-full' placeholder='Masukan email kamu'/>
            </div>
            <label className='text-sm'>Password</label>
            <div className='relative border-b py-3 flex items-center gap-x-3 mb-3'>
              <MdOutlineLock className='opacity-60' size={25}/>
              <input onChange={handleChange} name='password' type={showPassword? 'text' : 'password'} className='outline-none border-none w-full' placeholder='Masukan password kamu'/>
              {showPassword? <FaRegEye onClick={()=>setShowPassword(prev => !prev)} size={20} className='cursor-pointer absolute right-5'/> : <FaRegEyeSlash onClick={()=>setShowPassword(prev => !prev)} size={20} className='cursor-pointer absolute right-5'/>}
            </div>
            <p className='text-[13px]'>Lupa password?</p>
            <Button type='submit' className='w-full mt-10'>Login</Button>
            <p className='text-sm mt-2'>Belum punya akun? <Link to={'/register'} className='underline'>daftar</Link></p>
          </form>
        </div>
        {isWrong && <div className='absolute left-0 top-10 right-0 flex justify-center'><p className='text-red-500 text-sm mt-2'>{isWrong}</p></div>}
        {isLoading && <Loading />}
      </div>
    </div>
  )
}

export default Login