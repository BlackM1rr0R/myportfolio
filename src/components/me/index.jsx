import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Images from "../../assets/images/elchin.png";
import { ArrayIcon } from "../../icons";
import { Link } from "react-router-dom";
const Me = ({ darkMode }) => {
  return (
    <div className={darkMode ? styles.background : styles.whitebackground}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <div>
              <h2>Elchin is a</h2>
              <h3>Front-End Developer</h3>
            </div>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <div className={styles.div}>
              <Link to={"https://wa.me/057487048"}>Contact me!!</Link>
            </div>
          </div>
          <div className={styles.arrayicon}>
            <ArrayIcon />
          </div>
          <div className={styles.controlimages}>
            <div className={styles.fleximages}>
              <img src={Images} alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Me;
