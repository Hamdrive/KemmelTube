import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

export const RequireAuth = () => {
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
