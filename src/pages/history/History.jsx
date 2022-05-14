import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { PageHeader, EmptyResult, PrivateCard } from "../../components";
import { useAuth, useVideo } from "../../context";
import { useDocumentTitle } from "../../utils";

export const History = () => {
  const [showBtn, setShowBtn] = useState(false);
  const {
    videoState: { history },
    videoDispatch,
    deleteFromHistory,
    clearAllHistory,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  useDocumentTitle("History | KemmelTube")

  const handleClear = () => {
    clearAllHistory(token, videoDispatch);
  };

  const handleDeleteFromHistory = (videoId) => {
    deleteFromHistory(token, videoId, videoDispatch);
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
        handlerFn={handleClear}
      />
      {history.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {history.map((video) => (
            <PrivateCard
              key={video.id}
              slug={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              creatorLogo={video.creatorLogo}
              location="history"
              handleIconAction={() => handleDeleteFromHistory(video._id)}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not watched any videos yet." />
      )}
    </main>
  );
};
