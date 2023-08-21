import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {MdLibraryBooks} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUsers/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLibraryBooks/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone/></a>
    </nav>
  )
}

export default Nav