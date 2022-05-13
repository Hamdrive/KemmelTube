import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryFilter, ExploreCard, PlaylistModal } from "../../components";
import { useAuth, useVideo } from "../../context";

export const Explore = () => {
  const [playlistVideo, setPlaylistVideo] = useState({});
  const { modal, setModal } = useAuth();

  const {
    videoState: { filteredVideos, filters },
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(filters ?? "All");

  const handlePlaylist = (video) => {
    if (token) {
      setPlaylistVideo(video);
      setModal((s) => !s);
    } else {
      navigate("/login", {
        replace: true,
      });
    }
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
            video={video}
            handlePlaylist={handlePlaylist}
          />
        ))}
      </Grid>
      {modal && (
        <PlaylistModal
          token={token}
          modal={modal}
          setModal={setModal}
          playlistVideo={playlistVideo}
        />
      )}
    </main>
  );
};
