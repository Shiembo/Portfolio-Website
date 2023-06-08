import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Green Stones',
    review: ' I had the pleasure of experiencing the Flutter Treasure Hunt app developed by Carlton, and it was an absolute delight. The app\'s sleek design and intuitive interface made it easy to jump into the treasure hunt right away. The locations were beautifully rendered, and the challenges were cleverly designed, keeping me engaged and intrigued throughout. The app\'s flawless performance and seamless social media integration allowed me to share my progress with friends, adding an element of friendly competition. Carlton showcased their expertise and professionalism, delivering a top-notch treasure hunt experience. I highly recommend this app to anyone seeking an interactive and thrilling adventure'
  },
  {
    avatar: AVTR2,
    name: 'Nde Bryan',
    review: 'The Laravel job website-built Carlton exceeded my expectations. It streamlined my job search with its user-friendly interface and robust features. Finding employment opportunities has never been easier. Highly recommended for job seekers!'
  },
  {
    avatar: AVTR3,
    name: 'Carl Banks',
    review: 'The Laravel job website developed by Carlton has transformed my job search. Its intuitive design and powerful features made it effortless to browse and apply for jobs. The platform\'s efficiency and user-friendly interface have saved me valuable time and connected me with great opportunities. Thank you for creating such a fantastic job website!'
  },
  {
    avatar: AVTR4,
    name: 'Blanche Mimba',
    review: ' The Flutter Treasure Hunt app created by Carlton is  an exhilarating and immersive experience. Its seamless integration of augmented reality brought the treasure hunt to life, while the cleverly designed challenges kept me engaged and excited throughout. The app\'s flawless performance and captivating visuals made it a truly unforgettable adventure. Thank you for crafting such an amazing treasure hunt app!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
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