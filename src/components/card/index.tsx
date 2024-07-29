import React from 'react'
import { ProductsSchema } from '../../context/types'

const Card:React.FC<{product:ProductsSchema}> = ({product}) => {
  return (
    <div>
      <img src={product.images[0]} alt="" />
    </div>
  )
}

export default Card