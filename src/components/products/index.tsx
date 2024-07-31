import React from 'react';
import { ProductsSchema } from '../../context/types';
import Card from '../card';

const Products:React.FC<{products:ProductsSchema[] }> = ({ products }) => {
    
    const product_item : JSX.Element[] | undefined = products?.map((product:ProductsSchema) => (
        <Card product={product} key={product.id}/>
    ))    
  return (
    <div className='container mx-auto px-4'> 
      <div className="grid grid-cols-4 gap-6"> { product_item } </div>
     </div>
  )
}

export default Products