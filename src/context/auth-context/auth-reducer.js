import { constants } from "../../constants/constants";

const { login, logout, signup } = constants;

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case signup:
    case login:
      return {
        ...state,
        token: payload.token,
        userName: payload.userData.firstName,
        userData: payload.userData,
      };

    case logout:
      return { ...state, token: null, userName: null, userData: null };

    default:
      return state;
  }
};
