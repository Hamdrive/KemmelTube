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

export const Navbar = () => {
  const [selected, setSelected] = useState("home");

  return (
    <nav className="navigation">
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "home" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("home")}
          >
            <ListItemIcon>
              <HomeIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
            />
          </ListItemButton>
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "explore" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("explore")}
          >
            <ListItemIcon>
              <ExploreIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Explore"
            />
          </ListItemButton>
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "history" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("history")}
          >
            <ListItemIcon>
              <HistoryIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="History"
            />
          </ListItemButton>
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "playlists" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("playlists")}
          >
            <ListItemIcon>
              <ListIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Playlists"
            />
          </ListItemButton>
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "liked" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("liked")}
          >
            <ListItemIcon>
              <ThumbUpIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Liked videos"
            />
          </ListItemButton>
          <ListItemButton
            sx={[
              {
                "&:hover": {
                  bgcolor: "	#396ff9",
                },
              },
              {
                bgcolor: selected === "watchLater" ? "#1a5bff" : "#1b1f27",
                color: "#fff",
                fontSize: 32,
                borderRadius: "7px",
                py: 1.75,
              },
            ]}
            onClick={() => setSelected("watchLater")}
          >
            <ListItemIcon>
              <WatchLaterIcon sx={{ fontSize: 26, color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: 22, fontWeight: "medium" }}
              primary="Watch later"
            />
          </ListItemButton>
        </List>
      </Box>
    </nav>
  );
};
