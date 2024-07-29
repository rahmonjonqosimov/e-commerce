import React from 'react'
import { Link } from 'react-router-dom'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";


const NotificationBar:React.FC = () => {
  return (
    <div className='bg-[#377DFF] py-2 text-white'>
        <div className='container mx-auto px-4 flex items-center justify-center gap-3 relative'>
            <p className='text-[14px]'> 30% off storewide — Limited time! </p>
            <Link  to={'/'} className='flex items-center gap-1 underline'>
                <span className='text-[14px]'>Shop Now</span>
                <LiaLongArrowAltRightSolid />
             </Link>
             <IoCloseOutline size={20} className='absolute right-4 top-[3px] cursor-pointer'/>
        </div>
    </div>
  )
}

export default NotificationBar