import axios from "axios";
import { constants } from "../../constants/constants";
import { useVideo } from "./video-context";

const { videoDispatch } = useVideo();
const { videos, categories } = constants;

export const getVideos = async () => {
  try {
    const res = await axios.get("/api/videos");
    if (res.status === 200 || res.status === 201) {
      videoDispatch({ type: videos, payload: res.data.videos });
    }
  } catch {
    throw new Error(" Error while fetching data");
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get("/api/categories");
    if (res.status === 200 || res.status === 201) {
      videoDispatch({ type: categories, payload: res.data.categories });
    }
  } catch {
    throw new Error(" Error while fetching data");
  }
};
