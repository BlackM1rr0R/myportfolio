import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import {
  FigmaIcon,
  FigmaWhiteIcon,
  GitHubIcon,
  GitHubWhiteIcon,
  LinkedinIcon,
  LinkedinWhiteIcon,
  LogoIcon,
} from "../../../icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const dark = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const copyrightText = {
    en: "© Copyright 2023.",
    aze: "© Müəllif hüquqları 2023.",
    de: "© Urheberrecht 2023.",
    ru: "© Авторские права 2023.",
  };

  return (
    <div className={dark ? styles.backgroundBlack : styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.divcontrol1}>
            <div className={styles.div1}>
              <LogoIcon />
              <h2>Elchin</h2>
            </div>
            <div className={styles.front}>
              <h2>
                {language === "en" && "Full-Stack Developer"}
                {language === "aze" && "Full-Stack İnkişafçı"}
                {language === "de" && "Full-Stack Entwickler"}
                {language === "ru" && "Фулл-стек разработчик"}
              </h2>
            </div>
          </div>
          <div className={styles.divcontrol2}>
            <div className={styles.div2}>
              <h2>Media</h2>
            </div>
            <div className={styles.iconcontrol}>
              <Link target="_blank" to={"https://github.com/BlackM1rr0R?tab=repositories"}>
                {dark ? <GitHubWhiteIcon /> : <GitHubIcon />}
              </Link>
              <Link target="_blank" to={"https://wa.me/0507487048"}>
                {dark ? <FigmaWhiteIcon /> : <FigmaIcon />}
              </Link>
              <Link target="_blank" to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}>
                {dark ? <LinkedinWhiteIcon /> : <LinkedinIcon />}
              </Link>
            </div>
          </div>
        </div>
        <h2 className={styles.copyright}>
          {copyrightText[language] || copyrightText["en"]}
        </h2>
      </Wrapper>
    </div>
  );
};

export default Footer;
