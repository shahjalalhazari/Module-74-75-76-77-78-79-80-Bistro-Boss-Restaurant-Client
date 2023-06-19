import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/shop/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "./../pages/Dashboard/Payment/Payment";
import AdminHome from "./../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "./../pages/Dashboard/UserHome/UserHome";

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
        element: <Shop />,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // routes for user
      {
        path: "user",
        element: <UserHome />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // routes for admin
      {
        path: "admin",
        element: <AdminHome />,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "manage-item",
        element: <ManageItems />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
]);
