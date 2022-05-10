import React, { useEffect } from "react";
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
import LoginIcon from "@mui/icons-material/Login";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ selected, setSelected }) => {
  const location = useLocation();

  const ListBtn = styled(ListItemButton)(({ name }) => ({
    "&:hover": {
      backgroundColor: "	#396ff9",
    },
    backgroundColor: selected === name ? "#1a5bff" : "#1b1f27",
    color: "#fff",
    fontSize: 32,
    paddingTop: "0.55rem",
    paddingBottom: "0.5rem",
    transition: "transform 1000 ease-in-out",
    width: "100%",
  }));

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/explore":
        setSelected("explore");
        break;
      case "/history":
        setSelected("history");
        break;
      case "/playlists":
        setSelected("playlists");
        break;
      case "/liked":
        setSelected("liked");
        break;
      case "/watchLater":
        setSelected("watchLater");
        break;
      case "/login":
        setSelected("login");
        break;
      case "/signup":
        setSelected("signup");
        break;
      default:
        setSelected("");
    }
  }, [location.pathname]);

  return (
    <nav className="navigation">
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav" aria-label="main mailbox folders">
          {!(
            location?.pathname === "/signup" || location?.pathname === "/login"
          ) ? (
            <>
              <Link to="/" className="link__decoration">
                <ListBtn name="home">
                  <ListItemIcon>
                    <HomeIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                  />
                </ListBtn>
              </Link>

              <Link to="/explore" className="link__decoration">
                <ListBtn name="explore">
                  <ListItemIcon>
                    <ExploreIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Explore"
                  />
                </ListBtn>
              </Link>

              <Link to="/history" className="link__decoration">
                <ListBtn name="history">
                  <ListItemIcon>
                    <HistoryIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="History"
                  />
                </ListBtn>
              </Link>

              <Link to="/playlists" className="link__decoration">
                <ListBtn name="playlists">
                  <ListItemIcon>
                    <ListIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Playlists"
                  />
                </ListBtn>
              </Link>

              <Link to="/liked" className="link__decoration">
                <ListBtn name="liked">
                  <ListItemIcon>
                    <ThumbUpIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Liked videos"
                  />
                </ListBtn>
              </Link>

              <Link to="/watchLater" className="link__decoration">
                <ListBtn name="watchLater">
                  <ListItemIcon>
                    <WatchLaterIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Watch later"
                  />
                </ListBtn>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="link__decoration">
                <ListBtn name="login">
                  <ListItemIcon>
                    <LoginIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Login"
                  />
                </ListBtn>
              </Link>
              <Link to="/signup" className="link__decoration">
                <ListBtn name="signup">
                  <ListItemIcon>
                    <OpenInNewIcon sx={{ fontSize: 26, color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 22,
                      fontWeight: "medium",
                    }}
                    primary="Signup"
                  />
                </ListBtn>
              </Link>
            </>
          )}
        </List>
      </Box>
    </nav>
  );
};
