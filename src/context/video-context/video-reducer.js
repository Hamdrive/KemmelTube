import { constants } from "../../constants/constants";

const { videos, categories, filter } = constants;

export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case videos:
      return { ...state, videos: payload };
    case categories:
      return { ...state, categories: payload };
    case filter:
      return { ...state, filter: [...state.filter, payload] };
    default:
      return state;
  }
};
