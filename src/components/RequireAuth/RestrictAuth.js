import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthCtx } from "components/context/authContext";
const RestrictAuth = () => {
  const { user } = useAuthCtx();
  const location = useLocation();
  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RestrictAuth;
