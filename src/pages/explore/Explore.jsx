import { Grid } from "@mui/material";
import React, { useState } from "react";
import { CategoryFilter, ExploreCard } from "../../components";
import { useVideo } from "../../context";

export const Explore = () => {
  const {
    videoState: { filteredVideos, filters },
  } = useVideo();

  const [selectedCategory, setSelectedCategory] = useState(filters ?? "All");

  return (
    <main className="wrapper p-1">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Grid
        columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
        sx={{ gap: 3 }}
        container
      >
        {filteredVideos.map((video) => (
          <ExploreCard
            key={video.id}
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
