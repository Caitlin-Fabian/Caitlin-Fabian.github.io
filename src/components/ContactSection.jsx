import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import { IconContext } from 'react-icons';
import '../scss/custom.scss';

function ContactSection() {
  return (
    <IconContext.Provider value={{ size: '6rem', className: 'm-3' }}>
      <div
        style={{ marginTop: '125px' }}
        className="d-flex justify-content-center align-content-center flex-column"
      >
        <h1 className="contact-title">Let's Keep In Touch</h1>
        <div>
          <a href="https://www.instagram.com/caitlin.fab/">
            <AiIcons.AiFillInstagram
              className="changeColor"
              onMouseOver={({ target }) => (target.style.color = '#55828B')}
              onMouseOut={({ target }) => (target.style.color = '#3B6064')}
            />
          </a>
          <a href="https://github.com/Caitlin-Fabian">
            <AiIcons.AiFillGithub
              className="changeColor"
              onMouseOver={({ target }) => (target.style.color = '#55828B')}
              onMouseOut={({ target }) => (target.style.color = '#3B6064')}
            />
          </a>
          <a href="https://www.linkedin.com/in/caitlin-fabian">
            <BsIcons.BsLinkedin
              className="changeColor"
              onMouseOver={({ target }) => (target.style.color = '#55828B')}
              onMouseOut={({ target }) => (target.style.color = '#3B6064')}
            />
          </a>

          <a href="mailto:caitlinfstar@gmail.com">
            <MdIcons.MdEmail
              className="changeColor"
              onMouseOver={({ target }) => (target.style.color = '#55828B')}
              onMouseOut={({ target }) => (target.style.color = '#3B6064')}
            />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default ContactSection;
