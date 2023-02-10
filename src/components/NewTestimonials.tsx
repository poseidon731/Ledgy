import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import IconIBM from "../img/svg/icons/ibm.svg";
import IconMeredith from "../img/svg/icons/meredith.svg";
import IconBonobos from "../img/svg/icons/bonobos.svg";
import IconDigitalOcean from "../img/svg/icons/digitalOcean.svg";
import IconClearStore from "../img/svg/icons/clearScore.svg";

//Testimonials Placeholder
const demo_testimonials = [
  {
    icon: IconIBM,
    text: "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“",
    name: "Nic Sauriol",
    role: "Software Development Leader",
    score: "70",
    kicker:
      "Increase in revenue following a three-month customer messaging pilot program",
    color: "#193fc2",
  },
  {
    icon: IconMeredith,
    text: "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“",
    name: "Nic Sauriol",
    role: "Software Development Leader",
    score: "70",
    kicker:
      "Increase in revenue following a three-month customer messaging pilot program",
    color: "#bd133b",
  },
  {
    icon: IconBonobos,
    text: "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“",
    name: "Nic Sauriol",
    role: "Software Development Leader",
    score: "70",
    kicker:
      "Increase in revenue following a three-month customer messaging pilot program",
    color: "#151a2d",
  },
  {
    icon: IconDigitalOcean,
    text: "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“",
    name: "Nic Sauriol",
    role: "Software Development Leader",
    score: "70",
    kicker:
      "Increase in revenue following a three-month customer messaging pilot program",
    color: "#003acc",
  },
  {
    icon: IconClearStore,
    text: "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“",
    name: "Nic Sauriol",
    role: "Software Development Leader",
    score: "70",
    kicker:
      "Increase in revenue following a three-month customer messaging pilot program",
    color: "#434b54",
  },
];

export const NewTestimonials = () => {
  return (
    <section className="py-4 py-lg-8 ">
      <div className="container my-2 my-md-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect="fade"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
};
