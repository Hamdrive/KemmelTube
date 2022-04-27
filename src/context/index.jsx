import { AuthProvider } from "./auth-context/auth-context";
import { useAuth } from "./auth-context/auth-context";
import { authReducer } from "./auth-context/auth-reducer";
import { VideoProvider } from "./video-context/video-context";
import { useVideo } from "./video-context/video-context";
import { videoReducer } from "./video-context/video-reducer";

export {
  AuthProvider,
  useAuth,
  authReducer,
  VideoProvider,
  useVideo,
  videoReducer,
};
