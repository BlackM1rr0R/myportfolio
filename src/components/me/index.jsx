import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Images from "../../assets/images/elchin.png";
import { ArrayIcon } from "../../icons";
import { Link } from "react-router-dom";
const Me = ({ darkMode,translations  }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/ElchinCV.pdf';
    link.download = 'ElchinCV.pdf'; // İndirilecek dosyanın adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={darkMode ? styles.background : styles.whitebackground}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <div>
              <h2>{translations.name}</h2>
              <h3>Full-Stack Developer</h3>
            </div>
            <p>
              {translations.overview}
            </p>
            <div className={styles.div}>
              <Link to={"https://wa.me/0507487048"}>{translations.contact}</Link>
              <Link onClick={()=>handleDownload()}>{translations.downloadpdf}</Link>
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
