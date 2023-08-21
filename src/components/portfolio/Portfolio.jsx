import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/code2.png'
import IMG2 from '../../assets/LoanWise.png'
import IMG3 from '../../assets/2d.png'
import IMG4 from '../../assets/hrm1.png'
import IMG5 from '../../assets/git.png'
import IMG6 from '../../assets/patrick.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'React Application',
    github: 'https://github.com/adeleyepaul',
    demo: '#'
  },
  {
    id:2,
    image: IMG2,
    title: 'LoanWise Application',
    github: 'https://github.com/adeleyepaul/loanwise.git',
    demo: '#'
  },
  {
    id:3,
    image: IMG3,
    title: 'Whiteboard Amination',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id:4,
    image: IMG4,
    title: 'HRMS Application',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id:5,
    image: IMG5,
    title: 'GitHub Repo',
    github: 'github.com/adeleyepaul',
    demo: '#'
  },
  {
    id:6,
    image: IMG6,
    title: "Patrick Art's Website",
    github: 'https://github.com/adeleyepaul/patrickart.git',
    demo: 'rubumnl.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href="{github/adeleyepaul}" className='btn'>GitHub</a>
                <a href="{demo}" className='btn btn-primary'>Live</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio