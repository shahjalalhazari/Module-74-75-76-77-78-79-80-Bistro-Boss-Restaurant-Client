import { Link } from "react-router-dom";
import cart from "../../../assets/cart.png";
import textLogo from "../../../assets/text-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

import profileImg from "../../../assets/others/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const navListItems = (
    <div className="font-medium md:flex uppercase">
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/menu">Our Menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/shop/salads">Our Shop</ActiveLink>
      </li>
      <li>
        <div className="indicator relative">
          <Link to="">
            <span className="indicator-item badge bg-navy-blue absolute top-5 right-5">
              0
            </span>
            <img src={cart} alt="" className="h-11" />
          </Link>
        </div>
      </li>
      <div className="flex items-center">
        <div className="dropdown md:dropdown-end text-navy-blue">
          <label tabIndex={5} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 h-9 rounded-full">
              {user ? (
                <>
                  <img src={user.photoURL} alt={user.displayName} />
                </>
              ) : (
                <>
                  <img src={profileImg} alt="" />
                </>
              )}
            </div>
          </label>
          <ul
            tabIndex={5}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <>
                <li>
                  <Link to="" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li onClick={handleLogOut}>
                  <span>Log Out</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <ActiveLink to="/signup">Signup</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/login">Login</ActiveLink>
                </li>
              </>
            )}
          </ul>
        </div>
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
        <Link to="/">
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
