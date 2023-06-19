import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../assets/black-text-logo.png";
import DashboardNavbar from "../pages/shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile bg-base-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className="content-label">
          {/* Hamburger menu icon for small devices */}
          <GiHamburgerMenu />
        </label>
        {/* Page content */}
        <div className="my-16 md:my-12 mx-6 md:ml-[120px] md:mr-[150px]">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="nav-content">
          {/* Dashboard Logo */}
          <Link to="/">
            <img src={logo} alt="" className="ml-3" />
          </Link>
          {/* Dashboard Nav Items */}
          <DashboardNavbar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
