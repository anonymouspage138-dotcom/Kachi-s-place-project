import React from 'react'
import foods from "../../data/food"
import FoodCard from "../FoodCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PorpularDish({ onAddToCart }) {

    const popularFoods = foods.slice(0, 6)
  return (
    <div>
    <Container fluid className='all-in1'>
      <Row className='p-5'>
        <Col md= {3}><img src='images/homebanner (1).png' alt='' width="100%" className='imge101' />
        </Col>
        <Col md= {9}>
        <section className='title'>
            <h6>Our Special</h6>
            <h2>Popular Dishes</h2>
            <p>Your plate reflects your lifestyle, Eat Healthy</p>
        </section>

        <div className="food-container">
            {popularFoods.map((food) =>(
                <FoodCard food={food} key={food.id} onAddToCart ={onAddToCart} />
            ))}
        </div>

        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default PorpularDish
