import { NavLink } from "react-router-dom";

const ActiveDashboardLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-dashboard-link" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveDashboardLink;
