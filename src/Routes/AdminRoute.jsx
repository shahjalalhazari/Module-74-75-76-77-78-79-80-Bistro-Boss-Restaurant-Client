import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "./../hooks/useAdmin";

const AdminRoute = ({ Children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    <div className="my-container">
      <progress className="progress w-full"></progress>
    </div>;
  }

  if (user && isAdmin) {
    return Children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
