import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryFilter, ExploreCard, PlaylistModal } from "../../components";
import { useAuth, useVideo } from "../../context";

export const Explore = () => {
    const { modal, setModal } = useAuth();

  const {
    videoState: { filteredVideos, filters },
    videoDispatch,
    setWatchLater,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(filters ?? "All");

  const handleExplore = (video, route) => {
    token
      ? route === "watchLater"
        ? setWatchLater(token, video, videoDispatch)
        : null
      : navigate("/login", {
          replace: true,
        });
  };


  return (
    <main className="wrapper p-1">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Grid
        columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
        sx={{ gap: 3 }}
        container>
        {filteredVideos.map((video) => (
          <ExploreCard
            key={video.id}
            slug={video._id}
            title={video.title}
            thumbnail={video.thumbnail}
            creator={video.creator}
            creatorLogo={video.creatorLogo}
            handleWatchLater={() => handleExplore(video, "watchLater")}
            watchLater={true}
            handlePlaylist={() => handleExplore(video, "playlist")}
            playlist={true}
            setModal={setModal}
          />
        ))}
      </Grid>
      {modal && <PlaylistModal modal={modal} setModal={setModal} />}
    </main>
  );
};
