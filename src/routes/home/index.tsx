import React from 'react'
import Hero from '../../components/hero'
import Brand from '../../components/brand'
import Products from '../../components/products'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home:React.FC = () => {
  const params = { limit: 20 }
  const { data } = useGetProductsQuery({ url: "" , ...params});
  
  return (
    <>
        <Hero/>
        <Brand/>
        <Products products={data?.products}/>
    </>
  )
}

export default Home