import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  PlaylistModal,
  RelatedVideoCard,
  SingleVideoCard,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useVideo } from "../../context";

export const Watch = () => {
  const [playlistVideo, setPlaylistVideo] = useState({});

  const { slug } = useParams();
  const {
    videoState: { videos, likedVideos, watchLater },
    videoDispatch,
    setHistory,
    setLikedVideos,
    deleteFromLikedVideos,
    setWatchLater,
    deleteFromWatchLater,
  } = useVideo();

  const {
    authState: { token },
    modal,
    setModal,
  } = useAuth();

  const navigate = useNavigate();
  const currentVideo = videos?.find((video) => video._id === slug);

  const relatedVideos = videos?.filter(
    (video) =>
      video.categoryName === currentVideo.categoryName && video._id !== slug
  );

  const isLiked = likedVideos?.some((video) => video._id === currentVideo._id);

  const isWatchLater = watchLater?.some(
    (video) => video._id === currentVideo._id
  );

  const updateHistory = (video) => {
    token && setHistory(token, video, videoDispatch);
  };

  const handleLiked = (video) => {
    if (token) {
      isLiked
        ? deleteFromLikedVideos(token, video._id, videoDispatch)
        : setLikedVideos(token, video, videoDispatch);
    } else {
      navigate("/login", {
        replace: true,
      });
    }
  };

  const handleWatchLater = (video) => {
    if (token) {
      isWatchLater
        ? deleteFromWatchLater(token, video._id, videoDispatch)
        : setWatchLater(token, video, videoDispatch);
    } else {
      navigate("/login", {
        replace: true,
      });
    }
  };

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
      <Grid container>
        <Grid item xs={12} md={8} lg={9} px={1}>
          <SingleVideoCard
            slug={slug}
            video={currentVideo}
            title={currentVideo?.title}
            creator={currentVideo?.creator}
            creatorLogo={currentVideo?.creatorLogo}
            description={currentVideo?.description}
            setHistory={() => updateHistory(currentVideo)}
            isLiked={isLiked}
            setLikedVideos={() => handleLiked(currentVideo)}
            isWatchLater={isWatchLater}
            setWatchLater={() => handleWatchLater(currentVideo)}
            handlePlaylistModal={handlePlaylist}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          p={1}
          sx={{
            pt: {
              xs: 5,
              md: 0,
            },
          }}>
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
