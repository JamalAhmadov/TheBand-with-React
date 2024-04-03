import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/image3.jpg";

const Slider = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        className="mySwiper h-screen"
        autoplay={{
          delay: 5000,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={Image1} alt="" />
            <div className="absolute bottom-0 w-full h-1/4 text-white text-center flex flex-col gap-3">
              <h2 className="text-2xl">Los Angeles</h2>
              <p className="font-semibold text-md">
                We had the best time playing at Venice Beach!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={Image2} alt="" />
            <div className="absolute bottom-0 w-full h-1/4 text-white text-center flex flex-col gap-3">
              <h2 className="text-2xl">Los Angeles</h2>
              <p className="font-semibold text-md">
                We had the best time playing at Venice Beach!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={Image3} alt="" />
            <div className="absolute bottom-0 w-full h-1/4 text-white text-center flex flex-col gap-3">
              <h2 className="text-2xl">New York</h2>
              <p className="font-semibold text-md">
                We had the best time playing at Venice Beach!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
