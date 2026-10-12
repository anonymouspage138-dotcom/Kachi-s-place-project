import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CgTime } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

function Footer(){
  return (
    <Container fluid className='bg-black p-5 text-white'>
      <Row className='gap-5'>
        <Col>
        <img src="public\images\kachi01.png" alt="" width={100} />
        <p>Delicious meals, freshly prepared with love. Enjoy your favourite dishes and get them delivered straight to your doorstep</p>
         <p> <FaLocationDot /> Lagos, Nigeria</p></Col>
        <Col><h6>Quick Links</h6> 
          <li>Home</li>
          <li>Our Menu</li>
          <li> About Us</li>
          <li>Contact Us</li>
        </Col>
        <Col><h6>Contact Us</h6>
        <p> <FaPhoneSquareAlt />+234 8137160820</p>
        <p> <AiOutlineMail /> hello@kachi-splace.com</p>
        <p> <CgTime />9 AM - 10 PM</p>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col className='text-center'><h6>© 2026 Wonderland. All rights reserved.</h6></Col>
      </Row>
    </Container>

  );
}

export default Footer
