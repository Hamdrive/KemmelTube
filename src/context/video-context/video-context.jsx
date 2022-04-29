import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "./video-reducer";
import {
  getCategories,
  getHistory,
  getLikedVideos,
  getPlaylists,
  getVideos,
  getWatchLater,
} from "./server-requests.js";
import { filterVideos } from "./filterVideos";
import { constants } from "../../constants/constants";

const { filteredVideos } = constants;

const initialValue = {
  videos: [],
  filteredVideos: [],
  categories: [],
  history: [],
  playlists: [],
  likedVideos: [],
  watchLater: [],
  filters: [],
};

const VideoContext = createContext(initialValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialValue);

  useEffect(() => {
    const finalVideos = filterVideos(videoState, [...videoState.videos]);
    videoDispatch({ type: filteredVideos, payload: finalVideos });
  }, [videoState.categories]);

  useEffect(() => {
    getCategories(videoDispatch);
    getVideos(videoDispatch);
    getHistory(videoDispatch);
    getPlaylists(videoDispatch);
    getLikedVideos(videoDispatch);
    getWatchLater(videoDispatch);
  }, []);

  const value = { videoState, videoDispatch };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
