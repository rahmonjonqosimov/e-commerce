import React from 'react'

import { banner_img_1, banner_img_2, banner_img_3, banner_img_4 } from '../../assets';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const Banner:React.FC = () => {
  return (
    <div className='container mx-auto px-4 grid grid-cols-2 gap-6 my-12'>
       <div className="relative">
          <img src={banner_img_1} alt="Banner image"  className='w-full'/>
          <div className='absolute bottom-12 left-12'>
            <h3 className='text-3xl font-semibold text-white'>November Outfits</h3>
            <a href="#" className='flex items-center gap-2 text-white mt-3 text-base underline'>Collection <LiaLongArrowAltRightSolid/></a>
          </div>
       </div>
       <div className="relative">
          <img src={banner_img_2} alt="Banner image"  className='w-full'/>
          <div className='absolute bottom-12 left-12'>
            <h3 className='text-3xl font-semibold text-white'>Cashmere Set</h3>
            <a href="#" className='flex items-center gap-2 text-white mt-3 text-base underline'>Collection <LiaLongArrowAltRightSolid/></a>
          </div>
       </div>
       <div className="relative">
          <img src={banner_img_3} alt="Banner image"  className='w-full'/>
          <div className='absolute bottom-12 left-12'>
            <h3 className='text-3xl font-semibold text-white'>The New Nordic</h3>
            <a href="#" className='flex items-center gap-2 text-white mt-3 text-base underline'>Collection <LiaLongArrowAltRightSolid/></a>
          </div>
       </div>
       <div className="relative">
          <img src={banner_img_4} alt="Banner image"  className='w-full'/>
          <div className='absolute bottom-12 left-12'>
            <h3 className='text-3xl font-semibold text-white'>The Leather</h3>
            <a href="#" className='flex items-center gap-2 text-white mt-3 text-base underline'>Collection <LiaLongArrowAltRightSolid/></a>
          </div>
       </div>
    
    </div>
  )
}

export default Banner