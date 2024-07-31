import React, { useState } from 'react'
import Hero from '../../components/hero'
import Brand from '../../components/brand'
import Products from '../../components/products'
import { useGetProductsQuery } from '../../context/api/productApi'
import { Pagination } from '@mui/material'
import Loading from '../../components/loading'
import Banner from '../../components/banner'

const Home:React.FC = () => {
  const [page, setPage] = useState<any>( sessionStorage.getItem("page-count") || 1 );

  const handleChange:( event:any, value:number ) => void = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", JSON.stringify(value));
  };

  const params = { limit: 8, skip : (page - 1) * 8 }
  const { data, isFetching } = useGetProductsQuery({ url: "" , ...params});
  const paginationCount:number = Math.ceil(data?.total / 8)
   
  
  return (
    <>
        <Hero/>
        <Brand/>
        {
            isFetching ? <Loading count={8}/> : <Products products={data?.products}/>
        }
        <Pagination color="primary"  count={paginationCount} page={+page} onChange={handleChange} className='flex items-center justify-center my-5' />
        <Banner/>
    </>
  )
}

export default Home