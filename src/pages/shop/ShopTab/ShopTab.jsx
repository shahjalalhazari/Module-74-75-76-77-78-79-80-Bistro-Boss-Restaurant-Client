import ItemCard from "../../../components/ItemCard/ItemCard";

const ShopTab = ({ items }) => {
  return (
    <div className="three-cols">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ShopTab;
