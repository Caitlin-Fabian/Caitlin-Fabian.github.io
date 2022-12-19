import CustomNav from '../components/CustomNav';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Experience from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

import '../scss/custom.scss';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.jpg';
import Slide from 'react-reveal/Slide'; // Importing Zoom effect

function Home() {
  return (
    <>
      <CustomNav />
      <Container
        fluid
        style={{ height: '100vh' }}
        className="d-flex justify-content-between flex-column"
      >
        <Row
          fluid
          id="home"
          className="d-flex align-items-center"
        >
          <Col>
            <div
              style={{ marginTop: '300px', marginBottom: '200px' }}
              className="d-flex justify-content-center align-items-center"
            >
              <Slide left>
                <h1 className="text-custom-blue name">Caitlin Fabian</h1>
              </Slide>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <Slide right>
              <img
                style={{
                  marginTop: '300px',
                  marginBottom: '200px',
                  marginRight: '150px',
                  boxShadow: '0 0 20px #6E9F97',
                }}
                src={profile}
                alt="Caitlin"
                className="w-50 rounded-circle"
              />
            </Slide>
          </Col>
        </Row>
        <Row
          fluid
          id="about"
          className="d-flex align-items-start text-center flex-column"
        >
          <Col
            style={{ marginTop: '100px', marginBottom: '200px' }}
            className="p-0"
          >
            <AboutSection />
          </Col>
        </Row>
        <Row
          fluid
          id="projects"
          className="d-flex align-items-start text-center flex-column"
        >
          <Col
            style={{ marginTop: '100px', marginBottom: '200px' }}
            className="p-0"
          >
            <ProjectsSection />
          </Col>
        </Row>
        <Row
          fluid
          id="experience"
          className="d-flex align-items-start text-center flex-column"
        >
          <Col
            style={{ marginTop: '100px', marginBottom: '200px' }}
            className="p-0"
          >
            <Experience />
          </Col>
        </Row>
        <Row
          fluid
          id="contact"
          className="d-flex align-items-start text-center flex-column"
        >
          <Col
            style={{ marginTop: '100px', marginBottom: '200px' }}
            className="p-0"
          >
            <ContactSection />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
