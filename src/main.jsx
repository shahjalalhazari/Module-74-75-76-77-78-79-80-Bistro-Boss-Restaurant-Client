import React from 'react'
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";

// TanStack Query
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-[1920px]">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
