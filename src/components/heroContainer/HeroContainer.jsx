import React from "react";
import HeroImage from "../../assets/HeroImage.svg";
import logo from "../../assets/KemmelTube.svg";
import styles from "./HeroContainer.module.css";

export const HeroContainer = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={HeroImage} alt="Hero Poster" />
      <div className={styles.heroText}>
        <img src={logo} alt="KemmelTube logo" />
        <div className={styles.heroTextTagline}>
          Video Library for F1 enthusiasts
        </div>
      </div>
    </div>
  );
};
