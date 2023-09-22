import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import LogIn from './components/Login'
import ProductDetails from './components/ProductDetail'
import Signup from './components/Signup'



function App() {
return (
  <div className='App'>
    <div className='navigation'>
      <Navbar />
    </div>
    {/* <Route path="/" element={<Home/>}/> */}
    <div className='Page'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  </div>
)
}

export default App 