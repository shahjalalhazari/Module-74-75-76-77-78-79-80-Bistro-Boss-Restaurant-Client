const ItemCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="bg-[#f3f3f3]">
      <figure className="relative">
        <img src={image} alt={name} className="" />
        <p className="absolute text-white bg-navy-blue py-1 px-3 top-0 right-0 mt-3 mr-3 text-lg">${price}</p>
      </figure>
      <div className="p-5">
        <h2 className="item-title text-center ">{name}</h2>
        <p>{recipe}</p>
        <div className="mt-6 text-center ">
          <button className="add-to-cart-btn">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
