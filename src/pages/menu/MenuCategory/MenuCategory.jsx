import HorizontalCard from "../../../components/HorizontalCard/HorizontalCard";
import PrimaryBtn from "./../../../components/PrimaryBtn/PrimaryBtn";
import CategoryCover from "./../../shared/CategoryCover/CategoryCover";

const MenuCategory = ({ items, heading, coverImage }) => {
  return (
    <>
      {heading && <CategoryCover image={coverImage} heading={heading} />}
      <section className="my-container">
        {/* Display Items */}
        <div className="two-cols">
          {items.map((item) => (
            <HorizontalCard key={item._id} item={item} />
          ))}
        </div>

        {/* Button */}
        {heading ? (
          <PrimaryBtn
            text="ORDER YOUR FAVORITE FOOD"
            link={`/shop/${heading}`}
          />
        ) : (
          <PrimaryBtn text="ORDER YOUR FAVORITE FOOD" link={`/shop/salads`} />
        )}
      </section>
    </>
  );
};

export default MenuCategory;
