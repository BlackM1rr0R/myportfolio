import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { RightArrowIcon } from "../../icons/";
import { Link } from "react-router-dom";
const About = ({ darkMode, translations }) => {
  return (
    <div
      id="about"
      className={darkMode ? styles.background : styles.whitebackground}
    >
      <Wrapper>
        <div className={styles.headertexts}>
          <p>#</p>
          <h2>{translations.about}</h2>
        </div>
        <div className={styles.about}>
          <h2>{translations.abouttitle}</h2>
          <p>{translations.aboutme}</p>
        </div>
        <div className={styles.salam}>
          <div className={styles.readmore}>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}
            >
              {translations.readmore} <RightArrowIcon />
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
