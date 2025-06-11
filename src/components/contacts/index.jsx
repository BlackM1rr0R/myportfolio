import React from "react";
import styles from "./index.module.css";
import EmailIcon from "../../assets/images/email.svg";
import { Link } from "react-router-dom";
import Wrapper  from '../UI/wrapper'
const Contacts = ({ darkMode, translations }) => {
  return (
    <section
      id="contacts"
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
      aria-label="Contact Section"
    >
      <Wrapper>

        <header className={styles.header}>
          <span className={styles.hashtag}>#</span>
          <h2 className={styles.title}>{translations.contacts}</h2>
        </header>
        <p className={styles.description}>{translations.contactoverview}</p>
        <div className={styles.contactCard} tabIndex={0} role="region" aria-label="Email Contact">
          <div className={styles.iconWrapper}>
            <img src={EmailIcon} alt="Email Icon" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.messageTitle}>{translations.messagemehere}</h3>
            <a
              className={styles.emailLink}
              href="mailto:abdllyevv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              abdllyevv@gmail.com
            </a>
          </div>
        </div>
      </Wrapper>
   
    </section>
  );
};

export default Contacts;
