import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export const PreviewCard = ({ title, coverImg, description }) => {
  return (
    <Grid
      item
      xs={1}
      sm={0.97}
      md={0.94}
      component={Card}
      sx={{
        bgcolor: "	#373c43",
        height: 350,
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
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            color="#fff"
            fontWeight={600}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography color="#fff" variant="body1">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
};
