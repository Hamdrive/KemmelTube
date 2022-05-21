import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmptyResult, PageHeader, PrivateCard } from "../../components";
import { useAuth, useVideo } from "../../context";
import { useDocumentTitle } from "../../utils";

export const SinglePlaylist = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState("");
  const {
    videoState: { playlists },
    videoDispatch,
    getSinglePlaylist,
    deleteVideoFromPlaylist,
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const { slug } = useParams();

  useDocumentTitle(`Playlist : ${currentPlaylist?.title} | KemmelTube`);

  const handleDeleteVideoFromPlaylist = (videoId) => {
    deleteVideoFromPlaylist(token, videoId, playlists, slug, videoDispatch);
  };

  useEffect(() => {
    (async () => {
      const getcurrentPlaylist = await getSinglePlaylist(token, slug);
      setCurrentPlaylist(getcurrentPlaylist);
    })();
  }, [playlists]);

  return (
    <main className="wrapper p-1">
      <PageHeader title={currentPlaylist?.title} />
      {currentPlaylist?.videos?.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {currentPlaylist?.videos?.map((video) => (
            <PrivateCard
              key={video?.id}
              slug={video?._id}
              title={video?.title}
              thumbnail={video?.thumbnail}
              creator={video?.creator}
              creatorLogo={video?.creatorLogo}
              location="playlist"
              handleIconAction={() => handleDeleteVideoFromPlaylist(video?._id)}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not added any videos to this playlist yet." />
      )}
    </main>
  );
};
