import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const RelatedVideoCard = ({
  title,
  thumbnail,
  creator,
  creatorLogo,
  slug,
}) => {
  // to check for screen size
  const theme = useTheme();
  const tab = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        bgcolor: "#373c43",
        height: "fit-content",
        my: "1rem",
      }}>
      <CardActionArea
        component={Link}
        to={`/watch/${slug}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: tab ? "row" : "column",
        }}>
        <CardMedia
          component="img"
          height="150"
          image={thumbnail}
          alt="category image"
          sx={{ objectFit: tab ? "fill" : "fit" }}
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
            variant="p"
            component="div">
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mt: 1,
            }}>
            <Avatar
              alt="creator logo"
              src={creatorLogo}
              sx={{ width: 24, height: 24, mr: 1 }}
            />
            <Typography color="#fff" variant="body2">
              {creator}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
