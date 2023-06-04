import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/shop/Shop/Shop";
import Login from "../pages/login/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
