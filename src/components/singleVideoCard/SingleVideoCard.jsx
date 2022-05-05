import React from "react";
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const SingleVideoCard = ({
  slug,
  title,
  creator,
  creatorLogo,
  description,
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
      name: "Like",
      title: "Like video",
      icon: <ThumbUpAltIcon />,
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

  return (
    <Grid item xs={12} md={8} lg={9} px={1}>
      <YouTube videoId={slug} opts={opts} />
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
            <Button
              startIcon={action.icon}
              key={action.id}
              sx={{
                fontSize: 16,
                color: "#fff",
                backgroundColor: "#373C43",
                fontWeight: 500,
                mx: 1,
              }}>
              {action.name}
            </Button>
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
    </Grid>
  );
};
