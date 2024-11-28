import React, { ComponentProps, ReactNode } from 'react'

type ButtonProps = {
  onClick?: () => void;
  type: 'submit' | 'button';
  children: ReactNode;
  dataAos?: {
    type: string;
    delay: string;
  }
}

const Button:React.FC<ButtonProps & ComponentProps<'button'>> = ({type, onClick, children, className, dataAos}) => {
  return (
    <button data-aos={dataAos?.type}  data-aos-delay={dataAos?.delay} onClick={onClick} type={type} className={`${className} px-4 py-1.5 rounded bg-aksen text-white font-medium`}>{children}</button>
  )
}

export default Button