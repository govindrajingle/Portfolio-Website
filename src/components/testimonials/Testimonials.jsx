import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

//SWIPE ANIMATIONS

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
          </div>
          <h5 className="client__name">Lara Croft</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            nobis, obcaecati debitis cupiditate vel eius minima, autem
            perspiciatis est sint in? Temporibus, impedit natus maiores dolores
            odit sed nisi consequatur?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar 1" />
          </div>
          <h5 className="client__name">John Cena</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            nobis, obcaecati debitis cupiditate vel eius minima, autem
            perspiciatis est sint in? Temporibus, impedit natus maiores dolores
            odit sed nisi consequatur?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar 1" />
          </div>
          <h5 className="client__name">Alex Paul</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            nobis, obcaecati debitis cupiditate vel eius minima, autem
            perspiciatis est sint in? Temporibus, impedit natus maiores dolores
            odit sed nisi consequatur?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
