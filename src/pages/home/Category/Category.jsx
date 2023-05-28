// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Category.css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-container text-white">
      <SectionTitle
        key=""
        heading="Order Online"
        subHeading="From 11:00am to 10:00pm"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <div className="absolute bottom-6 left-20 ">
            <div className="relative">
              <h3 className="md:text-3xl absolute text-black uppercase cinzel bottom-0 shadow-xl">
                Salads
              </h3>
              <h3 className="md:text-3xl absolute uppercase cinzel bottom-[3px] shadow-xl">
                Salads
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="absolute bottom-6 left-20 ">
            <div className="relative">
              <h3 className="text-3xl absolute text-black uppercase cinzel bottom-0 shadow-xl">
                Pizzas
              </h3>
              <h3 className="text-3xl absolute uppercase cinzel bottom-[3px] shadow-xl">
                Pizzas
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <div className="absolute bottom-6 left-20 ">
            <div className="relative">
              <h3 className="text-3xl absolute text-black uppercase cinzel bottom-0 shadow-xl">
                soups
              </h3>
              <h3 className="text-3xl absolute uppercase cinzel bottom-[3px] shadow-xl">
                soups
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <div className="absolute bottom-6 left-20 ">
            <div className="relative">
              <h3 className="text-3xl absolute text-black uppercase cinzel bottom-0 shadow-xl">
                desserts
              </h3>
              <h3 className="text-3xl absolute uppercase cinzel bottom-[3px] shadow-xl">
                desserts
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <div className="absolute bottom-6 left-20 ">
            <div className="relative">
              <h3 className="text-3xl absolute text-black uppercase cinzel bottom-0 shadow-xl">
                Salads
              </h3>
              <h3 className="text-3xl absolute uppercase cinzel bottom-[3px] shadow-xl">
                Salads
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
