import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../assets/black-text-logo.png";
import DashboardNavbar from "../pages/shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-6 py-8">
        <label htmlFor="my-drawer-2" className="content-label">
          <GiHamburgerMenu />
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="nav-content">
          <Link to="/dashboard">
            <img src={logo} alt="" className="ml-3" />
          </Link>
          <DashboardNavbar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
