import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-container pb-10 md:pb-16">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
        color="navy-blue"
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col gap-y-6 px-12 md:px-20 text-center">
              <p>
                <Rating
                  readonly
                  placeholderRating={review.rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                  className="text-3xl text-yellow"
                />
              </p>
              <p className="text-6xl mx-auto">
                <FaQuoteLeft />
              </p>
              <p>{review.details}</p>
              <h3 className="text-3xl text-yellow uppercase font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
