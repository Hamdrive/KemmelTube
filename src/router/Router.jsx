import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Error,
  History,
  Home,
  Login,
  Playlists,
  Signup,
  Watch,
  WatchLater,
} from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="history" element={<History />} />
      <Route path="playlists" element={<Playlists />} />
      <Route path="watch/:id" element={<Watch />} />
      <Route path="watchLater" element={<WatchLater />} />
      <Route path="liked" element={<Liked />} />
    </Routes>
  );
}
