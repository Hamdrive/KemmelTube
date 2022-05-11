import { Grid } from "@mui/material";
import React from "react";
import { EmptyResult, PageHeader, PrivateCard } from "../../components";
import { useAuth, useVideo } from "../../context";

export const Playlists = () => {
    const {
      videoState: { playlists },
    } = useVideo();

    const {
      authState: { token },
    } = useAuth();

    return (
      <main className="wrapper p-1">
        <PageHeader showBtn={true} btnText="Create Playlist" title="Playlists" />
        {playlists.length > 0 ? (
          <Grid
            columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 4 }}
            sx={{ gap: 3 }}
            container>
            {playlists.map((video) => (
              <PrivateCard
                key={video.id}
                slug={video._id}
                title={video.title}
                thumbnail={video.thumbnail}
                creator={video.creator}
                creatorLogo={video.creatorLogo}
                location="playlists"
                handleIconAction={""}
              />
            ))}
          </Grid>
        ) : (
          <EmptyResult title="Looks like you have not created any playlists yet." />
        )}
      </main>
    );
};
