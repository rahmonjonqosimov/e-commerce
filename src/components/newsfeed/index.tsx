import React from 'react'
import { Link } from 'react-router-dom';
import { news_1, news_2, news_3, news_4 } from '../../assets';
import { FaCarCrash } from 'react-icons/fa';

const Newsfeed:React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
        <div className='text-[#6C7275] text-base font-bold text-center '>NEWSFEED</div>
        <h2 className='text-[40px] font-bold text-center my-2'>Instagram</h2>
        <p className='text-[#121212] text-center text-xl'>Follow us on social media for more discount & promotions</p>
        <Link to={'/'} className='text-[#6C7275] text-center text-xl font-medium block mt-4' > @3legant_official </Link>
        <div className="flex items-center justify-between my-10">
            <img src={news_1} alt="Image" />
            <img src={news_2} alt="Image" />
            <img src={news_3} alt="Image" />
            <img src={news_4} alt="Image" />
        </div>
        <div className="grid grid-cols-4 my-20">
            <div className="">
                <FaCarCrash size={30}/>
                <h4 className='text-[#141718] text-xl font-medium mb-2 mt-4'>Free Shipping</h4>
                <p className='text-[#6C7275] text-sm'>Order above $200</p>
            </div>
            <div className="">
            <FaCarCrash size={30}/>
                <h4 className='text-[#141718] text-xl font-medium mb-2 mt-4'>Money-back</h4>
                <p className='text-[#6C7275] text-sm'>30 days guarantee</p>
            </div>
            <div className="">
            <FaCarCrash size={30}/>

                <h4 className='text-[#141718] text-xl font-medium mb-2 mt-4'>Secure Payments</h4>
                <p className='text-[#6C7275] text-sm'>Secured by Stripe</p>
            </div>
            <div className="">
            <FaCarCrash size={30}/>

                <h4 className='text-[#141718] text-xl font-medium mb-2 mt-4'>24/7 Support</h4>
                <p className='text-[#6C7275] text-sm'>Phone and Email support</p>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed