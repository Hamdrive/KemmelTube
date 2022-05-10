import React from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import styled from "@emotion/styled";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const SingleVideoCard = ({
  slug,
  title,
  creator,
  creatorLogo,
  description,
  setHistory,
  setLikedVideos,
  isLiked,
  setWatchLater,
  isWatchLater,
}) => {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  const videoActions = [
    {
      id: 1,
      name: isLiked ? "Liked" : "Like",
      title: "Like video",
      icon: isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />,
      clickEvent: setLikedVideos,
      exists: isLiked,
    },
    {
      id: 2,
      name: isWatchLater ? "Added to Watch Later" : "Watch Later",
      title: "Save the video for later",
      icon: isWatchLater ? <WatchLaterIcon /> : <AccessTimeIcon />,
      clickEvent: setWatchLater,
      exists: isWatchLater,
    },
    {
      id: 3,
      name: "Add to Playlist",
      title: "Add video to playlist",
      icon: <PlaylistAddIcon />,
    },
  ];

  const ButtonWrapper = styled(Button)(() => ({
    "&:hover": {
      backgroundColor: "#396ff9",
      borderColor: "#396ff9",
      color: "#fff",
    },
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  }));

  return (
    <>
      <YouTube videoId={slug} opts={opts} onPlay={setHistory} />
      <Box>
        <Typography
          color="#fff"
          fontWeight={500}
          fontSize="1.5rem"
          mt={2}
          variant="h3"
          component="div">
          {title}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          flexWrap="wrap"
          py={1}>
          {videoActions.map((action) => (
            <ButtonWrapper
              startIcon={action.icon}
              key={action.id}
              onClick={action.clickEvent}
              sx={{
                backgroundColor: action.exists ? "#396ff9" : "#373C43",
                m: 1,
              }}>
              {action.name}
            </ButtonWrapper>
          ))}
        </Box>
        <Divider sx={{ height: "1rem", borderColor: "#fff", fill: "#fff" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            pt: 2,
          }}>
          <Avatar
            alt="creator logo"
            src={creatorLogo}
            sx={{ width: 64, height: 64, mr: 2 }}
          />
          <Typography
            color="#fff"
            fontSize={"1.25rem"}
            fontWeight={500}
            variant="h5">
            {creator}
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#fff"
            fontWeight={400}
            fontSize="1.25rem"
            mt={2}
            ml={10}
            variant="p"
            component="div">
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
