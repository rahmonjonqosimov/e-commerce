import React from 'react';
import { placeholder } from '../../assets';
import { Link } from 'react-router-dom';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const SaleUp:React.FC = () => {
  return (
    <div className='bg-[#F4F5F7]'>
         <div className='container mx-auto px-4 grid grid-cols-2 place-items-center'>
             <img src={placeholder} alt="Pleaceholder image" className='w-full' />
             <div className="max-w-[430px]">
                    <span className='text-base font-bold text-[#377DFF]'>SALE UP TO 35% OFF</span>
                    <h1 className='text-4xl font-medium my-4 text-[#141718]'> HUNDREDS of New lower prices! </h1>
                    <h5 className='text-xl text-[#141718] leading-8'> Hurry up!!! Winter is coming! </h5>
                    <Link to={'/'} className='flex items-center gap-2 text-[#141718] mt-6 underline'>Shop Now   <LiaLongArrowAltRightSolid/>  </Link>
                </div>
         </div>
    </div>
  )
}

export default SaleUp