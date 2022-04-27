import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "./video-reducer";
import { getCategories, getVideos } from "./server-requests.js";

const initialValue = {
  videos: [],
  categories: [],
  history: [],
  playlists: [],
  likedVideos: [],
  watchLater: [],
  filter: [],
};

const VideoContext = createContext(initialValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialValue);

  useEffect(() => {
    getCategories(videoDispatch);
    getVideos(videoDispatch);
  }, []);

  const value = { videoState, videoDispatch };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
