import React from 'react'
import { logo } from '../../../assets'
import { Link } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";

import { FiShoppingCart } from "react-icons/fi";


import { FaRegUserCircle } from "react-icons/fa";



const NavigationBar:React.FC = () => {
  return (
    <div className=' sticky top-0 bg-white z-10'>
        <div className="container mx-auto p-4 flex items-center justify-between">
            <img src={ logo } alt="Logo" />
            <ul className='flex items-center gap-10'>
                <li>
                    <Link to={'/'} className='text-[14px]'>Home</Link>
                </li>
                <li>
                    <Link to={'/shop'} className='text-[14px]'>Shop</Link>
                </li>
                <li>
                    <Link to={'/product'} className='text-[14px]'>Product</Link>
                </li>
                <li>
                    <Link to={'/contact-us'} className='text-[14px]'>Contact Us</Link>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <LuSearch size={20} className='cursor-pointer'/>
                <FaRegUserCircle size={20} className='cursor-pointer'/>
                <FiShoppingCart size={20} className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar