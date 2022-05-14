import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ErrorIllustration from "../../assets/ErrorIllustration.svg";

export const ErrorResult = () => {
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
        height="25rem"
        width="100%"
        alt="empty result"
        src={ErrorIllustration}
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
          Sorry, page not found.
        </Typography>
        <Link style={{ textDecoration: "none" }} to="/explore">
          <Typography
            sx={{
              color: "#1a5bff",
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
              fontWeight: 400,
              borderBottom: "3px solid #1a5bff",
              mx: "auto",
              mt: "1rem",
              width: "fit-content",
            }}
            variant="h5"
            component="h5">
            Return to Explore videos
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
