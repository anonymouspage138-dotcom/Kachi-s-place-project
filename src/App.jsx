import React, { useState } from 'react'
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

  const [cartItems, setCartItems] = useState([])
  
  function addToCart (food){
    let newCart = [];
    let foodFound = false;

    for (let i = 0; i < cartItems.length; i++){
      if (cartItems[i].id === food.id){
        let updateFood = {
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description : cartItems[i].description,
          quntity : cartItems[i].quntity +1,

        }
        
        newCart.push(updatedFood);
        foodFound = true

      } else {
        newCart.push(cartItems[i])
      }

    }

    if (foodFound === false){
      let newFood = {
        id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          description : food.description,
          quntity : 1,

      };
      newCart.push(newFood)
    }
    setCartItems(newCart)
  }

  function increaseQuantity (id){
    let newCart = []

    for(let i = 0; i < cartItems.length; i++){
      if(cartItems[i].id === id){
        let updatedFood = {
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description : cartItems[i].description,
          quntity : cartItems[i].quntity +1,
        }

        newCart.push(updatedFood);
        
        
      }else {
        newCart.push(cartItems[i])
      }

    }
       setCartItems(newCart)

  }

  function decreaseQuantity (id){
    let newCart = []

    for(let i = 0; i < cartItems.length; i++){
      if(cartItems[i].id === id){
        if(cartItems[i].quantity > 1){
        let updatedFood = {
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description : cartItems[i].description,
          quntity : cartItems[i].quntity -1,
        }

        newCart.push(updatedFood);
        
        
      }else {
        newCart.push(cartItems[i])
      }
    }

      setCartItems(newCart)
    }

  }

  let cartCount = 0;

  for (let i = 0; i < cartItems.length; i++){
    cartCount = cartCount + cartItems[i].quantity
  }

  return (
    <BrowserRouter>
    <NavbarMenu cartCount={cartCount} />
    <Routes>
      <Route path='/' element={<Home onAddToCart ={addToCart} />} />
      <Route path='/menu' element={<Menu onAddToCart={addToCart} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart cartItems ={cartItems} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onAddToCart={addToCart} />} />
    </Routes>
    <Footer />
    </BrowserRouter>    
  )
}

export default App
