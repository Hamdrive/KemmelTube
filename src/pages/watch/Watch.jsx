import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

export const Watch = () => {
  const { slug } = useParams();

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  console.log(slug);

  return (
    <main className="wrapper p-1">
      <Grid container >
        <Grid item xs={12} md={8}>
          <YouTube videoId={slug} opts={opts} />
        </Grid>
        <Grid item xs={12} md={4} p={1}>
          <div >Related videos</div>
        </Grid>
        Watch
      </Grid>
    </main>
  );
};
