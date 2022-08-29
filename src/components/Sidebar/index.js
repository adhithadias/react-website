import './index.scss';
import Dp from '../../assets/images/dp.jpeg';
import DpName from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
  faGoogle,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className="logo" to="/">
        <img src={Dp} alt="display photo" />
        <img className="sub-logo" src={DpName} alt="Adhitha Dias" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

        <table>
          <tbody>
          <tr>
            <td>
              <a
                href="https://www.linkedin.com/in/adhitha-dias/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td>         
            <td>
              <a
                href="https://github.com/adhithadias"
                target="_blank"
                rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
            </td> 
            <td>
              <a
              href="https://www.youtube.com/channel/UCqYEsnbrVlsU20VukOwaXAw"
              rel="noreferrer"
              target="_blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td> 
            <td>
              <a
              href="https://mobile.twitter.com/adhithadias"
              rel="noreferrer"
              target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td> 
            <td>
              <a
              href="https://scholar.google.com/citations?user=lVXKCPcAAAAJ&hl=en"
              rel="noreferrer"
              target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td> 
            <td>
              <a
              href="https://www.facebook.com/profile.php?id=100009582348344"
              rel="noreferrer"
              target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td> 
            <td>
              <a
              href="https://www.instagram.com/adhitha_dias/"
              rel="noreferrer"
              target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </td> 
          
          </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Sidebar;