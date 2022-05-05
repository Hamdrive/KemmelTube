import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import styles from "./NavigationWrapper.module.css";
import logo from "../../assets/KemmelTube.svg";
import { Link } from "react-router-dom";

export const NavigationWrapper = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selected, setSelected] = useState("home");

  return (
    <div className="wrapper">
      <section className={styles.page__layout}>
        <aside
          className={`${showSidebar && styles.sidebar__visible} ${
            styles.sidebar
          }`}>
          <div className={styles.aside__logo}>
            <Link to="/" onClick={() => setSelected("home")}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Navbar selected={selected} setSelected={setSelected} />
        </aside>
        <section className={styles.main__section}>
          <header className={styles.header}>
            <div>
              <Topbar
                setShowSidebar={setShowSidebar}
                setSelected={setSelected}
              />
            </div>
          </header>
          <main>
            <div className="wrapper">{children}</div>
          </main>
          <footer></footer>
        </section>
      </section>
    </div>
  );
};
