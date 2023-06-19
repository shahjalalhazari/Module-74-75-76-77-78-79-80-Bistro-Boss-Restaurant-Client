import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "./../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handelItemDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>My Cart | Bistro Boss Restaurant</title>
      </Helmet>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
        color="black"
      />
      <div className="bg-white p-[50px]">
        <div className="flex justify-between text-3xl cinzel font-bold uppercase items-center">
          <p className="">Total Orders: {cart.length}</p>
          <p className="">Total Price: ${total}</p>
          <Link to="/dashboard/payment">
            <button className="btn bg-golden border-0">Pay</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full mt-10 rounded-xl">
            {/* head */}
            <thead className="bg-golden">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask w-[75px] h-[75px]">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handelItemDelete(item)}
                      className="btn bg-[#B91C1C] border-0"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCart;
