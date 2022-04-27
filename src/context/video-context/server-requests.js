import axios from "axios";
import { constants } from "../../constants/constants";
// import { useVideo } from "./video-context";

const { videos, categories, history, playlists, likedVideos, watchLater } =
  constants;

// const {videoDispatch} = useVideo()

export const getVideos = async (videoDispatch) => {
  try {
    const res = await axios.get("/api/videos");
    if (res.status === 200 || res.status === 201) {
      videoDispatch({ type: videos, payload: res.data.videos });
    }
  } catch {
    throw new Error(" Error while fetching data");
  }
};

export const getCategories = async (videoDispatch) => {
  try {
    const res = await axios.get("/api/categories");
    if (res.status === 200 || res.status === 201) {
      videoDispatch({ type: categories, payload: res.data.categories });
    }
  } catch {
    throw new Error(" Error while fetching data");
  }
};

export const getHistory = async (videoDispatch) => {
  const res = await JSON.parse(localStorage.getItem("userAuthData")).userData
    .history;

  videoDispatch({ type: history, payload: res });
};

export const getPlaylists = async (videoDispatch) => {
  const res = await JSON.parse(localStorage.getItem("userAuthData")).userData
    .playlists;

  videoDispatch({ type: playlists, payload: res });
};

export const getLikedVideos = async (videoDispatch) => {
  const res = await JSON.parse(localStorage.getItem("userAuthData")).userData
    .likes;

  videoDispatch({ type: likedVideos, payload: res });
};

export const getWatchLater = async (videoDispatch) => {
  const res = await JSON.parse(localStorage.getItem("userAuthData")).userData
    .watchlater;

  videoDispatch({ type: watchLater, payload: res });
};
