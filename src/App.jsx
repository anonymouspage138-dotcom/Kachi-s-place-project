import React from 'react'
import Home from './pages/Home'
import "./test.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import NavbarMenu from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <NavbarMenu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>    
  )
}

export default App
