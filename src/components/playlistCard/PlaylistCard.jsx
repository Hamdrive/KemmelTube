import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyIllustration from "../../assets/EmptyIllustration.svg";

export const PlaylistCard = ({
  title,
  thumbnail,
  length,
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
        to={`/playlists/${slug}`}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="250"
          image={thumbnail || EmptyIllustration}
          alt="category image"
          sx={{ objectFit: "fit" }}
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
            {title} ({length > 0 ? `${length} Videos` : "Empty Playlist"})
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={handleIconAction}
        sx={{
          "&:hover": {
            backgroundColor: "#f4433666",
          },
          position: "absolute",
          top: "2%",
          right: "2%",
        }}>
        {location === "playlists" && (
          <DeleteIcon sx={{ color: "#f44336", fontSize: "1.75rem" }} />
        )}
      </IconButton>
    </Grid>
  );
};
