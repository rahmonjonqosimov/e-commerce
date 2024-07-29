import React from 'react'
import Navbar from '../../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'

const Layout:React.FC = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout