import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { Link, } from 'react-router-dom';
import Loader from 'react-loaders';
import Cv from '../../assets/docs/cv.pdf';
import Sop from '../../assets/docs/SOP_Purdue.pdf';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'A', 'd', 'h', 'i', 't', 'h', 'a', ' ', 'D', 'i', 'a', 's'];
  const jobArray = ['A',
    ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e', 'r',
    ' ', 'E', 'n', 'g', 'n', 'e', 'e', 'r', 'i', 'n', 'g',
    ' ', 'P', 'h', 'D',
    ' ', 'S', 't', 'd', 'e', 'n', 't'
  ];
  const interestArray = ['Compilers', ' | ', 'Programming Languages', ' | ', 'High-Performance Computing'];


  // useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, []);

  return (
    <>
    <div className='container' style={{ overflow: 'auto' }}>
      <div className='home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h2>
          <h4>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={30}
            />
          </h4>
          <h3>
            <Link to="/about" style={{ color: '#8d8d8d' }}>
              MORE ABOUT MYSELF!
            </Link>
            &nbsp;&nbsp;&nbsp;
            <a href={Cv} target='_blank' 
              rel='noopener noreferrer' 
              style={{ color: '#8d8d8d' }}>
              CV
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href={Sop} target='_blank' 
              rel='noopener noreferrer' 
              style={{ color: '#8d8d8d' }}>
              SOP(Outdated)
            </a>
          </h3>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className='news-page' style={{ overflow: 'auto' }}>
        <div className='text-zone'>
          <h2 style={{"fontSize" : "28px"}}>News!</h2>
          <ul>
            <li>June 2022: Our paper, my first paper as a grad student, 
              won the best paper award at the International Conference 
              on Supercomputing (ICS) '22
            </li>
            <li>
              June 2022: Received a travel grant to attend PLDI '22
            </li>
            <li>
              May 2022: Our paper titled, SparseLNR: Accelerating 
              Sparse Tensor Computations Using Loop Nest Restructuring, 
              was accepted at the International Conference on Supercomputing '22
            </li>
            <li>
              Octobar 2021: Attended Programming Language Mentoring 
              Workshop (PLMW) at SPLASH '21 (ACM SIGPLAN conference on 
              Systems, Programming Languages, and Applications: Software for Humanity)
            </li>
            <li>
              June 2021: Attended Programming Language Mantoring Workshop 
              (PLMW) at PLDI '21 (ACM SIGPLAN conference on Programming 
              Language Design and Implementation)
            </li>
            <li>
              January 2021: Started my PhD in Electrical and Computer 
              Engineering at Purdue University.
            </li>
            <li>
              December 2020: Left my first job at Sysco LABS, 
              Sri Lanka (Sysco LABS supports Sysco’s digital 
              transformation with engineering teams in Colombo, 
              Sri Lanka, and Austin and Houston, Texas, in the USA)
            </li>
            <li>
              June 2020: Our paper Deep Learning of Augmented 
              Reality Based Human Interactions for Automating 
              a Robot Team got accepted to ICCAR 2020 (International 
              Conference on Control, Automation and Robotics)
            </li>
            <li>
              December 2018: Graduated from the Faculty of Engineering, 
              University of Moratuwa, Sri Lanka with a first class 
              in BSc.(Hons.) in Electronics and Telecommunication Engineering.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Home;