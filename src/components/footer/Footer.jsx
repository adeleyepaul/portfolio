import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>ENVELOPE</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/adeleyepaul"><FiFacebook/></a>
        <a href="https://instagram.com/nobulplus"><BsInstagram/></a>
        <a href="https://twitter.com/nobulplus"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ENVELOPE. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer