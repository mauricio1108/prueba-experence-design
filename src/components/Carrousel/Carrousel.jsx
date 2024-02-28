import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img1 from "../../assets/Img/Slide-carrousel1-1.png";
import img2 from "../../assets/Img/Slide-carrousel1-2.png";
import img3 from "../../assets/Img/Slide-carrousel1-3.png";

const images = [img1, img2, img3];

const Carrousel = () => {
  return (
    <div className='prueba'>
    <Swiper

      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img className="img-carr" src={img} width="100%"  alt={img} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Carrousel;