import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can design high standard mobile flash screens using figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can design exquisite mobile screens</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can design high standard web pages</p>
            </li>
           
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can build top notch websites using Laravel</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can build top notch websites using Django and Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can build top notch websites using React, Node JS and Next JS</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud computing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud Computing</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services