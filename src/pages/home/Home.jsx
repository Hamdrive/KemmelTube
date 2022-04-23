import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/KemmelTube.svg";
import styles from "./Home.module.css";
import { HeroContainer, Navbar, Topbar } from "../../components";

export const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="wrapper">
      <section className={styles.page__layout}>
        <aside
          className={`${showSidebar && styles.sidebar__visible} ${
            styles.sidebar
          }`}
        >
          <div className={styles.aside__logo}>
            <img src={logo} alt="logo" />
          </div>
          <Navbar />
        </aside>
        <section className={styles.main__section}>
          <header className={styles.header}>
            <div>
              <Topbar setShowSidebar={setShowSidebar} />
            </div>
          </header>
          <main>
            <div className="wrapper">
              <HeroContainer />
              <div></div>
            </div>
          </main>
          <footer></footer>
        </section>
      </section>
    </div>
  );
};
