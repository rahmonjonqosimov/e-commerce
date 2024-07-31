import React from 'react';
import { Link } from 'react-router-dom';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { article_image_1, article_image_2, article_image_3 } from '../../assets';



const Articles:React.FC = () => {
  return (
    <div className='container mx-auto px-4 mt-20 mb-12'>
        <div className="flex items-center justify-between">
            <h1 className='text-[40px] font-semibold'>Latest Articles</h1>
            <Link to={'/'} className='flex items-center gap-2 text-[#141718] text-base font-medium underline'> View More <LiaLongArrowAltRightSolid/> </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col">
                <img src={article_image_1} alt="Article image" className='w-full' />
                <h4 className='mt-6 mb-2 text-xl font-semibold leading-7'>2023 Holiday Gift Guide</h4>
                <Link to={'/'} className='flex items-center gap-2 text-[#141718] underline'> Read More <LiaLongArrowAltRightSolid/> </Link>
            </div>
            <div className="flex flex-col">
                <img src={article_image_2} alt="Article image" className='w-full' />
                <h4 className='mt-6 mb-2 text-xl font-semibold leading-7'>2023 Holiday Gift Guide</h4>
                <Link to={'/'} className='flex items-center gap-2 text-[#141718] underline'> Read More <LiaLongArrowAltRightSolid/> </Link>
            </div>
            <div className="flex flex-col">
                <img src={article_image_3} alt="Article image" className='w-full' />
                <h4 className='mt-6 mb-2 text-xl font-semibold leading-7'>2023 Holiday Gift Guide</h4>
                <Link to={'/'} className='flex items-center gap-2 text-[#141718] underline'> Read More <LiaLongArrowAltRightSolid/> </Link>
            </div>
        </div>
    </div>
     )
}

export default Articles