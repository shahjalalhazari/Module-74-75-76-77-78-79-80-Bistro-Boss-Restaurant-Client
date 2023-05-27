import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../components/ItemCard/ItemCard";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const FeaturedMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);
  console.log(menuItems);
  return (
    <section className="my-12 mx-8 md:mx-72 mt-20">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.slice(0, 6).map((singleItem) => (
          <ItemCard key={singleItem._id} menuItem={singleItem} />
        ))}
      </div>
      {/* Button */}
      <div className="text-center mt-12">
        <PrimaryBtn/>
      </div>
    </section>
  );
};

export default FeaturedMenu;
