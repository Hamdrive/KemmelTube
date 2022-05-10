import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import EmptyIllustration from "../../assets/EmptyIllustration.svg";

export const EmptyResult = ({ title }) => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 170px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="section">
      <Box
        sx={{
          height: "20rem",
          width: "20rem",
        }}
        alt="empty result"
        src={EmptyIllustration}
        component="img"></Box>
      <Box component="section">
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "1.2rem",
              md: "1.5rem",
            },
            fontWeight: 400,
            textAlign: "center",
          }}
          variant="h5"
          component="h5">
          {title}
        </Typography>
        <Link style={{ textDecoration: "none" }} to="/explore">
          <Typography
            sx={{
              color: "#1a5bff",
              fontSize: {
                xs: "1.2rem",
                md: "1.5rem",
              },
              fontWeight: 400,
              borderBottom: "3px solid #1a5bff",
              mx: "auto",
              width: "fit-content",
            }}
            variant="h5"
            component="h5">
            Explore videos
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
