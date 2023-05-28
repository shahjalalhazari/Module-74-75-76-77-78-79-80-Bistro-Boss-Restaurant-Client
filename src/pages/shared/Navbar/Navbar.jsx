import { Link } from "react-router-dom";
import cart from "../../../assets/cart.png";
import textLogo from "../../../assets/text-logo.png";

const Navbar = () => {
  const navListItems = (
    <div className="font-medium md:flex">
      <li>
        <Link to="">HOME</Link>
      </li>
      <li>
        <Link to="">CONTACT US</Link>
      </li>
      <li>
        <Link to="">DASHBOARD</Link>
      </li>
      <li>
        <Link to="">OUR MENU</Link>
      </li>
      <li>
        <Link to="">OUR SHOP</Link>
      </li>
      <li>
        <Link to="">
          <img src={cart} alt="" className="h-11" />
        </Link>
      </li>
      <div className="flex items-center">
        <li>
          <Link to="">SIGN OUT</Link>
        </li>
        <li>
          <Link to="">
            <img
              src="https://img.freepik.com/free-icon/user_318-824560.jpg?w=360"
              alt=""
              className="w-9 h-9 rounded-full"
            />
          </Link>
        </li>
      </div>
    </div>
  );
  return (
    <div className="nav-container">
      <div className="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mt-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 text-black"
          >
            {navListItems}
          </ul>
        </div>
        <Link to="">
          <img src={textLogo} alt="" className="h-[75px] my-3" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navListItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
