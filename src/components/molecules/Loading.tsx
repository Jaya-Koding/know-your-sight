import React from 'react'

const Loading:React.FC = () => {
  return (
    <div className="z-50 loading absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-15">
        <div className="loader"></div>
    </div>
  )
}

export default Loading