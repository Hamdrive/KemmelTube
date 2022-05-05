import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../../assets/KemmelTube.svg";
import styles from "./NavigationWrapper.module.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export const Topbar = ({ setShowSidebar, setSelected, handleLogout }) => {
  const location = useLocation();

  const {
    authState: { token },
  } = useAuth();

  const Menu = styled("div")(({ theme }) => ({
    [theme.breakpoints.up(1024)]: {
      display: "none",
    },
    display: "flex",
  }));

  const Search = styled("div")(({ theme }) => ({
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  }));

  const SearchIconWrapper = styled("div")(() => ({
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: "1rem",
    paddingLeft: "1rem",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    color: "inherit",
    width: "100%",

    "& .MuiInputBase-input": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingRight: "1rem",
      paddingLeft: "4rem",
      width: "100%",
    },
  }));

  const ButtonWrapper = styled(Button)(() => ({
    "&:hover": {
      backgroundColor: token ? "#f44336" : "#396ff9",
      borderColor: token ? "#f44336" : "#396ff9",
    },
    color: "#fff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#fff",
    marginLeft: "auto",
  }));

  return (
    <div className="topbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              bgcolor: "#181b21",
              display: "flex",
              justifyContent: "space-between",
              minHeight: "4rem",
            }}>
            <Menu>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => setShowSidebar((prev) => !prev)}>
                <MenuIcon />
              </IconButton>
              <div className={styles.topbar__logo}>
                <Link to="/" onClick={() => setSelected("home")}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Menu>
            {!(
              location?.pathname === "/signup" ||
              location?.pathname === "/login"
            ) && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            {token ? (
              <ButtonWrapper onClick={handleLogout}>
                <PersonOutlineIcon sx={{ mr: 1 }} />
                Logout
              </ButtonWrapper>
            ) : (
              <ButtonWrapper component={Link} to="/login">
                <PersonOutlineIcon sx={{ mr: 1 }} />
                Login
              </ButtonWrapper>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
