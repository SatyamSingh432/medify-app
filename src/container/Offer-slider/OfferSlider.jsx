import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from "../Img/slider-offer-img/Group 11.png";
import offer2 from "../Img/slider-offer-img/Group 12.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./OfferSlider.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function OfferSlider() {
  return (
    <div className="container-offer-slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=" offer-slider"
      >
        <SwiperSlide>
          <div className="mySwiper">
            <img src={offer2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper">
            <img src={offer1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper">
            <img src={offer2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper">
            <img src={offer1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mySwiper">
            <img src={offer2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
