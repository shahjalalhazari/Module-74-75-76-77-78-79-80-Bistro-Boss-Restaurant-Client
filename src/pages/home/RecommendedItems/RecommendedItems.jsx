import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../components/ItemCard/ItemCard";

const RecommendedItems = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setRecommendedItems(data));
  }, []);
  return (
    <section className="my-container">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
        color="navy-blue"
      />

      <div className="three-cols">
        {recommendedItems.slice(0, 3).map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedItems;
