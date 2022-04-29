export const filterVideos = ( filters, videos ) => {
  return filters.length !== 0
    ? videos.filter((video) => filters.includes(video.category))
    : videos;
};
