import axios from "axios";
import { Toast } from "../../components";
import { constants } from "../../constants/constants";

const { login, logout, signup } = constants;

export const handleSignUp = async (signUpCredentials, authDispatch) => {
  try {
    const res = await axios.post("/api/auth/signup", signUpCredentials);

    if (res.status === 200 || res.status === 201) {
      const formatData = {
        token: res.data.encodedToken,
        userData: res.data.createdUser,
      };

      localStorage.setItem("userAuthData", JSON.stringify(formatData));

      authDispatch({ type: signup, payload: formatData });

      Toast({
        type: "success",
        message: "You have been successfully signed up 🎉",
      });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Please fill all required fields 🙁 ",
    });
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

      Toast({
        type: "success",
        message: "You have been successfully logged in 🎉",
      });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Invalid credentials. Please try again 🙁 ",
    });
    throw new Error(error);
  }
};

export const handleLogout = (authDispatch) => {
  localStorage.removeItem("userAuthData");
  authDispatch({ type: logout });
  Toast({
    type: "success",
    message: "You have been logged out, see you soon 👋",
  });
};
