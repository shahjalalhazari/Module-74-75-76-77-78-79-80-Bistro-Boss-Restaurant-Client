const ItemCard = ({ data }) => {
  const {image, name, recipe} = data;

  return (
    <div className="bg-[#f3f3f3]">
      <figure className="">
        <img src={image} alt="Caeser Salad" className="" />
      </figure>
      <div className="text-center p-8">
        <h2 className="item-title">{name}</h2>
        <p>{recipe}</p>
        <div className="mt-6">
          <button className="add-to-cart-btn">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
