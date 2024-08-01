import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Layout from './routes/layout'
import Wishlist from './routes/wishlist'
import Cart from './routes/cart'

const App:React.FC = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App