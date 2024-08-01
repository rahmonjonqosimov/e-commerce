import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductsSchema } from '../../context/types';
import Products from '../../components/products';

const Wishlist:React.FC = () => {
  const wishlist:ProductsSchema[] = useSelector((state:any )=> state.heart.value);  
    useEffect(() => {
        window.scrollTo(0, 0)
    } , [])
  return (
    <section className='my-20'>
        <Products products={wishlist}/>
    </section>
  )
}

export default Wishlist