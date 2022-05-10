import axios from "axios";
import { constants } from "../../constants/constants";

const {
  videos,
  categories,
  history,
  addToHistory,
  deleteHistory,
  deleteAllHistory,
  playlists,
  likedVideos,
  addToLikedVideos,
  removeFromLikedVideos,
  watchLater,
  addToWatchLater,
  removeFromWatchLater,
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

export const deleteFromHistory = async (token, videoId, videoDispatch) => {
  try {
    const res = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });

    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: deleteHistory, payload: res.data.history });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const clearAllHistory = async (token, videoDispatch) => {
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
};

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

export const setLikedVideos = async (token, video, videoDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/likes",
      { video },
      { headers: { authorization: token } }
    );
    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: addToLikedVideos, payload: res.data.likes });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFromLikedVideos = async (token, videoId, videoDispatch) => {
  try {
    const res = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: token },
    });

    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: removeFromLikedVideos, payload: res.data.likes });
    }
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

export const setWatchLater = async (token, video, videoDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/watchlater",
      { video },
      { headers: { authorization: token } }
    );
    if (res.status == 200 || res.status === 201) {
      videoDispatch({ type: addToWatchLater, payload: res.data.watchlater });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFromWatchLater = async (token, videoId, videoDispatch) => {
  try {
    const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token },
    });

    if (res.status == 200 || res.status === 201) {
      videoDispatch({
        type: removeFromWatchLater,
        payload: res.data.watchlater,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
