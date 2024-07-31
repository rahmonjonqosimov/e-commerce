import React from 'react'
import { video } from '../../assets'

const Promotion:React.FC = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col items-center'>
        <span className='text-base text-[#377DFF] font-bold text-center mt-10'> PROMOTION </span>
        <h2 className='text-[#121212] font-medium text-[40px] my-4'>Winter Collections</h2>
        <p className='text-[#121212] text-xl'>Introducing the new winter jackets.</p>

        <img src={video} alt="Video image" className='w-full mt-10' />
    </div>
  )
}

export default Promotion