import { Grid } from "@mui/material";
import React from "react";
import { EmptyResult, PageHeader, PrivateCard } from "../../components";
import { useAuth, useVideo } from "../../context";

export const Liked = () => {
  const {
    videoState: { likedVideos },
    videoDispatch,
    deleteFromLikedVideos,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const handleDeleteFromLikedVideos = (videoId) => {
    deleteFromLikedVideos(token, videoId, videoDispatch);
  };

  return (
    <main className="wrapper p-1">
      <PageHeader title="Liked Videos" />
      {likedVideos.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {likedVideos.map((video) => (
            <PrivateCard
              key={video.id}
              slug={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              creatorLogo={video.creatorLogo}
              location="likedVideos"
              handleIconAction={() => handleDeleteFromLikedVideos(video._id)}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not liked any videos yet." />
      )}
    </main>
  );
};
