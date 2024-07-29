import React from 'react'
import { hero_img } from '../../assets'

const Hero:React.FC = () => {
  return (
    <div className='bg-[#171D28]'> 
        <div className='container mx-auto px-4 grid grid-cols-2 place-items-center'>
           <img src={hero_img} alt="Hero image"  className='w-full'/>
           <div className="w-full items-center justify-center text-white ml-16 max-w-[420px]" >
                <h1 className='text-7xl'>Bring the warmth.</h1>
                <p className='text-[20px] font-medium mt-2 mb-7'>
                  Everyone needs a good winter jacket. 
                 Find yours with our collection and more.
                 </p>
                <button className='py-3 px-14 text-[18px] font-bold text-white bg-[#377DFF] rounded-[8px]'>Shopping Now</button>
           </div>
        </div>
    </div>
  )
}

export default Hero