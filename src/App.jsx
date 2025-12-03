import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './components/Header.jsx'
import FooterSection from './components/FooterSection.jsx'
import Home from './pages/Home.jsx'
import About from './pages/AboutUs.jsx'
import Products from './pages/Products.jsx'
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
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <FooterSection/>

    </Router>
  )
}

export default App;