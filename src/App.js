import React from "react";
import { Router } from "./router";
import "./index.css";
import { AuthProvider, VideoProvider } from "./context";
import { NavigationWrapper } from "./components";

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <NavigationWrapper>
          <Router />
        </NavigationWrapper>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
