import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <>
      <Helmet>
        <title>Manage Items | Bistro Boss Restaurant</title>
      </Helmet>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"
        color="black"
      />

      <div className="bg-white p-[50px]">
        <div className="text-3xl cinzel font-bold uppercase items-center">
          <p className="">Total Items: {menu.length}</p>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                      // onClick={() => handelItemDelete(item)}
                      className="btn bg-golden border-0"
                    >
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      // onClick={() => handelItemDelete(item)}
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

export default ManageItems;
