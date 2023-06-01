import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import HorizontalCard from "../../../components/HorizontalCard/HorizontalCard";
import useMenu from "./../../../hooks/useMenu";

const FeaturedMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="my-container">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Check it out"
        color="navy-blue"
      />
      <div className="two-cols">
        {popular.map((item) => (
          <HorizontalCard key={item._id} item={item} />
        ))}
      </div>
      {/* Button */}
      <PrimaryBtn text="View Full  Menu" link="/menu" />
    </section>
  );
};

export default FeaturedMenu;
