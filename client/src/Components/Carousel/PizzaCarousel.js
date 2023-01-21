import Carousel from "react-bootstrap/Carousel";
import "./PizzaCarousel.css";

const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-all carousel-item-one">
        <Carousel.Caption>
          <h3>Buy two get one free offer</h3>
          <p>Get the best deals.</p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-two">
        <Carousel.Caption>
          <h3>Make your order now</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-three">
        <Carousel.Caption>
          <h3>We deliver to all part of the town.</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;
