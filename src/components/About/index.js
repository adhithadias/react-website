import { useEffect, useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCode, faComputer, faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <br /><br />
          <p>
            I am a graduate student at Purdue ECE, working 
            with <a 
              style={{color: 'gray'}} href="https://engineering.purdue.edu/~milind/"
              target="_blank"
              rel="noreferrer">Prof. Milind Kulkarni</a>. 
            I am broadly interested in systems, 
            compilers and high performance computing. 
            My current research focuses on optimized code generation 
            for sparse tensor algebraic operations.
          </p>
          <p align="LEFT">
            I received my honours degree of Bachelor of Science in 
            Electronics and Telecommunication Engineering from University 
            of Moratuwa, Sri Lanka where I completed my thesis on Deep 
            Learning through Augmented Reality Based User Interaction 
            for Collaborative Automation under the advisement  
            of <a 
              style={{color: 'gray'}} href="https://ranga.staff.uom.lk/"
              target="_blank"
              rel="noreferrer">Dr. Ranga Rodrigo</a>.
          </p>
          <p> 
            During my undergrad, I did an internship at LiveLabs Urban Lifestyle 
            Innovation Platform, School of Information Systems, 
            Singapore Management University under the advisement  
            of <a 
              style={{color: 'gray'}} href="https://scholar.google.com/citations?user=GR9VzaMAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer">Prof. Jie Xiong</a>  
            and <a 
              style={{color: 'gray'}} href="https://scholar.google.com/citations?user=qhKU0oMAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer">Prof. Youngki Lee</a> on Human Computer 
            Interaction and wifi based indoor localization using 
            direction of arrival estimation techniques.
          </p>
          <p>
            Upon graduation, before starting my graduate studies, 
            I worked as a Software Engineer at Sysco LABS, Sri Lanka 
            where we developed and maintained applications for 
            Sysco Corporation, USA.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faComputer} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCode} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
