import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/KemmelTube.svg";
import styles from "./Home.module.css";
import { Navbar, Topbar } from "../../components";

export const Home = () => {
  return (
    <div className="wrapper">
      <section className={styles.page__layout}>
        <aside className={styles.sidebar}>
          <div className={styles.aside__logo}>
            <img src={logo} alt="logo" />
          </div>
          <Navbar />
        </aside>
        <section className={styles.main__section}>
          <header className={styles.header}>
            <div>
              <div className={styles.toggle}>
                <div className={styles.hamburger}></div>
                <div className={styles.header__logo}></div>
              </div>
                <Topbar />
            </div>
          </header>
          <main>
            <div className="wrapper"></div>
          </main>
          <footer></footer>
        </section>
      </section>
    </div>
  );
};
