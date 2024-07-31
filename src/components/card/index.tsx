import React from 'react'
import { ProductsSchema } from '../../context/types';
import { FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill  } from "react-icons/go";

import '../../index.css'


const Card:React.FC<{product:ProductsSchema}> = ({product}) => {
  return (
    <div className='shadow-md group rounded overflow-hidden'>
      <div className="relative h-[300px] w-full bg-[#DDDDDD] overflow-hidden">
          <img src={product.images[0]} alt={product.title} className='w-full h-full object-contain' />

          <div className="w-8 h-8 rounded-[50%] bg-white absolute -top-10 -right-10 duration-300 flex items-center justify-center group-hover:top-4 group-hover:right-4">
              <GoHeart size={20} className='cursor-pointer '/>
          </div>

          <button className='py-2 px-16 bg-[#141718] shadow-lg rounded-lg text-white absolute bottom-4 left-6 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100 active:scale-[0.95] hover:bg-[#1a1e20]'>Add to cart</button>
          
          <span className='px-3 py-1 bg-white text-black rounded-md text-center text-sm font-bold absolute top-4 left-4'>NEW</span>

      </div>
      <div className='flex items-center gap-[2px] mt-3 ml-2'>
            {
             Array(Math.trunc(product.rating)).fill("").map( ( _, inx:number ) => (
               <FaStar className='text-[#353839]' key={inx} size={16}/>
              ) )
            }
       </div>
       <p title={product.title} className='truncate-multiline my-1 text-base font-semibold leading-6 ml-2'>{product.title}</p>
       <h4 className='truncate-multiline my-1 text-sm font-semibold leading-6 ml-2'> ${ product.price }</h4>
    </div>
  )
}

export default Card