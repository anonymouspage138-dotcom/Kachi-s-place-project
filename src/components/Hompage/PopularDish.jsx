import React from 'react'
import foods from "../../data/food"
import FoodCard from "../FoodCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PorpularDish() {

    const popularFoods = foods.slice(0, 6)
  return (
    <div>
    <Container fluid className='all-in1'>
      <Row>
        <Col md= {3}>Banner</Col>
        <Col md= {9}>
        <section className='title'>
            <h6>Our Special</h6>
            <h2>Popular Dishes</h2>
            <p>Your plate reflects your lifestyle, Eat Healthy</p>
        </section>

        <div className="food-container">
            {popularFoods.map((food) =>(
                <FoodCard food={food} key={food.id}/>
            ))}
        </div>

        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default PorpularDish
