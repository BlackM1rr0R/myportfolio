import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Images from "../../assets/images/elchin.png";
import { ArrayIcon } from "../../icons";

const Me = ({ darkMode, translations }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade-in animasyon için sayfa yüklendiğinde state değiştir
    setLoaded(true);
  }, []);

  const handleView = () => {
    window.open("ElchinCV.pdf", "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "ElchinCV.pdf";
    link.setAttribute("download", "ElchinCV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`${darkMode ? styles.darkBackground : styles.lightBackground} ${
        loaded ? styles.fadeIn : ""
      }`}
    >
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.textSection}>
            <div className={styles.titleWrapper}>
              <h2>{translations.name}</h2>
              <h3>Full-Stack Developer</h3>
            </div>
            <p>{translations.overview}</p>

            <div className={styles.buttons}>
              <a
                href="https://wa.me/+4917632329799"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {translations.contact}
              </a>
              <button className={styles.button} onClick={handleView}>
                {translations.viewpdf}
              </button>
              <button className={styles.button} onClick={handleDownload}>
                {translations.downloadpdf}
              </button>
            </div>
          </div>

          <div className={styles.iconWrapper}>
            <ArrayIcon />
          </div>

          <div className={styles.imageSection}>
            <img src={Images} alt="Elchin" className={styles.profileImage} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Me;
