import { useEffect, useRef, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faLinux,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import address from '../../assets/images/yeager_road.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import './index.scss';
import { faArrowLeftRotate, faCode, faComputer, faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();
  const position = [40.4546725,-86.9234165];

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sending email message!");
    console.log(form.current);
    console.log("form printed!");

    emailjs.sendForm('service_0pm9q2h', 'template_t27kchc', form.current, 'w4hyjVGMzoMLEnp4y')
    .then(
      (response) => {
        alert('Message successfully sent!');
        console.log('SUCCESS!', response.status, response.text);
        window.location.reload(false);
      },
      (error) => {
        alert('Failed to send the message, please try again!');
        console.log('FAILED...', error);
      }
    )
  }

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <br /><br />
          <p>
            I am interested in internship opportunities in compiler, 
            programming languages and high performance computing 
            - especially research related. However, if you have any 
            other requests or questions, don't hesitate to contact me using 
            the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" 
                    name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email" type="email" 
                    name="email" required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Subject" type="text" 
                    name="subject" required
                  />
                </li>
                <li>
                  <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                </li>
                <li>
                  <input
                    type="submit" className="flat-button"
                    value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Adhitha Dias, <br />
          2550 Yeager Road, Apt 20-12, <br />
          West Lafayette, IN 47906, <br />
          <span>kadhitha@purdue.edu</span>
        </div>
        <div className='map-wrap' style={{ overflow: 'auto' }}>
          <img src={address} alt="display photo" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
