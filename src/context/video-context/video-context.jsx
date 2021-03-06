import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer } from "./video-reducer";
import {
  getCategories,
  getHistory,
  getLikedVideos,
  setLikedVideos,
  deleteFromLikedVideos,
  getPlaylists,
  getSinglePlaylist,
  setPlaylists,
  setPlaylistNewVideo,
  deleteVideoFromPlaylist,
  deleteSinglePlaylist,
  getVideos,
  getWatchLater,
  setWatchLater,
  deleteFromWatchLater,
  setHistory,
  deleteFromHistory,
  clearAllHistory,
} from "./server-requests.js";
import { filterVideos } from "./filterVideos";
import { constants } from "../../constants/constants";
import { useAuth } from "../../context";

const { filteredVideos } = constants;

const initialValue = {
  videos: [],
  filteredVideos: [],
  categories: [],
  history: [],
  playlists: [],
  likedVideos: [],
  watchLater: [],
  filters: "All",
};

const VideoContext = createContext(initialValue);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialValue);

  const {
    authState: { token },
  } = useAuth();

  const isInPlaylist = (playlistId, videoId) => {
    const currPlaylist = videoState?.playlists?.filter((playlist) => playlist._id === playlistId)
    const findVideoInPlaylist = currPlaylist[0]?.videos?.some((video) => video._id === videoId)
    return findVideoInPlaylist
  }

  useEffect(() => {
    const finalVideos = filterVideos(videoState.filters, [
      ...videoState.videos,
    ]);
    videoDispatch({ type: filteredVideos, payload: finalVideos });
  }, [videoState.filters, videoState.videos]);

  useEffect(() => {
    getVideos(videoDispatch);
    getCategories(videoDispatch);

    if (token) {
      getHistory(videoDispatch);
      getPlaylists(videoDispatch);
      getLikedVideos(videoDispatch);
      getWatchLater(videoDispatch);
    }
  }, []);

  const value = {
    videoState,
    videoDispatch,
    setHistory,
    clearAllHistory,
    deleteFromHistory,
    setLikedVideos,
    deleteFromLikedVideos,
    setWatchLater,
    deleteFromWatchLater,
    getSinglePlaylist,
    setPlaylists,
    setPlaylistNewVideo,
    deleteVideoFromPlaylist,
    deleteSinglePlaylist,
    isInPlaylist
  };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
