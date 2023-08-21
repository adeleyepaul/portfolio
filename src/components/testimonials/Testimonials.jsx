import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    image: AVTR,
    name: 'Tina Show',
    review: 'I am really impressed by the quality of services I received. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products.'
  },
  {
    image: AVTR,
    name: 'Olu James',
    review: 'We would like to express our satisfaction on the cooperation regarding the development of our web application. We are satisfied with the solution given to us and with the communication flow through the project.'
  },
  {
    image: AVTR,
    name: 'Orion Concept',
    review: "We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired you and you've worked closely with us throughout the process, staying on task, on target, and on budget."
  },
  {
    image: AVTR,
    name: 'John Chukwu',
    review: "I just checked the app. WELL DONE - you made my day!!! Looks really good. Professional, conscientious and thoroughly competent - I am looking forward to develop my next project with the wonderful team. Anyone seeking a reference can call me anytime. "
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          data.map(({image, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt="testimonial_gap"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials