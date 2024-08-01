import React from 'react'

const Cart:React.FC = () => {
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

            <div className="flex gap-16">
                <div className="grid grid-cols-4"></div>
            </div>

        </div>
    </>
  )
}

export default Cart