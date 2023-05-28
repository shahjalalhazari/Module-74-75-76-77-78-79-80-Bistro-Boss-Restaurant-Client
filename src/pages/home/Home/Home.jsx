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
      <Banner />
      <Category />
      <FeaturedMenu />
      <PhoneNumber />
      <RecommendedItems />
      <FeaturedBanner />
      <Testimonials/>
    </>
  );
};

export default Home;
