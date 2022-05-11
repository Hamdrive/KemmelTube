import React from "react";
import { Grid, Typography } from "@mui/material";
import { RelatedVideoCard, SingleVideoCard } from "../../components";
import { useParams } from "react-router-dom";
import { useAuth, useVideo } from "../../context";

export const Watch = () => {
  const { slug } = useParams();
  const {
    videoState: { videos, likedVideos },
    videoDispatch,
    setHistory,
    setLikedVideos,
    deleteFromLikedVideos,
  } = useVideo();
  const {
    authState: { token },
  } = useAuth();

  const currentVideo = videos?.find((video) => video._id === slug);

  const relatedVideos = videos?.filter(
    (video) =>
      video.categoryName === currentVideo.categoryName && video._id !== slug
  );

  const isLiked = likedVideos?.some((video) => video._id === currentVideo._id);

  const updateHistory = (video) => {
    token && setHistory(token, video, videoDispatch);
  };
  const updateLikedVideos = (video) => {
    token && setLikedVideos(token, video, videoDispatch);
  };

  const handleDeleteFromLikedVideos = (videoId) => {
    deleteFromLikedVideos(token, videoId, videoDispatch);
  };
  return (
    <main className="wrapper p-1">
      <Grid container>
        <Grid item xs={12} md={8} lg={9} px={1}>
          <SingleVideoCard
            slug={slug}
            title={currentVideo?.title}
            creator={currentVideo?.creator}
            creatorLogo={currentVideo?.creatorLogo}
            description={currentVideo?.description}
            setHistory={() => updateHistory(currentVideo)}
            setLikedVideos={
              isLiked
                ? () => handleDeleteFromLikedVideos(currentVideo._id)
                : () => updateLikedVideos(currentVideo)
            }
            isLiked={isLiked}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3} p={1}>
          <Typography
            color="#fff"
            fontWeight={500}
            fontSize="1.5rem"
            variant="h3"
            component="div">
            Related Videos
          </Typography>
          {relatedVideos.map((video) => (
            <RelatedVideoCard
              key={video.id}
              slug={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              creatorLogo={video.creatorLogo}
              setHistory={() => updateHistory(video)}
            />
          ))}
        </Grid>
        Watch
      </Grid>
    </main>
  );
};
