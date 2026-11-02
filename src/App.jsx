import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import "./test.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import NavbarMenu from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'
import Checkout from './pages/Checkout'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Faqs from './pages/Faqs'
import Refund from './pages/Refund'
import Offers from './pages/Offers'
import Delivery from './pages/Delivery'
import OrderSuccess from './pages/OrderSuccess'

const App = () => {
// Optional: Load cart from localStorage so items don't reset on page refresh
    const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item or increment quantity if it already exists (using functional update)
    function addToCart(food) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === food.id);
        if (existingItem) {
          return prevItems.map(item => 
            item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...food, quantity: 1 }];
        }
      });
    }

    // Increase item quantity
    function increaseQuantity(id) {
      setCartItems(prevItems =>
        prevItems.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }

    // Decrease item quantity (removes item completely if quantity drops below 1)
    function decreaseQuantity(id) {
      setCartItems(prevItems =>
        prevItems
          .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
          .filter(item => item.quantity > 0)
      );
    }

    // Calculate total cart count for the navbar badge
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
    <NavbarMenu cartCount={cartCount} />
    <Routes>
      <Route path='/' element={<Home onAddToCart ={addToCart} />} />
      <Route path='/menu' element={<Menu onAddToCart={addToCart} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} /> 
       <Route path='/terms' element={<Terms />} /> 
       <Route path='/privacy-policy' element={<PrivacyPolicy />} /> 
       <Route path='/faqs' element={<Faqs />} /> 
       <Route path='/refund' element={<Refund />} /> 
       <Route path='/delivery' element={<Delivery />} /> 
       <Route path='/offer' element={<Offers />} />  
       <Route path='/ordersuccess' element={<OrderSuccess />} /> 

      <Route path='/checkout' element={<Checkout cartItems ={cartItems}/>} />       
      <Route path='/cart' element={<Cart cartItems ={cartItems} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onAddToCart={addToCart} />} />
    </Routes>
    <Footer />
    </BrowserRouter>    
  )
}

export default App
