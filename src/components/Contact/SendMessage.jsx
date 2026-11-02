<<<<<<< HEAD
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SendMessage = () => {
  return (
    <div className="contact-section-wrapper">
      <Container> {/* Removed fluid to give clean layout side margins */}
        <div className="message-heading text-center text-md-start px-3">
          <h2>
            Send Us a <span className="text-warning">Message</span>
          </h2>
          <p>We'd Love to Hear From You</p>
        </div>
        
        <Row className="g-4 align-items-stretch">
          {/* Form Left Grid Column */}
          <Col lg={6} md={12}>
            <div className="slick-form-card p-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Message" required />
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn-submit-slick w-100 py-3 rounded-pill d-flex gap-2 justify-content-center align-items-center"
                    >
                      SEND MESSAGE <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          
          {/* Map Right Grid Column */}
          <Col lg={6} md={12} className="map-iframe-container d-flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.337090353503!2d7.460832539550774!3d9.082692000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b00161ba005%3A0x2302708c59569c93!2sCalabar%20Aroma%20Abuja%20Restaurant!5e0!3m2!1sen!2sng!4v1792278666895!5m2!1sen!2sng"
              height="100%"
              style={{ minHeight: "380px", border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Kachi place restaurant map location"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SendMessage;
=======
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SendMessage = () => {
  return (
    <div className="contact-section-wrapper">
      <Container> {/* Removed fluid to give clean layout side margins */}
        <div className="message-heading text-center text-md-start px-3">
          <h2>
            Send Us a <span className="text-warning">Message</span>
          </h2>
          <p>We'd Love to Hear From You</p>
        </div>
        
        <Row className="g-4 align-items-stretch">
          {/* Form Left Grid Column */}
          <Col lg={6} md={12}>
            <div className="slick-form-card p-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Message" required />
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn-submit-slick w-100 py-3 rounded-pill d-flex gap-2 justify-content-center align-items-center"
                    >
                      SEND MESSAGE <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          
          {/* Map Right Grid Column */}
          <Col lg={6} md={12} className="map-iframe-container d-flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.337090353503!2d7.460832539550774!3d9.082692000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b00161ba005%3A0x2302708c59569c93!2sCalabar%20Aroma%20Abuja%20Restaurant!5e0!3m2!1sen!2sng!4v1792278666895!5m2!1sen!2sng"
              height="100%"
              style={{ minHeight: "380px", border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Kachi place restaurant map location"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SendMessage;
>>>>>>> 729986a3df47e8ff134470b4c09c8fd62f162007
