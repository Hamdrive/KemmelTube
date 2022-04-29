import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

export const RedirectAuth = () => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
