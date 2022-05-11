import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Error,
  Explore,
  History,
  Home,
  Liked,
  Login,
  Playlists,
  Signup,
  SinglePlaylist,
  Watch,
  WatchLater,
} from "../pages";
import { RedirectAuth } from "./RedirectAuth";
import { RequireAuth } from "./RequireAuth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/watch/:slug" element={<Watch />} />

      <Route element={<RedirectAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="/history" element={<History />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:id" element={<SinglePlaylist />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export { Router };
