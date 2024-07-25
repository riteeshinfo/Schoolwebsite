import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-50 h-50 container mt-4" src="/assets/images/sports_day.jpg" alt="Sports Day" />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50 h-50 container mt-4 " src="/assets/images/science_exhibition.jpg" alt="Science Exhibition" />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50 h-50 container mt-4" src="/assets/images/cultural_fest.jpeg" alt="Cultural Fest" />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
