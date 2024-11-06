import './FooterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faHouse} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const FooterPage = () => {
  return (
    <>
      <footer className="footer-container">
        <section className="social-icons">
          <a href="https://github.com/mariano1997AR" target='_blank'><FontAwesomeIcon className='icon-page' icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/mariano-martinotti-53962b156/"><FontAwesomeIcon className='icon-page'  icon={faLinkedin} /></a>
          <a href="mailto:mariano.andres1024@gmail.com"><FontAwesomeIcon className='icon-page'  icon={faEnvelope} /></a>
          <Link to="/"><FontAwesomeIcon className='icon-page' icon={faHouse} /></Link>

        </section>
        <section className="footer-nav">
          <ul>
            <li><a href="https://gmsoluciones.com.ar/views/politica.php">Politica</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="https://gmsoluciones.com.ar//views/normas.php">Normas IRAM</a></li>
          </ul>
        </section>
        <section className="footer-bottom">
          <p><span className="designer">ApoloIxcode</span> Copyright &copy;2024;</p>
        </section>
      </footer>
    </>
  )
}


