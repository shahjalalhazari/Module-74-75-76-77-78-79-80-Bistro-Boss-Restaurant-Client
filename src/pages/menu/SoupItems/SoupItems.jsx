import useMenu from "../../../hooks/useMenu";
import HorizontalCard from "../../../components/HorizontalCard/HorizontalCard";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const SoupItems = () => {
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === "soup");
  return (
    <section className="my-container">
      {/* Display Items */}
      <div className="two-cols">
        {dessertItems.map((item) => (
          <HorizontalCard key={item._id} item={item} />
        ))}
      </div>

      {/* Button */}
      <div className="text-center my-12">
        <PrimaryBtn text="ORDER YOUR FAVORITE FOOD" link="/shop" />
      </div>
    </section>
  );
};

export default SoupItems;
