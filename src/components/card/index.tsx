import React from 'react'
import { ProductsSchema } from '../../context/types';
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill  } from "react-icons/go";
import { toggleHeart } from '../../context/slice/heartSlice';
import { addToCart, ProductsSchemaCart, increment, decrement, removeFromCart } from '../../context/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../index.css'


const Card:React.FC<{product:ProductsSchema}> = ( { product } ) => {

  const dispatch = useDispatch();
  const wishlist:ProductsSchema[] = useSelector((state:any )=> state.heart.value);  
  const cart:ProductsSchemaCart[] = useSelector((state:any )=> state.cart.value);
  const handleHeartProduct: ( product: ProductsSchema ) => void = ( product ) => {
    dispatch( toggleHeart( product ) );

  }
  
  let isHeart : boolean =   wishlist.some((item:ProductsSchema) => item.id === product.id);
  let isCart : boolean =   cart.some((item:ProductsSchema) => item.id === product.id);

  let productQny:number = cart.filter( ( item:ProductsSchemaCart ) => item.id === product.id )[0]?.quantity;

  const handleDecrement:( product:ProductsSchema ) => void = ( product ) => {
    if( productQny <= 1 ) {
      dispatch(removeFromCart(product));
    }else{
      dispatch(decrement(product));
    }
  }

  return (
    <div className='shadow-md group rounded overflow-hidden'>
      <div className="relative h-[300px] w-full bg-[#DDDDDD] overflow-hidden">
          <img src={product.images[0]} alt={product.title} className='w-full h-full object-contain' />

          <div onClick={() => handleHeartProduct(product)} className={`cursor-pointer w-8 h-8 rounded-[50%] bg-white absolute ${ isHeart ? " top-4 right-4" : "-top-10 -right-10"} duration-300 flex items-center justify-center group-hover:top-4 group-hover:right-4`}>
              {
               isHeart ? <GoHeartFill size={20} color='#121212s' /> : <GoHeart size={20}/>
              }
    
          </div>

          {
            isCart ? 
                <div className="grid grid-cols-3 place-items-center w-[213px] h-10 bg-[#121212] absolute bottom-4 left-6 shadow-lg rounded-lg">
                 <button onClick={() => handleDecrement(product)}  className='w-full h-full grid place-items-center'> <FaMinus color='white'/></button>
                  <span className='text-white w-full h-full grid place-items-center'> { productQny || 0  }  </span>
                  <button onClick={() => dispatch(increment(product))} disabled={productQny >= 10} className={`w-full h-full grid ${productQny >= 10 ? "cursor-no-drop" : ""} place-items-center`}> <FaPlus color={`${productQny >= 10 ? "gray" : "white"}`}/></button>
                </div>
             : 
                <button onClick={() => dispatch(addToCart(product))} className={`py-2 px-16 bg-[#141718] shadow-lg rounded-lg text-white absolute bottom-4 left-6 origin-bottom ${isCart ? "scale-y-100" : "scale-y-0"}  transition-transform duration-300 group-hover:scale-y-100 active:scale-[0.95] hover:bg-[#1a1e20]`}>Add to cart</button>

          }

          
          
          <span className='px-3 py-1 bg-white text-black rounded-md text-center text-sm font-bold absolute top-4 left-4'>NEW</span>

      </div>
      <div className='flex items-center gap-[2px] mt-3 ml-2'>
            {
             Array(Math.trunc(product.rating)).fill("").map( ( _, inx:number ) => (
               <FaStar className='text-[#121212]' key={inx} size={16}/>
              ) )
            }
       </div>
       <p title={product.title} className='truncate-multiline my-1 text-base font-semibold leading-6 ml-2'>{product.title}</p>
       <h4 className='truncate-multiline my-1 text-sm font-semibold leading-6 ml-2'> ${ product.price }</h4>
    </div>
  )
}

export default Card