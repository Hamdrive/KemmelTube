import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";

export const RequireAuth = () => {
  const {
    authState: { token },
  } = useAuth();

  return token ? <Navigate to="/explore" replace /> : <Outlet />;
};
