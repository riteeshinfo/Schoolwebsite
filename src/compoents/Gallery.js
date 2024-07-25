import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const photos = [
  {
    src: 'assets/images/sports_day.jpg',
    description: 'Students participating in various sports events.'
  },
  {
    src: 'assets/images/science_exhibition.jpg',
    description: 'Students presenting their science projects.'
  },
  {
    src: 'assets/images/cultural_fest.jpeg',
    description: 'Students performing in the cultural fest.'
  },
  
];

const videos = [
  {
    src: 'school_tour.mp4',
    description: 'Virtual tour of Springdale Public School.'
  },
  {
    src: 'annual_function.mp4',
    description: 'Highlights from the Annual Function 2023.'
  }
];

const Gallery = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Gallery</h2>
      <Row>
        {photos.map((photo, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={photo.src} />
              <Card.Body>
                <Card.Text>{photo.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h3 className="mb-4">Videos</h3>
      <Row>
        {videos.map((video, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <video width="100%" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Card.Body>
                <Card.Text>{video.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
