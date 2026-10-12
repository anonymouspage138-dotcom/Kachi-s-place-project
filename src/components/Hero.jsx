import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="public\images\slide-001.png" alt="" />
      </Carousel.Item>


      <Carousel.Item interval={500}>
       <img src="public\images\slide-new.jpg.jpeg" alt="" />
      </Carousel.Item>


      <Carousel.Item>
       <img src="public\images\slide-002.jpeg" alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Hero;