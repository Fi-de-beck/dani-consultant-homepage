import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../custom hooks/useWindowSize";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
function Card() {
  const size = useWindowSize();
  const randomKey = Math.random();
  const srcAssets = "src/assets/images-carroussel";
  const imgArray = [
    srcAssets.concat("/color (60 de 241).jpg"),
    srcAssets.concat("/color (142 de 241).jpg"),
    srcAssets.concat("/color (69 de 241).jpg"),
    srcAssets.concat("/color (230 de 241).jpg"),
    srcAssets.concat("/color (88 de 241).jpg"),
    srcAssets.concat("/color (231 de 241).jpg"),
    srcAssets.concat("/color (129 de 241).jpg"),
    srcAssets.concat("/color (141 de 241).jpg"),
    srcAssets.concat("/color (171 de 241).jpg"),
    srcAssets.concat("/color (82 de 241).jpg"),
    srcAssets.concat("/color (95 de 241).jpg"),
    ,
  ];
  return (
    <div className={`max-w-7xl m-auto flex flex-wrap justify-center h-72`}>
      <Swiper
        modules={[Navigation, Pagination]}
        className="lg:pb-0 pb-10 lg:px-12 py-14"
        spaceBetween={50}
        style={
          {
            '--swiper-pagination-color': '#bbe366',
            '--swiper-navigation-color': '#bbe366',
          } as React.CSSProperties
        }
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        height={1000}
        navigation={size.width<1024 ?false:true}
        pagination={size.width<1024 ?true:false}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide style={{ width: "100%", height: "100%"}} key={index}>
            <img src={img} alt="img" className="w-full h-full md:rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card;
