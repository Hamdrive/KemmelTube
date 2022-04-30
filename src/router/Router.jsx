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
  Watch,
  WatchLater,
} from "../pages";
import { RedirectAuth } from "./RedirectAuth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/watch/:id" element={<Watch />} />

      <Route element={<RedirectAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<RedirectAuth />}>
        <Route path="/history" element={<History />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export { Router };
