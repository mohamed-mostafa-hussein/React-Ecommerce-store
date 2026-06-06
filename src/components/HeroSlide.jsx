// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import hero1 from "../img/banner_Hero1.jpg"
import hero2 from "../img/banner_Hero2.jpg"
import hero3 from "../img/banner_Hero3.jpg"
function HeroSlide() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                <Link to="/" className="btn btn-hero">
                  Shop Now
                </Link>
              </div>
              <img src={hero1} alt="Slider Hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                <Link to="/" className="btn btn-hero">
                  Shop Now
                </Link>
              </div>
              <img src={hero2} alt="Slider Hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                <Link to="/" className="btn btn-hero">
                  Shop Now
                </Link>
              </div>
              <img src={hero3} alt="Slider Hero 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlide;
