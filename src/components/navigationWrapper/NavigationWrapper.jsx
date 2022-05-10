import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import styles from "./NavigationWrapper.module.css";
import logo from "../../assets/KemmelTube.svg";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../../context/auth-context/server-requests";
import { useAuth } from "../../context";

export const NavigationWrapper = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selected, setSelected] = useState("home");

  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const handleLogoutUser = async () => {
    try {
      navigate("/", {
        replace: true,
      });
      await handleLogout(authDispatch);
    } catch (error) {
      throw new Error(error);
    }
  };

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
                handleLogout={() => handleLogoutUser()}
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
