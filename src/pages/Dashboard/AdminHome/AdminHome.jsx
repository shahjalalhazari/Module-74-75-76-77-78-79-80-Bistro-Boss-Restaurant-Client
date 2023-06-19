import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Admin Home | Bistro Boss Restaurant</title>
      </Helmet>
      <div>
        <h1 className="text-4xl cinzel font-semibold">Hi, Welcome Back!</h1>
      </div>
      <div className="mt-6 flex gap-x-4">
        <div className="revenue-card data-card">
          <FaWallet className="text-6xl text-white" />
          <div>
            <h1 className="text-4xl font-bold">${stats.revenue}</h1>
            <h4 className="text-2xl font-normal">Revenue</h4>
          </div>
        </div>
        <div className="data-card customer-card">
          <FaUsers className="text-6xl text-white" />
          <div>
            <h1 className="text-4xl font-bold">{stats.customers}</h1>
            <h4 className="text-2xl font-normal">Customers</h4>
          </div>
        </div>
        <div className="data-card product-card">
          <MdNoFood className="text-6xl text-white" />
          <div>
            <h1 className="text-4xl font-bold">{stats.products}</h1>
            <h4 className="text-2xl font-normal">Products</h4>
          </div>
        </div>
        <div className="data-card order-card">
          <FaTruck className="text-6xl text-white" />
          <div>
            <h1 className="text-4xl font-bold">{stats.orders}</h1>
            <h4 className="text-2xl font-normal">Orders</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
