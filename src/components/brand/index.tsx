import React from 'react';
import { brand_logo_1, brand_logo_2, brand_logo_3, brand_logo_4, brand_logo_5, brand_logo_6 } from '../../assets'

const Brand:React.FC = () => {
  return (
    <div className='container mx-auto px-4 my-10 text-center'>
        <h3 className='text-xl font-semibold text-[#141718] mb-4'>Trending Brands</h3>
        <div className="flex items-center justify-between">
            <img src={ brand_logo_1 } alt="Logo" />
            <img src={ brand_logo_2 } alt="Logo" />
            <img src={ brand_logo_3 } alt="Logo" />
            <img src={ brand_logo_4 } alt="Logo" />
            <img src={ brand_logo_5 } alt="Logo" />
            <img src={ brand_logo_6 } alt="Logo" />
        </div>
    </div>
  )
}

export default Brand