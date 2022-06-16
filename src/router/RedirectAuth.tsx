import React from "react"
import { useAuth } from "../context";
import { Navigate, Outlet } from "react-router-dom";

export const RedirectAuth = () => {
  const {
    authState: { token },
  } = useAuth();

  return token ? <Navigate to="/explore" replace /> : <Outlet />;
};
