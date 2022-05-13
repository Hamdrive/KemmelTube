import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth, useVideo } from "../../context";

export const ExploreCard = ({ video, handlePlaylist }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { title, thumbnail, creator, creatorLogo, _id } = video;

  const {
    videoState: { watchLater },
    videoDispatch,
    setWatchLater,
    deleteFromWatchLater,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const navigate = useNavigate();

  const isWatchLater = watchLater?.some(
    (allvideo) => allvideo._id === video._id
  );

  const handleWatchLater = () => {
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

  const options = [
    {
      id: "watchLater",
      name: isWatchLater ? "Remove From Watch Later" : "Add to Watch Later",
      icon: isWatchLater ? (
        <DeleteIcon sx={{ color: "#f44336" }} />
      ) : (
        <WatchLaterIcon />
      ),
      action: () => handleWatchLater(),
    },
    {
      id: "playlist",
      name: "Add to Playlist",
      icon: <PlaylistAddIcon />,
      action: () => {
        handlePlaylist(video);
        setAnchorEl(null);
      },
    },
  ];

  return (
    <Grid
      item
      xs={1}
      sm={0.96}
      md={0.94}
      lg={1.59}
      xl={0.94}
      component={Card}
      sx={{
        bgcolor: "	#373c43",
        height: 350,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}>
      <CardActionArea
        component={Link}
        to={`/watch/${_id}`}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="175"
          image={thumbnail}
          alt="category image"
          sx={{ objectFit: "fill" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            width: "100%",
          }}>
          <Typography
            color="#fff"
            fontWeight={600}
            gutterBottom
            variant="h6"
            component="div">
            {title}
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}>
            <Box
              component="section"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Avatar
                alt="creator logo"
                src={creatorLogo}
                sx={{ width: 36, height: 36, mr: 2 }}
              />
              <Typography color="#fff" variant="body1">
                {creator}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{ position: "absolute", bottom: "4%", right: "5%" }}
        component="section">
        <IconButton
          id="long-button"
          onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MoreVertIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Menu
          id="long-menu"
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          PaperProps={{
            style: {
              maxHeight: "6rem",
              width: "35ch",
            },
          }}>
          {options.map((option) => (
            <MenuItem
              key={option.id}
              onClick={option.action}
              sx={{
                color: option.id === "watchLater" && isWatchLater && "#f44336",
              }}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText>{option.name}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Grid>
  );
};
