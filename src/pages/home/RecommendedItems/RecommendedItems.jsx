import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../components/ItemCard/ItemCard";
import useMenu from "./../../../hooks/useMenu";

const RecommendedItems = () => {
  const [menu] = useMenu();

  return (
    <section className="my-container">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
        color="navy-blue"
      />

      <div className="three-cols">
        {menu.slice(0, 3).map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedItems;
