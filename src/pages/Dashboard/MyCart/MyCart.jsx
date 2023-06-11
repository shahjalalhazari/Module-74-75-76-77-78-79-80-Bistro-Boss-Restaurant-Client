import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "./../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
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
          <button className="btn bg-golden border-0">Pay</button>
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
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={row.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td>${row.price}</td>
                  <th>
                    <button className="btn bg-[#B91C1C] border-0">
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
