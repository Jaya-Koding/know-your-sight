import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ContentRenderer from '../components/template/ContentRenderer';
import Button from '../components/atoms/Button';

const HistoryDetection:React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (img:string, label:string, percent:number, result:string) => {
      navigate('/download', {
        state: {img: img, label: label, percent: percent, result: result }, // Data yang dikirim
      });
    };

    const location = useLocation();
    const { state } = location as { state: { img: string, label: string, percent: number, result: string } };
  return (
    <div className='bg-secondary'>
        <div className='border-b fixed left-0 top-0 right-0 bg-white z-10'>
            <div className='max-w-[1600px] mx-auto py-5 px-10 flex items-center justify-between'>
                <h5 className='text-xl'>History Detection</h5>
                <Button type='button' onClick={()=>handleNavigate(state.img !== undefined ? state.img : '', state.label, state.percent, state.result)}>Download Pdf</Button>
            </div>
        </div>
        <div className='max-w-[1000px] mx-auto p-10 border pt-24 rounded bg-white'>
            <div className='w-[200px] h-[200px] rounded-lg bg-slate-200 mx-auto overflow-hidden'>
                <img src={state.img} className='w-full h-full object-cover' alt="eye" />
            </div>
            <p className='text-center font-bold text-2xl text-slate-600 mt-5 mb-8'>{state?.label}</p>
            <ContentRenderer content={state?.result}/>
        </div>
    </div>
  )
}

export default HistoryDetection