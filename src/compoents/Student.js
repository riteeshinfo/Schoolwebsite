import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Students = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Life at Springdale</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Extracurricular Activities</Card.Title>
              <Card.Text>
                Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Clubs and Societies</Card.Title>
              <Card.Text>
                Literary Society, Environmental Club, Astronomy Club, Coding Club
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Students;
