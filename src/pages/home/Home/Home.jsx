import { Helmet } from "react-helmet-async";
import AboutUsBanner from "../AboutUsBanner/AboutUsBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import RecommendedItems from "../RecommendedItems/RecommendedItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* React Helmet for dynamic page title */}
      <Helmet>
        <title>Home | Bistro Boss Restaurant</title>
      </Helmet>

      <Banner />
      <Category />
      <AboutUsBanner />
      <FeaturedMenu />
      <PhoneNumber />
      <RecommendedItems />
      <FeaturedBanner />
      <Testimonials />
    </>
  );
};

export default Home;
