import { useState } from 'react'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './components/Header.jsx'
import FooterSection from './components/FooterSection.jsx'
import Home from './pages/Home.jsx'
import About from './pages/AboutUs.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductsDetails.jsx';
import Blogs from './pages/Blogs.jsx'
import BlogDetails from './pages/BlogDetails.jsx';
import ContactUs from './pages/ContactUs.jsx'
import './App.css'

function App() {
  return (
    <Router>

      <ScrollToTop/>

      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={< Products/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={< ContactUs/>} />
      </Routes>

      <FooterSection/>

    </Router>
  )
}

export default App;