import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const ExploreCard = ({ title, coverImg, creator }) => {
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
      }}
    >
      <CardActionArea
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          component="img"
          height="175"
          image={coverImg}
          alt="category image"
        />
        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
          <Typography
            color="#fff"
            fontWeight={600}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography color="#fff" variant="body1">
            {creator}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
};
