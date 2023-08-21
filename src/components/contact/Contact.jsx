import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9h7cnh', 'template_x4f0f0e', form.current, 'nJb5cZW-Jm_wTpEho')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail/>
            <h4>Email</h4>
            <h5>adeleyepaul2@gmail.com</h5>
            <a href="mailto:adeleyepaul2@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger/>
            <h4>Messenger</h4>
            <h5>Paul Adeleye</h5>
            <a href="https://m.me/adeleyepaul2" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill/>
            <h4>Whatsapp</h4>
            <h5>+2347030258008</h5>
            <a href="https://api.whatsapp.com/send?phone=2347030258008" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact