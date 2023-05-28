import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import HorizontalCard from "../../../components/HorizontalCard/HorizontalCard";

const FeaturedMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);
  return (
    <section className="my-container">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Check it out"
        color="navy-blue"
      />
      <div className="two-cols">
        {menuItems.slice(0, 6).map((singleItem) => (
          <HorizontalCard key={singleItem._id} menuItem={singleItem} />
        ))}
      </div>
      {/* Button */}
      <div className="text-center mt-12">
        <PrimaryBtn />
      </div>
    </section>
  );
};

export default FeaturedMenu;
