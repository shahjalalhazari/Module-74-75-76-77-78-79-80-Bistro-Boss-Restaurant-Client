import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const RecommendedItems = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setRecommendedItems(data));
  }, []);
  console.log(recommendedItems);
  return (
    <section className="my-container">
      <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try" />

      <div className="three-cols">
        {recommendedItems.slice(0, 3).map((item) => (
          <div className="bg-[#f3f3f3]" key={item._id}>
            <figure className="">
              <img src={item.image} alt="Caeser Salad" className="" />
            </figure>
            <div className="text-center p-8">
              <h2 className="item-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="mt-6">
                <button className="add-to-cart-btn">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedItems;
