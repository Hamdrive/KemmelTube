import { Grid } from "@mui/material";
import React from "react";
import {
  EmptyResult,
  PageHeader,
  PlaylistModal,
  PlaylistCard,
} from "../../components";
import { useAuth, useVideo } from "../../context";

export const Playlists = () => {
  const {
    videoState: { playlists },
    videoDispatch,
    deleteSinglePlaylist,
  } = useVideo();

  const {
    authState: { token },
    modal,
    setModal,
  } = useAuth();

  const handleModalOpen = () => {
    setModal((s) => !s);
  };

  const handleDeletePlaylist = (playlistId) => {
    deleteSinglePlaylist(token, playlistId, videoDispatch);
  };

  return (
    <main className="wrapper p-1">
      <PageHeader
        showBtn={true}
        btnText="Create Playlist"
        title="Playlists"
        handlerFn={handleModalOpen}
      />
      {playlists.length > 0 ? (
        <Grid
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
          sx={{ gap: 3 }}
          container>
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist?._id}
              slug={playlist?._id}
              title={playlist?.title}
              thumbnail={playlist?.videos[0]?.thumbnail}
              length={playlist?.videos.length}
              location="playlists"
              handleIconAction={() => handleDeletePlaylist(playlist._id)}
            />
          ))}
        </Grid>
      ) : (
        <EmptyResult title="Looks like you have not created any playlists yet." />
      )}
      {modal && (
        <PlaylistModal token={token} modal={modal} setModal={setModal} />
      )}
    </main>
  );
};
