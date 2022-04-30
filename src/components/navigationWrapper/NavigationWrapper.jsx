import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { Topbar } from './Topbar';
import styles from "./NavigationWrapper.module.css"
import logo from "../../assets/KemmelTube.svg";

export const NavigationWrapper = ({children}) => {
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
                {children}
            </div>
          </main>
          <footer></footer>
        </section>
      </section>
    </div>
  );

}
