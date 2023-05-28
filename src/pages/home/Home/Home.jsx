import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import RecommendedItems from "../RecommendedItems/RecommendedItems";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <FeaturedMenu />
      <PhoneNumber />
      <RecommendedItems />
      <FeaturedBanner/>
    </>
  );
};

export default Home;
