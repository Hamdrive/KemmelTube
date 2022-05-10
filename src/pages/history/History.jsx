import { Grid } from "@mui/material";
import React from "react";
import { ExploreCard } from "../../components";
import { useVideo } from "../../context";

export const History = () => {
  const {
    videoState: { history },
  } = useVideo();

  return (
    <main className="wrapper p-1">
      <Grid
        columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
        sx={{ gap: 3 }}
        container>
        {history.map((video) => (
          <ExploreCard
            key={video.id}
            slug={video._id}
            title={video.title}
            thumbnail={video.thumbnail}
            creator={video.creator}
            creatorLogo={video.creatorLogo}
          />
        ))}
      </Grid>
    </main>
  );
};
