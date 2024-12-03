import { Navigation,  A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLoaderData } from "react-router-dom";

const SwiperBanner = () => {
  const estates = useLoaderData();
  return (
    <div className=" md:px-10 px-3 mt-3 lg:h-[70vh] h-auto z-20">
      {" "}
      <Swiper
        
        // install Swiper modules
        modules={[Navigation,  Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        onSwiper={(swiper) =>{} }
        onSlideChange={() => {}}
        className="rounded-lg h-full"
      >
        {estates.map((estate) => (
          <SwiperSlide key={estate.image} className="bg-rose-100">
            <div className="h-full">
              <div
                className="hero h-full "
                style={{
                  backgroundImage: `url(${estate.image})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero bg-transparent lg:p-10">
                  <div className="hero-content flex-col md:flex-row-reverse  ">
                    <img
                      src={estate.image}
                      className="md:w-[40%] w-full h-60 md:h-full rounded-lg shadow-2xl animate__animated animate__fadeInUp"
                    />
                    <div className="lg:p-5 md:space-y-2">
                      <h1 className="md:text-4xl text-3xl font-bold text-white underline animate__animated animate__fadeInUp">
                        {estate.estate_title}
                      </h1>
                      <p className="py-6 text-white md:text-xl text-base animate__animated animate__fadeInUp">
                        {estate.description.length > 100
                          ? estate.description.slice(0, 120) + "..."
                          : estate.description}
                      </p>
                      <p className="text-[#2db938] md:text-2xl text-xl font-bold animate__animated animate__fadeInUp">
                        Price : {estate.price}
                      </p>
                      <Link to={`details/${estate.id}`}>
                        {" "}
                        <button className="btn bg-[#00c194] text-white font-bold border-none">
                          See Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
