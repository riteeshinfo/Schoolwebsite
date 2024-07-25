import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Faculty = () => {
  const facultyProfiles = [
    { name: 'John Doe', title: 'Principal', qualification: 'M.Ed', experience: '20 years of experience in educational administration' },
    { name: 'Jane Smith', title: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years of teaching experience' },
    { name: 'Emily Johnson', title: 'English Teacher', qualification: 'M.A. in English', experience: '10 years of teaching experience' },
    { name: 'Michael Brown', title: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years of teaching experience' },
    { name: 'Sophia Davis', title: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years of teaching experience' },
    { name: 'David Wilson', title: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years of teaching experience' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Faculty</h2>
      <Row>
        {facultyProfiles.map((profile, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{profile.title}</Card.Subtitle>
                <Card.Text>
                  <strong>Qualification:</strong> {profile.qualification} <br />
                  <strong>Experience:</strong> {profile.experience}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Faculty;
