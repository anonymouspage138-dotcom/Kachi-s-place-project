import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'



let name = 'Cyril';
let age = 90;
let course = "FullStack"
const Home = () => {
    const Fruits = ["Orange", "Pawpaw", "Cucumber", "Mango"]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
     
    </div>
  )
}

export default Home
