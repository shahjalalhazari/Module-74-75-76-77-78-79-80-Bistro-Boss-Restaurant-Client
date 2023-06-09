import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import ActiveDashboardLink from "../../../components/ActiveDashboardLink/ActiveDashboardLink";
import { GiHamburgerMenu, GiStarsStack } from "react-icons/gi";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <ul className="menu mt-6 md:mt-10">
      {/* Sidebar content here */}
      <li>
        <ActiveDashboardLink to="/">
          <FaHome /> User Home
        </ActiveDashboardLink>
      </li>
      <li>
        <ActiveDashboardLink to="/">
          <FaCalendarAlt /> Reservation
        </ActiveDashboardLink>
      </li>
      <li>
        <ActiveDashboardLink to="/">
          <FaWallet /> Payment History
        </ActiveDashboardLink>
      </li>
      <li>
        <ActiveDashboardLink to="/dashboard/cart">
          <FaShoppingCart /> My Cart
        </ActiveDashboardLink>
      </li>
      <li>
        <ActiveDashboardLink to="/">
          <GiStarsStack /> Add Review
        </ActiveDashboardLink>
      </li>
      <li>
        <ActiveDashboardLink to="/">
          <FaCalendarCheck /> My Booking
        </ActiveDashboardLink>
      </li>
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
        <Link to="">
          <FaEnvelope /> Contact
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNavbar;
