import React from 'react';
import { logo } from '../../assets';
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { LiaArrowRightSolid } from "react-icons/lia";


const Footer:React.FC = () => {
  return (
    <div className='py-16 pb-5 bg-[#E8ECEF]'>
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <img src={ logo } alt="Logo" />
            <p className='text-[#141718] text-sm max-w-[160px] my-8'>43111 Hai Trieu street, District 1, HCMC Vietnam <br /><br /> 84-756-3237</p>
            <div className="flex items-center gap-6">
              <Link to={'/'}> <IoLogoInstagram size={24}/> </Link>
              <Link to={'/'}> <IoLogoFacebook size={24}/> </Link>
              <Link to={'/'}> <IoLogoYoutube size={24}/> </Link>
            </div>
          </div>
          <ul>
            <h3 className='text-base text-[#141718] font-semibold mb-10'>Page</h3>
            <li className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px] '> Home </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Shop </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Product </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Articles </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Contact Us </Link>
            </li>
          </ul>
          <ul>
            <h3 className='text-base text-[#141718] font-semibold mb-10'>Info</h3>
            <li className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px] '> Shipping Policy </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Return & Refund </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> Support </Link>
            </li>
            <li  className='mb-6'>
                <Link to={'/'} className='text-sm leading-[22px]'> FAQs </Link>
            </li>
          </ul>
          <div className="flex flex-col max-w-[350px] ">
            <h3 className='text-base text-[#141718] font-semibold mb-10'>Join Newsletter</h3>
            <p className='text-sm text-[#141718] mb-6'>Subscribe our newsletter to get more deals, new products and promotions</p>
            <div className='flex h-12 rounded-[90px] overflow-hidden px-2 border-[2px] border-solid border-[#6C727540]'> 
              <input type="text" placeholder='Enter your email' required className='px-4 bg-transparent flex-1 outline-none' />
              <button className='w-8 h-8 rounded-[50%] bg-[#377DFF] grid place-items-center mt-[6px]'> <LiaArrowRightSolid color='white' /> </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#6C7275] h-[1px] mt-12"></div>
        <p className='text-center text-sm text-[#141718] mt-5'>Copyright © 2022. All rights reserved. </p>
    </div>
  )
}

export default Footer;