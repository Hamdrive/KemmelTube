import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className="wrapper">
      <section className={styles.page__layout}>
        <aside className={styles.sidebar}>
          <nav className={styles.navigation}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/playlists">Playlist</Link></li>
              <li><Link to="/liked">Liked videos</Link></li>
              <li><Link to="/watchLater">Watch later</Link></li>
            </ul>
          </nav>
        </aside>
        <section className={styles.main__section}>
          <header className={styles.header}>
            <div>
              <div className={styles.toggle}>
                <div className={styles.hamburger}></div>
                <div className={styles.logo}></div>
              </div>
              <div className={styles.settings}></div>
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
