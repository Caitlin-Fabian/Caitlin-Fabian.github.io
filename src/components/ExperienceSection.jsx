import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import '../scss/experience.scss';

function Experience() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <h1 className="title-experience ">Experiences</h1>
      </div>
      <div className="bg-custom-teal w-75 mx-auto rounded shadow-lg">
        <Container className="mt-5 w-100 p-4 text-light">
          <Row>
            <Col>
              <h4 style={{ textAlign: 'left' }}>
                Web Developer <br />
                <span style={{ fontSize: '1rem' }}>
                  UCF-Center for Distributed Learning
                  <br />
                  Aug 2022 - Present
                </span>
              </h4>
            </Col>
            <Col xs={7}>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  As a part-time web developer, I learn to make accessible
                  content.
                </li>
                <li>
                  Create and update online courses that comply with section 508
                  and HTMl5 standard
                </li>
                <li>
                  Develop web-applications to increase productivity and improve
                  UX
                </li>
                <ul>
                  <li>
                    Skills: HTML, CSS , Bootstrap, Python, Django, React, Vue
                  </li>
                </ul>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start">
              <h4 style={{ textAlign: 'left' }}>
                Consultant Agent
                <br />
                <span style={{ fontSize: '1rem' }}>
                  Best Buy- Geek Squad <br /> Jan 2022 - July 2022
                </span>
              </h4>
            </Col>
            <Col
              xs={7}
              className="d-flex justify-content-start"
            >
              <ul style={{ textAlign: 'left' }}>
                <li>
                  Performed diagnostics on electronics, aiding with clients'
                  electronic issues, and developing technical skills. Certified
                  in Apple and Samsung diagnostics.
                </li>
                <li>
                  Culled technology knowledge to perform IT troubleshooting,
                  restoration and maintenance services to maintain
                  organizational performance levels. Resolved computer and
                  system networking problems to maintain user productivity.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Experience;
