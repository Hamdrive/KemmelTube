import React from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
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
    },
    {
      id: 2,
      name: "Watch Later",
      title: "Save the video for later",
      icon: <WatchLaterIcon />,
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
        <Box display={"flex"} justifyContent={"flex-end"} py={1}>
          {videoActions.map((action) => (
            <ButtonWrapper
              startIcon={action.icon}
              key={action.id}
              onClick={setLikedVideos}
              sx={{
                fontSize: 16,
                color: "#fff",
                backgroundColor: "#373C43",
                fontWeight: 500,
                mx: 1,
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
