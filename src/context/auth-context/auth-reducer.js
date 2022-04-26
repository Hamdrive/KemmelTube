import { constants } from "../../constants/constants";

const { login, logout } = constants;

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case login:
      return {
        ...state,
        token: payload.token,
        userName: payload.userName,
        userData: payload.userData,
      };

    case logout:
      return { ...state, token: null, userName: null, userData: null };

    default:
      return state;
  }
};
