import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export const ExploreCard = ({
  title,
  thumbnail,
  creator,
  creatorLogo,
  slug,
  location,
  handleIconAction,
}) => {
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
            sx={{
              display: "flex",
              justifyContent: "flex-start",
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
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={handleIconAction}
        sx={{
          "&:hover": {
            backgroundColor:
              location === "history" ? "#f4433666" : "transparent",
          },
          position: "absolute",
          top: "2%",
          right: "2%",
        }}>
        {location === "history" ? (
          <DeleteIcon sx={{ color: "#f44336", fontSize: "1.75rem" }} />
        ) : null}
      </IconButton>
    </Grid>
  );
};
