import React from "react";

import { HeroContainer } from "../../components";
import { Categories } from "./Categories";

export const Home = () => {
  return (
    <main>
      <div className="wrapper">
        <HeroContainer />
        <Categories />
      </div>
    </main>
  );
};
