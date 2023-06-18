import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const ItemCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [, refetch] = useCart();


  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, recipe, email: user.email}
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added to cart successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-[#f3f3f3]">
      <figure className="relative">
        <img src={image} alt={name} className="h-[280px] w-full" />
        <p className="absolute rounded-md text-white bg-navy-blue py-1 px-3 top-0 right-0 mt-3 mr-3 text-lg">
          ${price}
        </p>
      </figure>
      <div className="p-5">
        <h2 className="item-title text-center ">{name}</h2>
        <p>{recipe}</p>
        <div className="mt-6 text-center ">
          <button
            onClick={() => handleAddToCart(item)}
            className="add-to-cart-btn"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
