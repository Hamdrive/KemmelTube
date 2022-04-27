import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "./auth-reducer";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const initialValue = JSON.parse(localStorage.getItem("userAuthData")) ?? {};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialValue);

  const value = { authState, authDispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
