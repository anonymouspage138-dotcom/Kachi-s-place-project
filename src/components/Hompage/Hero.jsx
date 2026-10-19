import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="\public\images\slider-K.jpg" alt="" />
        <Carousel.Caption>
          <h3>Home Made Jollof Rice Like Never Before</h3>
          <p>Rich in flavour, fresh ingredients, and the perfect blend of spices — just the way you love it.</p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="public\images\remove_the_text_20261012122729.jpg" alt="" />
        <Carousel.Caption>
          <h3>Juicy Grilled Chicken, You Would Love It.</h3>
          <p>Tender, well-seasoned and grilled to taste best. Simple, delicious and satisfying</p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public\images\Spagetti.jpg" alt="" />
        <Carousel.Caption>
          <h3>Green, clean, and absolutely delicious</h3>
          <p>
            Nothing beats a quick, savory spaghetti. Crisp green peppers, sharp spring onions, and perfectly tossed spaghetti. Proof that simple ingredients make the best meals
          </p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="public\images\Shift_him_left_20261012124432.jpg" alt="" />
        <Carousel.Caption className='last-caption'>
          <h3>Great Food, Fast Delivery</h3>
          <p>
            Your favourite meals, at your convenience. Fresh, hot and right on time.
          </p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;