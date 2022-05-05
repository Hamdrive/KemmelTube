import axios from "axios";
import { constants } from "../../constants/constants";

const { login, logout, signup } = constants;

export const handleSignUp = async (signUpCredentials, authDispatch) => {
  try {
    const res = await axios.post("/api/auth/signup", signUpCredentials);

    if (res.status === 200 || res.status === 201) {
      const formatData = {
        token: res.data.encodedToken,
        userData: res.data.foundUser,
      };

      localStorage.setItem("userAuthData", JSON.stringify(formatData));

      authDispatch({ type: signup, payload: formatData });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const handleLogin = async (loginCredentials, authDispatch) => {
  try {
    const res = await axios.post("/api/auth/login", loginCredentials);

    if (res.status === 200 || res.status === 201) {
      const formatData = {
        token: res.data.encodedToken,
        userData: res.data.foundUser,
      };
      localStorage.setItem("userAuthData", JSON.stringify(formatData));

      authDispatch({ type: login, payload: formatData });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const handleLogout = (authDispatch) => {
  localStorage.removeItem("userAuthData");
  authDispatch({ type: logout });
};
