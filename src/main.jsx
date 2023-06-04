import React from 'react'
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
// import AuthProviders from "./providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-[1920px]">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    {/* <AuthProviders>
      <HelmetProvider>
        <div className="max-w-screen-[1920px]">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders> */}
  </React.StrictMode>
);
