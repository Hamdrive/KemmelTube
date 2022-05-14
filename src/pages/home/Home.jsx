import React from "react";

import { HeroContainer } from "../../components";
import { useDocumentTitle } from "../../utils";
import { Categories } from "./Categories";

export const Home = () => {

  useDocumentTitle("Home | KemmelTube")

  return (
    <main>
      <div className="wrapper">
        <HeroContainer />
        <Categories />
      </div>
    </main>
  );
};
