import React from 'react'
import './about.css'
import ME from '../../assets/Personal.jpg'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_gap" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
        
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

            <p>
              I am a highly skilled backend developer with 5+ years of experience in designing, developing, and deploying web application programs that expedite the efficiency and effectiveness of organizational success. I have a solid understanding of the Node.js ecosystem, and I am well-versed in using various libraries and framework. My expertise includes developing RESTful APIs, building scalable web applications both front-end and back-end components, integrating third-party services, and deploying applications to production.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About