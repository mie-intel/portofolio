"use client";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Website = () => {
  let webList = ["https://beanmaster.vercel.app/", "https://nescougm.id/"];
  return (
    <section className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 flex flex-col justify-between items-center aspect-[938/505] w-[93.8%] bg-back">
        <div className="aspect-[938/50] mt-[3%] text-[3.4vw] text-fgcolor font-bold flex justify-center items-center text-center w-full">
          <div>Website yang pernah kubuat</div>
        </div>
        <div className="aspect-[938/410] w-full flex justify-center items-start">
          <Swiper
            className="relative flex aspect-[1550/720] w-[75%] justify-center rounded-[2%/4%]"
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 4000, // Set the autoplay delay in milliseconds (e.g., 5000 for 5 seconds)
              disableOnInteraction: false, // Allow continuing autoplay after user interactions
              pauseOnMouseEnter: true,
            }}
            observer={true}
            observeParents={true}
            freeMode={true}
            grabCursor={true}
            noSwipingClass={false}
            pagination={{
              clickable: true,
            }}
          >
            <div className="relative flex aspect-[1280/720] w-[82.5%] rounded-[2%/4%]">
              {webList.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="relative flex flex-row aspect-[1280/720] w-full justify-center items-center rounded-[2%/4%]"
                  >
                    {/* <div className="absolute top-0 bottom-0 my-auto left-[2%] aspect-[1/1] w-[7%] bg-[green]"></div> */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto flex aspect-[1280/720] w-[80%] rounded-[2%/4%]">
                      <iframe
                        src={item}
                        fill
                        className="flex-1 m-0 p-0 rounded-[2%/4%]"
                      ></iframe>
                    </div>
                    {/* <div className="absolute top-0 bottom-0 my-auto right-[2%] aspect-[1/1] w-[7%] bg-[blue]"></div> */}
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Website;
