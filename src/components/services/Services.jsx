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
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating APIs that allow communication between different software components or services. This includes designing endpoints, specifying request and response formats, and implementing authentication and authorization mechanisms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manage server configurations, deployment, and scaling of applications to ensure they run efficiently and handle user traffic effectively. This involves using tools like Docker and Kubernetes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement user authentication, authorization, and encryption mechanisms to protect sensitive information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate third-party services and APIs to enhance application functionality, such as payment gateways, social media sharing, and data analytics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing functions or microservices that run in response to events without the need to manage servers, services like AWS Lambda and Azure.</p>
            </li>
          </ul>
        </article>
        {/* END OF ANIMINATION */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design, develop, and maintain APIs that allow seamless communication between various software components, enabling data exchange and interaction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Handle the logic that occurs on the server, including processing data, performing calculations, and executing business rules to ensure applications work as intended.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement user authentication and authorization systems to control access to specific parts of the application and safeguard sensitive information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement security measures like data encryption, input validation, and protection against common vulnerabilities such as SQL injection and cross-site scripting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify and address performance bottlenecks by optimizing code, database queries, and server configurations to enhance application speed and responsiveness.</p>
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
              <p>Choose appropriate data storage solutions, such as relational databases (e.g., MySQL, MongoDB, PostgreSQL) or NoSQL databases (e.g., MongoDB), based on the application's requirements.</p>
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
              <p>Design and manage databases, including creating schemas, optimizing queries, ensuring data integrity, and implementing data migration strategies.</p>
            </li>
          </ul>
        </article>
        {/* END OF DATABASE ADMINISTRATION */}

      </div>
    </section>
  )
}

export default Services