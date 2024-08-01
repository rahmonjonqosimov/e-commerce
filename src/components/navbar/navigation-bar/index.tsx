import React from 'react'
import { logo } from '../../../assets'
import { Link } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";


import { FaRegHeart } from "react-icons/fa";
import { ProductsSchema } from '../../../context/types';



const NavigationBar:React.FC = () => {
    const wishlist:ProductsSchema[] = useSelector((state:any) => state.heart.value) 
  return (
    <div className=' sticky top-0 bg-white z-10'>
        <div className="container mx-auto p-4 flex items-center justify-between">
            <Link to={'/'}>
                <img src={ logo } alt="Logo" />
            </Link>
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
                <Link to={'/wishlist'} className='relative' >
                    <FaRegHeart size={20} className='cursor-pointer'/>
                    <sup className='w-3 h-3 rounded-full bg-black absolute -top-[5.5px] -right-[6px] grid place-items-center text-white text-[10px]  '> { wishlist.length } </sup>
                </Link>
                <Link to={'/cart'}>
                    <FiShoppingCart size={20} className='cursor-pointer'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar