import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const loginLayout =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <>
      {loginLayout || <Navbar />}
      <Outlet />
      {loginLayout || <Footer />}
    </>
  );
};

export default MainLayout;
