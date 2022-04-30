export const filterVideos = (filterCategory, videos) => {
  return filterCategory === "All"
    ? videos
    : videos.filter((video) => filterCategory === video.categoryName);
};
