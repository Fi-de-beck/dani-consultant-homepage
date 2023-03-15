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
    {
      image: srcAssets.concat("/color (60 de 241).jpg"),
      content: 'Para quem busca a peça perfeita que fará a diferença no seu guarda-roupa e aprender na prática a comprar de maneira mais assertiva. Quando compramos a peça correta, além de enriquecermos nosso armário, também economizamos.',
    },
    {
      image: srcAssets.concat("/color (142 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (69 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (230 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (88 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (231 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (129 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (141 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (171 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (82 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    {
      image: srcAssets.concat("/color (95 de 241).jpg"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.',
    },
    ,
  ];
  return (
    <div className={`max-w-7xl m-auto flex flex-wrap justify-center h-full`}>
      <h2>Pacotes</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        className="lg:pb-0 pb-10 lg:px-12"
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
        {imgArray.map((item, index) => (
          <SwiperSlide style={{ width: "100%", height: "100%"}} key={index}>
            <div className="relative">
            <div className="absolute flex flex-col align-middle bg-yellowgreen/80 h-40 bottom-0 md:rounded-b-xl w-full z-50 p-3">
              <blockquote>
              <p className="text-sm md:text-xs font-light line-clamp-5">
              {item?.content}
              </p>
              </blockquote>
              <button className="w-24 h-10 md:mt-3 mt-1 text-sm m-auto bg-purple-600 hover:bg-purple-500 text-white rounded-xl">Saiba mais</button>
              </div>
            <img src={item?.image} alt="img" className="w-full h-full md:rounded-xl relative -z-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card;
