import React from 'react'
import parse from "html-react-parser";

interface ContentRendererProps {
  content: string | null;
}

const ContentRenderer:React.FC<ContentRendererProps> = ({content}) => {
    console.log(content);
  return (
    <div id="content-container" className='flex flex-col gap-y-3 text-slate-900'>
      {content !== null ? parse(content): <div></div>}
    </div>
  )
}

export default ContentRenderer