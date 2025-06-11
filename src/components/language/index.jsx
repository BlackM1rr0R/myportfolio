import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";

import Azer from "../../assets/images/azer.svg";
import Turk from "../../assets/images/turk.svg";
import English from "../../assets/images/uk.svg";
import Rus from "../../assets/images/rus.svg";
import German from "../../assets/images/german.svg";

const languages = [
  { code: "az", labelKey: "azerbaijan", flag: Azer },
  { code: "tr", labelKey: "turkish", flag: Turk },
  { code: "en", labelKey: "english", flag: English },
  { code: "ru", labelKey: "russian", flag: Rus },
  { code: "de", labelKey: "german", flag: German },
];

const Language = ({ darkMode, translations }) => {
  return (
    <section
      id="languages"
      className={`${styles.languageSection} ${
        darkMode ? styles.dark : styles.light
      }`}
      aria-label="Languages I speak"
    >
      <Wrapper>
        <header className={styles.header}>
          <span aria-hidden="true" className={styles.hashTag}>
            #
          </span>
          <h2 className={styles.title}>{translations.languagem}</h2>
        </header>

        <div className={styles.cardsContainer}>
          {languages.map(({ flag, labelKey, code }, index) => (
            <div
              key={code}
              className={`${styles.card} ${
                darkMode ? styles.cardDark : styles.cardLight
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={styles.cardTitle}>{translations[labelKey]}</h3>
              <div className={styles.languageItem}>
                <img
                  src={flag}
                  alt={`${translations[labelKey]} flag`}
                  className={styles.flagIcon}
                  loading="lazy"
                />
                <span>{translations[labelKey]}</span>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Language;
