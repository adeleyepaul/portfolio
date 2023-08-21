import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/adeleye-paul-023206123/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/adeleyepaul" target="_blank"><FaGithub/></a>
        {/* <a href="http://dribbble.com" target="_blank"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials