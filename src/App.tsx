import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Layout from './routes/layout'

const App:React.FC = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App