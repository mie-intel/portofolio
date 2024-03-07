"use client";

import Image from "next/image";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Skill1 = () => {
  return (
    <section className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 aspect-[938/505] w-[93.8%] bg-back">
        <div className="w-full h-full flex flex-row justify-between">
          <div className="relative aspect-[448/505] w-[47.7%] flex flex-col pr-[4%] text-fgcolor justify-center items-end">
            <div className="aspect-[448/170] w-[80%] pr-[6%] text-left flex flex-col gap-[4%] text-[4.8vw] font-bold">
              <div className="aspect-[448/70] w-full flex flex-row">
                {" "}
                <div className="aspect-[150/70] w-[30%]">Aku</div>
                <div className="aspect-[200/70] w-[60%]">
                  {" "}
                  <i className="text-[#4cd84c]">
                    <u>
                      <Swiper
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={{
                          delay: 800, // Set the autoplay delay in milliseconds (e.g., 5000 for 5 seconds)
                          disableOnInteraction: false, // Allow continuing autoplay after user interactions
                          pauseOnMouseEnter: true,
                          // stopOnLastSlide: true,
                        }}
                      >
                        <SwiperSlide>suka</SwiperSlide>
                        <SwiperSlide>sering</SwiperSlide>
                        <SwiperSlide>cepat</SwiperSlide>
                      </Swiper>
                    </u>
                  </i>
                </div>
              </div>
              <div className="aspect-[150/30] w-[100%]">bikin website</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[459/506] w-[45.7%] z-20 right-[3.1%] bottom-[2.9%]">
        <Image src="Skill1.svg" alt="" fill />
      </div>
    </section>
  );
};

export default Skill1;
