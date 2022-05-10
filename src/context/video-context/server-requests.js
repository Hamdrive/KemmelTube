import axios from "axios";
import { constants } from "../../constants/constants";

const {
  videos,
  categories,
  history,
  addToHistory,
  deleteAllHistory,
  playlists,
  likedVideos,
  watchLater,
} = constants;

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
  try {
    const res = await JSON.parse(localStorage.getItem("userAuthData")).userData;

    videoDispatch({ type: history, payload: res.history });
  } catch (error) {
    throw new Error(error);
  }
};

export const setHistory = async (token, video, videoDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/history",
      { video },
      { headers: { authorization: token } }
    );
    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: addToHistory, payload: res.data.history });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const clearAllHistory = async(token, videoDispatch) => {
  try {
    const res = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });
    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: deleteAllHistory, payload: res.data.history });
    }
  } catch (error) {
    throw new Error(error);
  }
}

export const getPlaylists = async (videoDispatch) => {
  try {
    const res = await JSON.parse(localStorage.getItem("userAuthData")).userData;

    videoDispatch({ type: playlists, payload: res.playlists });
  } catch (error) {
    throw new Error(error);
  }
};

export const getLikedVideos = async (videoDispatch) => {
  try {
    const res = await JSON.parse(localStorage.getItem("userAuthData")).userData;

    videoDispatch({ type: likedVideos, payload: res.likes });
  } catch (error) {
    throw new Error(error);
  }
};

export const getWatchLater = async (videoDispatch) => {
  try {
    const res = await JSON.parse(localStorage.getItem("userAuthData")).userData;

    videoDispatch({ type: watchLater, payload: res.watchlater });
  } catch (error) {
    throw new Error(error);
  }
};
