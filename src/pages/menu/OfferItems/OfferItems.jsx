import HorizontalCard from "../../../components/HorizontalCard/HorizontalCard";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import useMenu from "./../../../hooks/useMenu";
import PrimaryBtn from './../../../components/PrimaryBtn/PrimaryBtn';

const OfferItems = () => {
  const [menu] = useMenu();
  const offerItems = menu.filter((item) => item.category === "offered");
  return (
    <section className="my-container">
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />

      {/* Display Items */}
      <div className="two-cols">
        {offerItems.map((item) => (
          <HorizontalCard key={item._id} item={item} />
        ))}
      </div>

      {/* Button */}
      <PrimaryBtn text="ORDER YOUR FAVORITE FOOD" link="/shop" />
    </section>
  );
};

export default OfferItems;
