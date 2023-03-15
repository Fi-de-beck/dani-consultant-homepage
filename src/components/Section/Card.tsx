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
      content:
        "Para quem busca a peça perfeita que fará a diferença no seu guarda-roupa e aprender na prática a comprar de maneira mais assertiva. Quando compramos a peça correta, além de enriquecermos nosso armário, também economizamos.",
    },
    {
      image: srcAssets.concat("/color (142 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (69 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (230 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (88 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (231 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (129 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (141 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (171 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (82 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
    },
    {
      image: srcAssets.concat("/color (95 de 241).jpg"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus ratione quaerat dolorum, ad accusamus error cumque deleniti sed voluptatibus vel. Cumque laudantium pariatur quaerat! Veritatis corrupti esse itaque repellendus.",
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
            "--swiper-pagination-color": "#bbe366",
            "--swiper-navigation-color": "#bbe366",
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
        navigation={size.width < 1024 ? false : true}
        pagination={size.width < 1024 ? true : false}
      >
        {imgArray.map((item, index) => (
          <SwiperSlide style={{ width: "100%", height: "100%" }} key={index} className="group">
              <div className="opacity-0 absolute w-full h-full bg-gray-800/50 md:group-hover:opacity-100 flex items-center justify-center rounded-xl z-50 transition-all duration-500 backdrop-blur-sm">
                <button className="px-7 py-4 m-auto border-2 border-yellowgreendark text-yellowgreendark bg-transparent font-semibold text-xl rounded-xl hover:text-gray-800 hover:bg-yellowgreendark transition-all duration-300">
                  Saiba mais
                </button>
              </div>
            <div
              className="relative overflow-hidden md:rounded-xl"
            >
              <div className="md:group-hover:opacity-0 transition-all duration-500 absolute flex flex-col align-middle bg-gray-100/80 md:h-48 h-64 bottom-0 md:rounded-b-xl w-full z-50 p-3">
                <h2 className="p-0 text-purple-600 font-bold">Texto</h2>
                <blockquote>
                  <p className="md:text-sm text-base font-light line-clamp-6">
                    {item?.content}
                  </p>
                </blockquote>
              <button className="md:hidden w-32 h-10 m-auto border-2 border-purple-600 text-purple-600 bg-transparent font-semibold rounded-xl">
                  Saiba mais
                </button>
              </div>
              <img
                src={item?.image}
                alt="img"
                className="w-full h-full md:rounded-xl relative -z-20 scale-125 -translate-y-11 align-bottom"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card;
