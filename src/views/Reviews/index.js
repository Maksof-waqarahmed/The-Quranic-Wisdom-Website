import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './index.css';

import star_img from '../../Assesst/5 start.png'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Reviews() {
  return (
    <section className = 'reviews_section' >
        <h1 className='reviews_text'>Reviews</h1>
        <h1 className='main_heading_reviews'>Why Choose US?</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor: '#F68C09'}}>
            <div>
                <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"Enrolling my child in The Quranic Wisdom Institute for Hifz and Juz Amma memorization was the best decision I made for his Quran education. The teachers are highly qualified and dedicated, ensuring meticulous attention to both Hifz and Juz Amma recitation."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#2DB6FA'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>""The Quranic Wisdom Institute provides a nurturing environment for learning the Quran. My daughter has not only excelled in Hifz but also enjoys the Quranic stories sessions, which have deepened her understanding of Islamic teachings."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#08DA4E'}} >
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"I highly recommend The Quranic Wisdom Institute for its engaging Quranic stories, making learning enjoyable and meaningful. An excellent choice for comprehensive Quran education."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img}/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#E9222C'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"As a parent, I am impressed by the professionalism and commitment of the staff at The Quranic Wisdom Institute. They go above and beyond to ensure each student receives personalized attention and achieves excellence in Quranic studies."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#B50EDF'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"Choosing The Quranic Wisdom Institute for my son's Quran education was a wise choice. Not only has he memorized several Surahs through Hifz, but he also eagerly participates in the Quranic stories sessions, which have enriched his understanding of Islam."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#F51F9C'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"The Quranic Wisdom Institute offers an exceptional Hifz Quran program. With expert instructors and personalized support, they ensure each student achieves excellence in Quran memorization. Highly recommended for quality Hifz education."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img}/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#198754'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"I am grateful to The Quranic Wisdom Institute for nurturing my children's love for the Quran through Nazra classes. The interactive sessions have made their learning journey enjoyable and spiritually enriching, deepening their connection with the Holy Book."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#F68C09'}}>
        <h1 className='reviews_heading'>Reviews</h1>
                <p className='reviews_para'>"Enrolling in The Quranic Wisdom Institute has transformed my family. Their comprehensive Quran program and nurturing environment have not only enhanced my children's Quranic knowledge but also their character."</p>
                <p className='parents'>~Parents</p>
                <img className='slider_img' src={star_img} />
        </SwiperSlide>
       
      </Swiper>
    </section>
  );
}
