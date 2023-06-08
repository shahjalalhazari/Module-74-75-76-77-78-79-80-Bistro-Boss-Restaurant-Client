import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/shop/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/:category",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
