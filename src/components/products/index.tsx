import React from 'react';
import { ProductsSchema } from '../../context/types';
import Card from '../card';

const Products:React.FC<{products:ProductsSchema[] }> = ({ products }) => {
    
    console.log(products);
    
    const product_item : JSX.Element[] | undefined = products?.map((product:ProductsSchema) => (
        <Card product={product} key={product.id}/>
    ))    
  return (
    <div className='container mx-auto px-4'> {product_item} </div>
  )
}

export default Products