import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import feedbacks from "./feedbacksData";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Feedbacks() {
  return (
    <section className="flex justify-center max-w-7xl m-auto">
      <Swiper 
        style={{
          "--swiper-navigation-color": "#cef972",
        } as React.CSSProperties}
        navigation={true} 
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 0 },
          1280: { slidesPerView: 3, spaceBetween: 0 },
        }}
        >
        { feedbacks &&
          feedbacks.map((depo) => (          
          <SwiperSlide key={ depo.id } className="flex items-center py-2">
          <figure className="flex flex-col justify-center h-80 gap-3 bg-gray-50 rounded-xl p-8 mx-12 shadow-md md:w-fit">
            <img className="h-24 w-24 rounded-full mx-auto cover" src={ depo.img } alt={ depo.name } />
            <div className="text-center md:text-left space-y-4">
              <blockquote>
              <p className="text-sm font-light line-clamp-6">
                { `"${depo.quote}"`}
              </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-magenta">
                  { depo.name }
                </div>
                <div className="text-slate-700 font-light">
                  { depo.occupation }
                </div>
              </figcaption>
            </div>
          </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
