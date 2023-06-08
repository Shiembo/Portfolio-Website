import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Recent Graduate</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ UK</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          Highly skilled and motivated software developer with 
          experience in Python, React, Node JS, JavaScript, 
          Next JS, Linux, PHP, C, and Oracle/SQL databases and 
          Flutter. I am seeking a software development role where 
          I can apply my technical skills to contribute to 
          meaningful software development projects. I am committed to delivering results and have a proven track record of successfully completing challenging projects. Well-organized and able to manage multiple deadlines, with strong analytical, problem-solving, and process skills. 
          A team player with a solution-focused attitude, 
          committed to delivering results and have a valid 
          UK drivers’ licence.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About