const HorizontalCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex">
      <figure>
        <img
          src={image}
          alt="Album"
          className="w-[118px] h-[104px] rounded-full rounded-ss-none"
        />
      </figure>
      <div className="ml-5">
        <div className="flex justify-between">
          <h2 className="cinzel text-xl">{name} -------</h2>
          <p className="inter text-xl text-yellow">${price}</p>
        </div>
        <p className="inter mt-2">{recipe}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
