import React from "react";
import { Grid, Typography } from "@mui/material";
import { RelatedVideoCard, SingleVideoCard } from "../../components";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context";

export const Watch = () => {
  const { slug } = useParams();
  const {
    videoState: { videos },
  } = useVideo();

  const currentVideo = videos?.find((video) => video._id === slug);

  const relatedVideos = videos?.filter(
    (video) =>
      video.categoryName === currentVideo.categoryName && video._id !== slug
  );

  return (
    <main className="wrapper p-1">
      <Grid container>
        <SingleVideoCard
          slug={slug}
          title={currentVideo?.title}
          creator={currentVideo?.creator}
          creatorLogo={currentVideo?.creatorLogo}
          description={currentVideo?.description}
        />
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
            />
          ))}
        </Grid>
        Watch
      </Grid>
    </main>
  );
};
