<<<<<<< HEAD
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiClock } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";


const FindUs = () => {
  return (
    <div className="find-us-section">
      <Container>
        {/* Header Section */}
        <div className="find-us-header text-center mb-5">
          <h1>
            Order Your <span className="text-warning">Meal</span>
          </h1>
          <p>Find us & connect</p>
        </div>

        {/* Informational Columns Section */}
        <Row className="info-row g-4 justify-content-center">
          
          {/* Card 1: Location */}
          <Col md={4} sm={12} className="info-card text-center border-divider">
            <div className="info-icon-wrapper">
              <MdLocationOn />
            </div>
            <h5>Kitchen & Dispatch Hub</h5>
            <p>
              Kitchen & Dispatch Central, Lagos Rd,<br />
              @Kachi's Place Road, Lagos, Nigeria
            </p>
            <p className="mt-3"><strong>Dispatch Hotline:</strong> +234 800 000 0000</p>
            <p><strong>Support:</strong> +234 801 111 1111</p>
          </Col>

          {/* Card 2: Hours */}
          <Col md={4} sm={12} className="info-card text-center border-divider">
            <div className="info-icon-wrapper">
              <FiClock />
            </div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat:</strong><br />
              9 AM - 10 PM
            </p>
            <p className="mt-3">
              <strong>Sun:</strong><br />
              11 AM - 9 PM
            </p>
          </Col>

          {/* Card 3: Social Connections */}
          <Col md={4} sm={12} className="info-card text-center">
            <div className="info-icon-wrapper">
              <IoIosPeople />
            </div>
            <h4>Connect With Us</h4>
            <p>🌐 @Kachi's Place</p>
            <p>📸 @Kachi's Place</p>
            <p>🐦 @Kachi's Place</p>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default FindUs;
=======
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiClock } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";


const FindUs = () => {
  return (
    <div className="find-us-section">
      <Container>
        {/* Header Section */}
        <div className="find-us-header text-center mb-5">
          <h1>
            Order Your <span className="text-warning">Meal</span>
          </h1>
          <p>Find us & connect</p>
        </div>

        {/* Informational Columns Section */}
        <Row className="info-row g-4 justify-content-center">
          
          {/* Card 1: Location */}
          <Col md={4} sm={12} className="info-card text-center border-divider">
            <div className="info-icon-wrapper">
              <MdLocationOn />
            </div>
            <h5>Kitchen & Dispatch Hub</h5>
            <p>
              Kitchen & Dispatch Central, Lagos Rd,<br />
              @Kachi's Place Road, Lagos, Nigeria
            </p>
            <p className="mt-3"><strong>Dispatch Hotline:</strong> +234 800 000 0000</p>
            <p><strong>Support:</strong> +234 801 111 1111</p>
          </Col>

          {/* Card 2: Hours */}
          <Col md={4} sm={12} className="info-card text-center border-divider">
            <div className="info-icon-wrapper">
              <FiClock />
            </div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat:</strong><br />
              9 AM - 10 PM
            </p>
            <p className="mt-3">
              <strong>Sun:</strong><br />
              11 AM - 9 PM
            </p>
          </Col>

          {/* Card 3: Social Connections */}
          <Col md={4} sm={12} className="info-card text-center">
            <div className="info-icon-wrapper">
              <IoIosPeople />
            </div>
            <h4>Connect With Us</h4>
            <p>🌐 @Kachi's Place</p>
            <p>📸 @Kachi's Place</p>
            <p>🐦 @Kachi's Place</p>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default FindUs;
>>>>>>> 729986a3df47e8ff134470b4c09c8fd62f162007
