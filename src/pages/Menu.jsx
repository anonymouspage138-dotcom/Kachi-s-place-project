import React from 'react'
import foods from "../data/foods"

const Menu = () => {
  return (
    <div>
      <section className="menu-page">
        <h1>Our Menu</h1>
        <div className="food-grid">
            {foods.map((food) =>(
                <FoodCart key={food.id} food = {food}/>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Menu
