import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { PageHeader, ExploreCard, EmptyResult } from "../../components";
import { useAuth, useVideo } from "../../context";

export const History = () => {
  const [showBtn, setShowBtn] = useState(false);
  const {
    videoState: { history },
    videoDispatch,
    clearAllHistory,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const handleClear = () => {
    clearAllHistory(token, videoDispatch);
  };

  useEffect(() => {
    history.length > 0 ? setShowBtn(true) : setShowBtn(false);
  }, [history]);

  return (
    <main className="wrapper p-1">
      <PageHeader
        showBtn={showBtn}
        title="History"
        btnText="Clear History"
        handleClear={handleClear}
      />
      {history.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {history.map((video) => (
            <ExploreCard
              key={video.id}
              slug={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              creatorLogo={video.creatorLogo}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not watched any videos yet." />
      )}
    </main>
  );
};
