import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import '../scss/experience.scss';

function Experience() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <h1 className="title-experience ">Experiences</h1>
      </div>
      <div className="bg-custom-teal">
        <Container className="mt-5 w-75">
          <Row>
            <Col>
              <p className="text-left">
                Web Developer
                <div>
                  UCF-Center for Distributed Learning
                  <br />
                  Aug 2022 - Present
                </div>
              </p>
            </Col>
            <Col
              xs={7}
              className="d-flex justify-content-start"
            >
              <ul class="job-body">
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
              <p>
                Consultant Agent
                <div>
                  Best Buy- Geek Squad <br /> Jan 2022 - July 2022
                </div>
              </p>
            </Col>
            <Col
              xs={7}
              className="d-flex justify-content-start"
            >
              <ul class="job-body">
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
