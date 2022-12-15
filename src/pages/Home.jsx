import CustomNav from '../components/CustomNav';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Experience from '../components/ExperienceSection';

import '../scss/custom.scss';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.jpg';

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
              <h1 className="text-custom-blue">Caitlin Fabian</h1>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <img
              style={{
                marginTop: '300px',
                marginBottom: '200px',
                marginRight: '100px',
              }}
              src={profile}
              alt="Caitlin"
              className="w-50 rounded-circle shadow-lg"
            />
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
      </Container>
    </>
  );
}
export default Home;
