import React from "react";
import { Router } from "./router";
import "./index.css";
import { AuthProvider, VideoProvider } from "./context";
import { NavigationWrapper } from "./components";
import { WindowScrollToTop } from "./utils";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <NavigationWrapper>
          <WindowScrollToTop />
          <Router />
          <ToastContainer />
        </NavigationWrapper>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
