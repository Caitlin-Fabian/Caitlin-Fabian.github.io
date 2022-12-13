import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import '../scss/custom.scss';

function AboutSection() {
  return (
    <Stack fluid>
      <div>
        <h1 className="mb-5 text-brown">About Me</h1>
      </div>
      <div>
        <Carousel
          className="mb-5"
          variant="dark"
        >
          <Carousel.Item>
            <img
              className="d-block rounded-circle"
              src={require('../assets/shellhacks-pic.jpg')}
              alt="shell hacks"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded-circle"
              src={require('../assets/profile.jpg')}
              alt="profile"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block rounded-circle"
              src={require('../assets/motorcycle.jpg')}
              alt="motorcycle"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled rounded about-section">
          <li>
            I am a Junior at Unversity of Centeral Florida. I am an aspiring
            Software Engineer and Web Developer.{' '}
          </li>
          <li>
            My hope in the future is to work with like minded people to create
            amazing and accessible projects. Currently I work as a Web
            Programmer for UCF in the Center for Distributed Learning
          </li>
          <li>
            My focus is web and mobile development. In my coursework I like to
            experience and gain knowledge from everything from AI to machine
            learning, while on projects I have mainly focused on front-end and
            back-end application design.
          </li>
          <li>
            Throughout college, I have learned to work well in teams and grow my
            communication skills.
            <li> Skills: Java, C, HTML, CSS, and React</li>
          </li>
        </ul>
      </div>
    </Stack>
  );
}

export default AboutSection;
