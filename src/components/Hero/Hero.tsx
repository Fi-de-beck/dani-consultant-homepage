import { GiPublicSpeaker, GiBeachBag, GiBedLamp } from "react-icons/gi";
import dani from "../../assets/dani2.png";
function Hero() {
  return (
    <div className="max-w-7xl image:w-11/12 justify-between px-5 m-auto flex relative bg-daniHero bg-cover bg-no-repeat bg-blend-screen bg-gray-800 bg-top image:bg-gray-100 image:bg-none">
      <div className="image:m-0 w-11/12 image:w-1/2 z-10 relative flex flex-col gap-3 py-10 m-auto">
        <div className="h-6 w-6 hidden image:block absolute top-2 -left-2 rounded-full bg-yellowgreen" />
        <div className="absolute -z-20">
          {[1, 2, 3].map((_, index) => {
            const size = 120 + 80 * index;
            return (
              <div
                key={index}
                style={{ width: size, height: size }}
                className="rounded-full border-[1px] absolute border-gray-200 transform -translate-x-1/2 left-3 top-20 -translate-y-1/2 hidden image:block"
              />
            );
          })}
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Up Your <span className="text-purple-600">Skills </span> <br />
          To <span className="text-purple-600">Advance </span> Your <br />
          <span className="text-purple-600"> Career </span> Path
        </h1>
        <p className="text-sm sm:text-base text-gray-800 sm:text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="text-white w-40 font-bold bg-purple-600 py-3 px-4 rounded-lg">
          Get Started
        </button>
        <div className="text-sm sm:text-base text-gray-800 sm:text-gray-700 gap-4 flex pt-2">
          <span className="flex gap-2 items-center">
            <GiPublicSpeaker className="text-yellow-500" size={24} />
            Public Speak
          </span>
          <span className="flex gap-2 items-center">
            <GiBeachBag className="text-orange-600" size={24} />
            Carrer-Oriented
          </span>
          <span className="flex gap-2 items-center">
            <GiBedLamp className="text-fuchsia-800" size={24} />
            Creative Thinking
          </span>
        </div>
        <div className="h-8 w-8 hidden image:block absolute -bottom-6 left-56 rounded-full bg-yellowgreen/70" />
      </div>
      <div className="image:block hidden">
        <div className="h-5 w-5 absolute top-2 rounded-full right-10 bg-yellowgreen" />
        <div className="relative">
          <div className="w-96 h-96 -left-5 -top-2 absolute z-10 border-yellowgreen border-2 overflow-hidden rounded-full" />
          <div className="w-96 h-96 relative z-10 bg-yellowgreen overflow-hidden rounded-full">
            <img src={dani} alt="hero" className="w-full h-96 object-cover" />
          </div>
          <div className="bg-gray-100/90 z-20 -left-10 w-40 top-20 m-auto rounded-lg gap-3 px-2 py-2 border flex items-center border-purple-600 absolute">
            <div className="bg-purple-600 grid place-items-center rounded-lg w-10 h-10">
              <GiBedLamp className="text-white" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">2K+</h3>
              <p className="text-gray-600">Courses</p>
            </div>
          </div>

          <div className="bg-gray-100/90 left-60 top-72 m-auto rounded-lg gap-2 px-2 py-2 border flex items-center border-purple-600 z-20 absolute">
            <div className="bg-purple-600 grid place-items-center rounded-lg w-10 h-10">
              <GiBedLamp className="text-white" size={28} />
            </div>
            <div>
              <p className="text-gray-600">Tutors</p>
              <h3 className="font-semibold text-lg">2K+</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
