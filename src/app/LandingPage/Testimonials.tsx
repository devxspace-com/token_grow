/** @format */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


export default function Testimonials() {
  return (
    <main>
      <section className="mt-[28px]">
        <h5 className="font-bold text-[24px] leading-8 tracking-[0.03em] text-white ml-[70px] mobile:w-[90%] mobile:mx-auto">
          Testimonials
        </h5>

        <div className="text-white w-[80%] mx-auto smDesktop:w-[90%] smDesk:w-[80%] mobile:w-[90%]">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }
        }
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <span className="font-bold text-[30px]"> “</span>
              <p className="font-[500] text-[16px] leading-[21px] tracking-[0.03em] w-[421px] smDesk:w-[300px] mobile:w-[100%]">
               Lorem ipsum dolor sit amet consectetur. Nisl tincidunt nisi
                morbi amet mus platea sit. Fermentum ornare ut turpis lacinia.
                Id lectus potenti phasellus risus adipiscing orci sed. Enim
                lobortis dui quam egestas eu tellus amet.
              </p>
              <div className="mt-5 flex gap-2 items-center">
                <img src="./Frame 42.png" alt="" className="w-20 h-20 rounded-full mobile:w-10 mobile:h-10"/>
                <div className="">
                    <h6 className="text-[16px] font-normal leading-5 tracking-[0.03em] ">Jean Disney</h6>
                    <p className="text-[12px] font-normal leading-5 tracking-[0.03em]">CEO Signor</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
                <span className="font-bold text-[30px]"> “</span>
              <p className="font-[500] text-[16px] leading-[21px] tracking-[0.03em] w-[421px] smDesk:w-[300px] mobile:w-[100%]">
               Lorem ipsum dolor sit amet consectetur. Nisl tincidunt nisi
                morbi amet mus platea sit. Fermentum ornare ut turpis lacinia.
                Id lectus potenti phasellus risus adipiscing orci sed. Enim
                lobortis dui quam egestas eu tellus amet.
              </p>
              <div className="mt-5 flex gap-2 items-center">
                <img src="./Frame 42.png" alt="" className="w-20 h-20 rounded-full mobile:w-10 mobile:h-10"/>
                <div className="">
                    <h6 className="text-[16px] font-normal leading-5 tracking-[0.03em] ">Jean Disney</h6>
                    <p className="text-[12px] font-normal leading-5 tracking-[0.03em]">CEO Signor</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
