import { Grid } from "@mui/material";
import React from "react";
import { EmptyResult, PageHeader, PrivateCard } from "../../components";
import { useAuth, useVideo } from "../../context";
import { useDocumentTitle } from "../../utils";

export const WatchLater = () => {
  const {
    videoState: { watchLater },
    videoDispatch,
    deleteFromWatchLater,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  useDocumentTitle(
    `Watch Later ${
      watchLater.length > 0 ? `(${watchLater.length})` : ""
    } | KemmelTube`
  );

  const handleDeleteFromWatchLater = (videoId) => {
    deleteFromWatchLater(token, videoId, videoDispatch);
  };

  return (
    <main className="wrapper p-1">
      <PageHeader title="Watch Later Videos" />
      {watchLater.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {watchLater.map((video) => (
            <PrivateCard
              key={video.id}
              slug={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              creatorLogo={video.creatorLogo}
              location="watchLater"
              handleIconAction={() => handleDeleteFromWatchLater(video._id)}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not bookmarked any videos to watch later." />
      )}
    </main>
  );
};
