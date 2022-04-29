import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "./auth-reducer";

const AuthContext = createContext({});

const initialValue = JSON.parse(localStorage.getItem("userAuthData")) ?? {
  token: "",
  userData: "",
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialValue);

  const value = { authState, authDispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
