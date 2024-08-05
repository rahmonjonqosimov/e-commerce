import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoCloseOutline } from "react-icons/io5";
import { decrement, increment, ProductsSchemaCart, removeFromCart } from '../../context/slice/cartSlice';


const Cart:React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  
    const item = useSelector((state:any) => state.cart.value);
    const dispatch = useDispatch();
    const handleDeleteFromCart:( product:ProductsSchemaCart ) => void = (product) => {
        dispatch(removeFromCart(product));
    }

    const cartItem:JSX.Element[] | undefined = item.map((item:ProductsSchemaCart) => (
        <div key={item.id} className="grid grid-cols-[316px_80px_80px_80px] py-6 border-b-[1px] border-solid border-[#E8ECEF] justify-between" >
        <div className="flex items-center gap-4">
          <div className="w-20 h-24 bg-[#F4F5F7]">
              <img src={item.images[0]} alt="" className='w-full h-full object-contain' />
          </div>
          <div className="flex flex-col gap-2">
              <h4 className='text-sm font-semibold'>{item.title}</h4>
              <span className='text-xs text-[#6C7275]'>Rating: {item.rating}</span>
              <button onClick={() => handleDeleteFromCart(item)} className='flex items-center gap-[2px] text-[#6C7275] duration-300 hover:text-red-400 '> <IoCloseOutline  size={20}/> <span className='text-sm font-semibold'>Remove</span>  </button>
          </div>
        </div>
        <div className='grid grid-cols-3 place-items-center h-8 border-solid border-[1px] border-[#6C7275] w-full rounded my-auto'>
          <button className='w-full h-full text-xl disabled:cursor-no-drop disabled:opacity-[0.4]' onClick={() => dispatch(decrement(item))} disabled={item.quantity <= 1}>-</button>
          <span>{item.quantity}</span>
          <button className='w-full h-full text-xl disabled:cursor-no-drop disabled:opacity-[0.4]' onClick={() => dispatch(increment(item))} disabled={item.quantity >= 10}>+</button>
        </div>
        <div className='text-[18px] text-[#121212]  my-auto'> $ {Math.round(item.price)} </div>
        <div className='text-[18px] text-[#121212] font-semibold my-auto'> $ {Math.round(item.price) * item.quantity} </div>
  </div>
    ))
    
  return (
    <>
        <div className="container mx-auto px-4">
            <h1 className='text-[54px] text-center font-semibold my-10'>Cart</h1>

            <div className="grid grid-cols-3 max-w-[830px] mx-auto mb-10 gap-10">
                <div className="flex items-center place-content-center gap-4 relative pb-6">
                    <div className="w-11 h-11 rounded-full bg-[#23262F] grid place-items-center text-white text-xl">1</div>
                    <span className='text-base text-[#23262F] font-bold leading-7'>Shopping cart</span>
                    <div className='w-full h-[1px] bg-[#23262F] absolute bottom-0'></div>
                </div>
                <div className="flex items-center place-content-center  gap-4 relative pb-6">
                    <div className="w-11 h-11 rounded-full bg-[#B1B5C3] grid place-items-center text-white text-xl">2</div>
                    <span className='text-base text-[#B1B5C3] font-bold leading-7'>Checkout details</span>
                    {/* <div className='w-full h-[1px] bg-[#23262F] absolute bottom-0'></div> */}
                </div>
                <div className="flex items-center place-content-center gap-4 relative pb-6">
                    <div className="w-11 h-11 rounded-full bg-[#B1B5C3] grid place-items-center text-white text-xl">3</div>
                    <span className='text-base text-[#B1B5C3] font-bold leading-7'>Order complete</span>
                    {/* <div className='w-full h-[1px] bg-[#23262F] absolute bottom-0'></div> */}
                </div>
            </div>

            <div className="mb-20 grid grid-cols-[700px_1fr] gap-16">
               <div className='w-full'>
                <div className="grid grid-cols-[316px_80px_80px_80px] pb-6 border-b-[1px] border-solid border-[#6E7275] justify-between">
                    <span className='text-base font-semibold text-[#121212]'>Product</span>
                    <span className='text-base font-semibold text-[#121212]'>Quantity</span>
                    <span className='text-base font-semibold text-[#121212]'>Price</span>
                    <span className='text-base font-semibold text-[#121212]'>Subtotal</span>
                </div>
                { cartItem }
               </div>
               <div className="p-6 border-solid border-[1px] border-[#6E7275] rounded-md">
                    <h4 className='text-xl font-semibold mb-4'>Cart summary</h4>
                    <form action="">
                        <label htmlFor="free"  className={`py-3 px-4 flex items-center justify-between border-[1px] border-solid  rounded mb-3 cursor-pointer ${selectedOption === "free" ? "border-black" : "border-[#ddd]"}`}>
                            <div className="flex items-center gap-3">
                                <input  type="radio" id='free' name='shipping'
                                    value="free"
                                    checked={selectedOption === 'free'}
                                    onChange={handleOptionChange}
                                />
                                <span className='text-base text-[#141718]'>Free shipping</span>
                            </div>
                            <span  className='text-base text-[#141718]'>$0.00</span>
                        </label>
                        <label htmlFor="express" className={`py-3 px-4 flex items-center justify-between border-[1px] border-solid rounded mb-3 cursor-pointer ${selectedOption === "express" ? "border-black" : "border-[#ddd]"}`} >
                            <div className="flex items-center gap-3">
                                <input type="radio" id='express' name='shipping' 
                                       value="express"
                                       checked={selectedOption === 'express'}
                                       onChange={handleOptionChange}
                                />
                                <span className='text-base text-[#141718]'>Express shipping</span>
                            </div>
                            <span  className='text-base text-[#141718]'>+$15.00</span>
                        </label>
                        <label htmlFor="pick" className={`py-3 px-4 flex items-center justify-between border-[1px] border-solid border-[#6C7275] rounded cursor-pointer ${selectedOption === "pick" ? "border-black" : "border-[#ddd]"}`}>
                            <div className="flex items-center gap-3">
                                <input type="radio" id='pick' name='shipping' 
                                       value="pick"
                                       checked={selectedOption === 'pick'}
                                       onChange={handleOptionChange}
                                />
                                <span className='text-base text-[#141718]'>Pick Up</span>
                            </div>
                            <span  className='text-base text-[#141718]'>%21.00</span>
                        </label>
                    </form>    
               </div>
            </div>

        </div>
    </>
  )
}

export default Cart