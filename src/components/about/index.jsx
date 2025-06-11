import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { RightArrowIcon } from "../../icons/";
import { Link } from "react-router-dom";

const About = ({ darkMode, translations }) => {
  return (
    <section
      id="about"
      className={`${styles.aboutSection} ${darkMode ? styles.dark : styles.light}`}
      aria-label="About Section"
    >
      <Wrapper>
        <header className={styles.header}>
          <span className={styles.sectionNumber}>01.</span>
          <h2 className={styles.title}>{translations.about}</h2>
          <div className={styles.underline}></div>
        </header>

        <article className={styles.content}>
          <h3 className={styles.subtitle}>{translations.abouttitle}</h3>
          <p className={styles.description}>{translations.aboutme}</p>
        </article>

        <div className={styles.cta}>
          <Link
            className={styles.readMoreBtn}
            target="_blank"
            to="https://www.linkedin.com/in/elcin-abdullayev-583861229/"
            rel="noopener noreferrer"
          >
            {translations.readmore}
            <RightArrowIcon className={styles.icon} />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
