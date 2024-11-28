import React, { useState } from 'react'
import { FaArrowLeft, FaRegEye, FaRegEyeSlash, FaRegUser } from 'react-icons/fa'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import Button from '../components/atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/molecules/Loading'
import { register } from '../api/user'

type NewData = {
  username: string,
  email: string,
  password: string;
  confirmPassword: string;
}

const Register:React.FC = () => {
  const navigate = useNavigate()
  const [newData, setNewData] = useState<NewData>({username: "", email: "", password: "", confirmPassword: ""});
  const [step, setStep] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<number|null>(null);
  const [isWrong, setIsWrong] = useState<string>("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d_@$!%*?&]{8,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData({...newData, [e.target.name]: e.target.value});
  }

  const handleSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(newData.username === "" || newData.email === "") {
      setIsWrong("Username dan email tidak boleh kosong")
      setTimeout(() => {
        setIsWrong('')
      }, 5000);
    } else {
      if(!emailRegex.test(newData.email)) {
        setIsWrong("Email tidak valid")
        setTimeout(() => {
          setIsWrong('')
        }, 5000);
      } else {
        setStep(true)
      }
    }
  }

  const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateAndRegister = async (newData: { password: string; confirmPassword: string; username: string; email: string }) => {
      const { password, confirmPassword, username, email } = newData;
    
      // Helper function to handle errors
      const handleError = (message: string) => {
        setIsWrong(message);
        setTimeout(() => {
          setIsWrong('');
        }, 5000);
      };
    
      // Validation
      if (!password || !confirmPassword) {
        return handleError("Password dan confirm password tidak boleh kosong");
      }
    
      if (!passwordRegex.test(password)) {
        return handleError("Password harus minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol.");
      }
    
      if (password !== confirmPassword) {
        return handleError("Password dan confirm password tidak cocok");
      }
    
      // Proceed with registration
      const data = { name: username, email, password };
      try {
        setLoading(true);
        await register(data);
        navigate('/login');
      } catch (error) {
        handleError("Gagal mendaftar. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    
    validateAndRegister(newData);    
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='relative w-[400px] border shadow-lg px-10 py-16 rounded-xl bg-white'>
        {step&&<FaArrowLeft onClick={()=>setStep(false)} size={18} className='absolute top-10 left-8 opacity-55 hover:text-aksen cursor-pointer'/>}
        <h4 className='text-center font-medium text-3xl mb-10'>Daftar</h4>
        {!step ?
          <form onSubmit={handleSubmitEmail}>
            <label className='text-sm'>Username</label>
            <div className='border-b py-3 flex items-center gap-x-3 mb-4'>
              <FaRegUser className='opacity-60' size={20}/>
              <input onChange={handleChange} value={newData.username} name='username' type="text" className='outline-none border-none w-full' placeholder='Masukan username'/>
            </div>
            <label className='text-sm'>Email</label>
            <div className='border-b py-3 flex items-center gap-x-3 mb-3'>
              <MdOutlineEmail className='opacity-60' size={24}/>
              <input onChange={handleChange} value={newData.email} name='email' type="text" className='outline-none border-none w-full' placeholder='Masukan email'/>
            </div>
            <Button type='submit' className='w-full mt-10'>Berikutnya</Button>
            <p className='text-sm mt-2'>Sudah punya akun? <Link to={'/login'} className='underline'>masuk</Link></p>
          </form>
        :
        <form onSubmit={handleSubmitPassword}>
            <label className='text-sm'>Password</label>
            <div className='relative border-b py-3 flex items-center gap-x-3 mb-4'>
              <MdOutlineLock className='opacity-60' size={25}/>
              <input onChange={handleChange} value={newData.password}  name='password' type={showPassword==1?'text':'password'} className='outline-none border-none w-full' placeholder='Masukan password'/>
              {showPassword==1? <FaRegEye onClick={()=>setShowPassword(null)} size={20} className='cursor-pointer absolute right-5'/> : <FaRegEyeSlash onClick={()=>setShowPassword(1)} size={20} className='cursor-pointer absolute right-5'/>}
            </div>
            <label className='text-sm'>Confirm password</label>
            <div className='relative border-b py-3 flex items-center gap-x-3 mb-3'>
              <MdOutlineLock className='opacity-60' size={25}/>
              <input onChange={handleChange} value={newData.confirmPassword}  name='confirmPassword' type={showPassword==2?'text':'password'} className='outline-none border-none w-full' placeholder='Konfirmasi password'/>
              {showPassword==2? <FaRegEye onClick={()=>setShowPassword(null)} size={20} className='cursor-pointer absolute right-5'/> : <FaRegEyeSlash onClick={()=>setShowPassword(2)} size={20} className='cursor-pointer absolute right-5'/>}
            </div>
            <Button type='submit' className='w-full mt-10'>Daftar</Button>
          </form>
        }
      </div>
      {isWrong && <div className='absolute left-0 top-10 right-0 flex justify-center'><p className='text-red-500 text-sm mt-2'>{isWrong}</p></div>}
      {isLoading && <Loading />}
    </div>
  )
}

export default Register