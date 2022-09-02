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
            <h3>Animation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating storyboards and presenting ideas and sketches to clients for review.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing and illustrating frames to simulate movement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Producing artwork for backgrounds and layering images against the backgrounds.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Presenting animations for review and editing animations based on feedback.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating visual and audio effects in post-production and preparing animations for delivery.</p>
            </li>
          </ul>
        </article>
        {/* END OF ANIMINATION */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating efficient algorithms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Producing clean, efficient code based on specifications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating third-party programs into systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing and improving existing applications'.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Efficient use of frameworks to build, deploy and manage applications'.</p>
            </li>
          </ul>
        </article>
        {/* END OF SOFTWARE DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Database Administration</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating and maintaining database standards and policies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing the database availability and performance, including incident and problem management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Defining and implementing event triggers that will alert on potential database performance or integrity issues.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identifying reporting, and managing database security issues, audit trails, and forensics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing database backup, archiving, and storage strategy.</p>
            </li>
          </ul>
        </article>
        {/* END OF DATABASE ADMINISTRATION */}

      </div>
    </section>
  )
}

export default Services