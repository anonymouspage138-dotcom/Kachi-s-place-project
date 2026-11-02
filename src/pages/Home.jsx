import React from 'react'

import Hero from '../components/Hompage/Hero'
import PopularDish from '../components/Hompage/PopularDish';


const Home = ({onAddToCart}) => {
    
  return (
    <div>
    
      <Hero></Hero>
      <PopularDish onAddToCart ={onAddToCart}/>
     
     
    </div>
  )
}

export default Home
