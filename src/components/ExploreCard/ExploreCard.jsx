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
import { Link } from "react-router-dom";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const options = [
  {
    id: 1,
    name: "Add to Watch Later",
    icon: <WatchLaterIcon />,
  },
  {
    id: 2,
    name: "Add to Playlist",
    icon: <PlaylistAddIcon />,
  },

];

export const ExploreCard = ({
  title,
  thumbnail,
  creator,
  creatorLogo,
  slug,
  handleWatchLater,
  watchLater,
  // handlePlaylist,
  // playlist
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setanchorEl] = useState(null)

  const handleMenuClick = (e) => {
    setanchorEl(e.currentTarget)
    setOpenMenu((s) => !s);
  };
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
        to={`/watch/${slug}`}
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
        <IconButton id="long-button" onClick={(e) => handleMenuClick(e)}>
          <MoreVertIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Menu
          id="long-menu"
          open={openMenu}
          onClose={(e) => handleMenuClick(e)}
          anchorEl={anchorEl}
          PaperProps={{
            style: {
              maxHeight: "6rem",
              width: "30ch",
            },
          }}
          sx={{ position: "absolute", bottom: "4%", right: "5%" }}>
          {options.map((option) => (
            <MenuItem
              key={option.id}
              // onClick={handleClose}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText>{option.name}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {watchLater && (
        <IconButton
          onClick={handleWatchLater}
          sx={{
            "&:hover": {
              backgroundColor: "#373c434d",
            },
            backgroundColor: "#fff",
            position: "absolute",
            top: "2%",
            right: "2%",
          }}>
          <WatchLaterIcon sx={{ color: "#373c43", fontSize: "1.5rem" }} />
        </IconButton>
      )}
    </Grid>
  );
};
