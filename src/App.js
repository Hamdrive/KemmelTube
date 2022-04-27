import React from "react";
import { Router } from "./router";
import "./index.css";
import { AuthProvider, VideoProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <Router />
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
