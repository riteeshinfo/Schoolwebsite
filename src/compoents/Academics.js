import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Academics = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Academics</h2>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Curriculum</Card.Title>
              <Card.Text>
                <strong>Primary (Grades 1-5):</strong> English, Mathematics, Science, Social Studies, Art, Physical Education <br />
                <strong>Secondary (Grades 6-10):</strong> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art <br />
                <strong>Senior Secondary (Grades 11-12):</strong>
                <ul>
                  <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                  <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Teaching Methodologies</Card.Title>
              <Card.Text>
                We use a blend of traditional and modern teaching techniques to cater to different learning styles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Educational Resources</Card.Title>
              <Card.Text>
                Digital classrooms, interactive learning modules, and access to online educational platforms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Academics;
