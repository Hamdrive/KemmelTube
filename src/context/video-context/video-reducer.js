import { constants } from "../../constants/constants";

const {
  videos,
  categories,
  filter,
  filteredVideos,
  history,
  addToHistory,
  deleteHistory,
  deleteAllHistory,
  playlists,
  addPlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  likedVideos,
  addToLikedVideos,
  removeFromLikedVideos,
  watchLater,
  addToWatchLater,
  removeFromWatchLater,
} = constants;

export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case videos:
      return { ...state, videos: payload };

    case categories:
      return { ...state, categories: payload };

    case filter:
      return { ...state, filter: [...state.filter, payload] };

    case filteredVideos:
      return { ...state, filteredVideos: payload };

    case history:
    case addToHistory:
    case deleteHistory:
    case deleteAllHistory:
      return { ...state, history: payload };

    case playlists:
    case addPlaylist:
    case addVideoToPlaylist:
    case removeVideoFromPlaylist:
    case deletePlaylist:
      return { ...state, playlists: payload };

    case likedVideos:
    case addToLikedVideos:
    case removeFromLikedVideos:
      return { ...state, likedVideos: payload };

    case watchLater:
    case addToWatchLater:
    case removeFromWatchLater:
      return { ...state, watchLater: payload };

    default:
      return state;
  }
};
