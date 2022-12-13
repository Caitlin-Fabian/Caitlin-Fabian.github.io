import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

import '../scss/custom.scss';

function ProjectsSection() {
  return (
    <div>
      <h1 className="d-flex align-content-start title mb-5">Projects</h1>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <FaIcons.FaDumbbell
                className="w-100"
                size="30%"
                style={{ padding: '20px' }}
              />
              <Card.Body>
                <Card.Title>My Fitness Friend</Card.Title>
                <Card.Text>
                  Mobile App written in React Native. Worked in a team of 3
                  members over the span of 2 months. Featured weight tracking
                  with a graph, capabilities to store workouts, and ability to
                  edit a user profile and store said data. Included firebase as
                  a database.
                </Card.Text>
                <a
                  href="https://github.com/Caitlin-Fabian/MyFitnessFriend"
                  className="button"
                >
                  Github
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <GiIcons.GiPassport
                className="w-100"
                style={{ padding: '20px' }}
                size="40%"
              />
              <Card.Body>
                <Card.Title>Seeking Citizenship</Card.Title>
                <Card.Text>
                  Web application simplifying the naturalization process to the
                  U.S. for inquiring immigrants. Using HTML, CSS, and Bootstrap.
                  I worked in a team of 4 over the span of 48 hours to create
                  this website.
                </Card.Text>
                <a href="https://github.com/Caitlin-Fabian/immigration-app">
                  Github
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <RiIcons.RiSurveyLine
                className="w-100"
                size="30%"
                style={{ padding: '20px' }}
              />
              <Card.Body>
                <Card.Title>Survey Studies</Card.Title>
                <Card.Text>
                  Web application that allows individuals to create,
                  participate, and track their surveys. Worked in a team of 4
                  members over the span of 2 weeks. Used ReactJS and Bootstrap
                  for front end, ExpressJs for backend , and Digital Ocean for
                  database.
                </Card.Text>
                <a
                  href="https://github.com/Caitlin-Fabian/MyFitnessFriend"
                  className="button"
                >
                  Github
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsSection;
