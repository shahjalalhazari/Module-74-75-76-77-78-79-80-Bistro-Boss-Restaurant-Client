import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import ActiveDashboardLink from "../../../components/ActiveDashboardLink/ActiveDashboardLink";
import { GiHamburgerMenu, GiStarsStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const DashboardNavbar = () => {
  const [cart] = useCart();

  // TODO: Load data from server to check user role.
  const isAdmin = true;

  return (
    <ul className="menu mt-6 md:mt-10 text-xl">
      {isAdmin ? (
        <>
          <li>
            <ActiveDashboardLink to="/dashboard/admin">
              <FaHome /> Admin Home
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/add-item">
              <FaUtensils /> Add Items
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/manage-item">
              <CgMenuGridR /> Manage Items
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/manage-bookings">
              <FaBook /> Manage Bookings
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/users">
              <FaUsers /> All Users
            </ActiveDashboardLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <ActiveDashboardLink to="/dashboard/user">
              <FaHome /> User Home
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/reservation">
              <FaCalendarAlt /> Reservation
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/payments">
              <FaWallet /> Payment History
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/my-cart">
              <FaShoppingCart /> My Cart
              <span className="indicator-item badge badge-lg px-4 text-white  bg-navy-blue">
                {cart?.length || 0}
              </span>
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/add-review">
              <GiStarsStack /> Add Review
            </ActiveDashboardLink>
          </li>
          <li>
            <ActiveDashboardLink to="/dashboard/my-booking">
              <FaCalendarCheck /> My Booking
            </ActiveDashboardLink>
          </li>
        </>
      )}

      <hr className="border-white my-3 md:my-6" />

      <li>
        <Link to="/">
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <GiHamburgerMenu /> Menu
        </Link>
      </li>
      <li>
        <Link to="/shop/salads">
          <FaShoppingBag /> Shop
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <FaEnvelope /> Contact
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNavbar;
