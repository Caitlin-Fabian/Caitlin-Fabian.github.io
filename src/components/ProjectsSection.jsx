import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import { GiPassport } from 'react-icons/gi';

import '../scss/custom.scss';
import { projectData } from './projectData';

function ProjectsSection() {
  return (
    <div>
      <h1 className="d-flex align-content-start title mb-5">Projects</h1>

      <Container>
        <Row>
          {projectData.map((item) => {
            return (
              <>
                <Col
                  key={item.Title}
                  className="d-flex justify-content-center"
                >
                  <Card style={{ width: '18rem' }}>
                    <span
                      className="w-100"
                      style={{
                        padding: '20px',
                        width: '100px',
                        height: ' 200px',
                      }}
                    >
                      {item.icon}
                    </span>

                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <a
                        href={item.link}
                        className="button"
                      >
                        Github
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsSection;
