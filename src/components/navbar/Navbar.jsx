import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import HistoryIcon from "@mui/icons-material/History";
import ListIcon from "@mui/icons-material/List";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { styled } from "@mui/material/styles";

export const Navbar = () => {
  const [selected, setSelected] = useState("home");

  const ListBtn = styled(ListItemButton)(({ name }) => ({
    "&:hover": {
      backgroundColor: "	#396ff9",
    },
    backgroundColor: selected === name ? "#1a5bff" : "#1b1f27",
    color: "#fff",
    fontSize: 32,
    borderRadius: "7px",
    paddingTop: "0.55rem",
    paddingBottom: "0.5rem",
    transition: "transform 1000 ease-in-out",
    width: "100%",
  }));

  return (
    <nav className="navigation">
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListBtn name="home" onClick={() => setSelected("home")}>
            <ListItemIcon>
              <HomeIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
            />
          </ListBtn>

          <ListBtn name="explore" onClick={() => setSelected("explore")}>
            <ListItemIcon>
              <ExploreIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Explore"
            />
          </ListBtn>

          <ListBtn name="history" onClick={() => setSelected("history")}>
            <ListItemIcon>
              <HistoryIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="History"
            />
          </ListBtn>

          <ListBtn name="playlists" onClick={() => setSelected("playlists")}>
            <ListItemIcon>
              <ListIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Playlists"
            />
          </ListBtn>

          <ListBtn name="liked" onClick={() => setSelected("liked")}>
            <ListItemIcon>
              <ThumbUpIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Liked videos"
            />
          </ListBtn>

          <ListBtn name="watchLater" onClick={() => setSelected("watchLater")}>
            <ListItemIcon>
              <WatchLaterIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Watch later"
            />
          </ListBtn>
        </List>
      </Box>
    </nav>
  );
};
