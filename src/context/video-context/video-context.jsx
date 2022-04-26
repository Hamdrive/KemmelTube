import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "./video-reducer";

const VideoContext = createContext({})

const useVideo = useContext(VideoContext)
const initialValue = {
    videos: [],
    categories: [],
    history: [],
    playlists: [],
    likedVideos: [],
    watchLater: [],
    filter: []
}

const VideoProvider = ({children}) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, initialValue)

    const value={videoState, videoDispatch}

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}

export {VideoProvider, useVideo}

