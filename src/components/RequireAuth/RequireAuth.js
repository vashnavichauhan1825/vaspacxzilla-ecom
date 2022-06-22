import { useAuthCtx } from "components/context/authContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
 const token = localStorage.getItem('token')
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
