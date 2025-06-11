import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import {
  FigmaIcon,
  GitHubIcon,
  LinkedinIcon,
  FigmaWhiteIcon,
  GitHubWhiteIcon,
  LinkedinWhiteIcon,
  LogoIcon,
} from "../../../icons";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";

const Header = () => {
  const dark = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  return (
    <header className={dark ? styles.headerDark : styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logoLink} aria-label="Go to homepage">
            <LogoIcon className={styles.logoIcon} />
            <h1 className={styles.logoText}>Elchin</h1>
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <a href="#projects" className={styles.navLink}>
                {language === "en"
                  ? "Projects"
                  : language === "aze"
                  ? "Layihələr"
                  : language === "de"
                  ? "Projekte"
                  : "Проекты"}
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink}>
                {language === "en"
                  ? "Skills"
                  : language === "aze"
                  ? "Bacarıqlar"
                  : language === "de"
                  ? "Fähigkeiten"
                  : "Навыки"}
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                {language === "en"
                  ? "About Me"
                  : language === "aze"
                  ? "Haqqımda"
                  : language === "de"
                  ? "Über mich"
                  : "Обо мне"}
              </a>
            </li>
            <li>
              <a href="#contacts" className={styles.navLink}>
                {language === "en"
                  ? "Contacts"
                  : language === "aze"
                  ? "Əlaqə"
                  : language === "de"
                  ? "Kontakte"
                  : "Контакты"}
              </a>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/BlackM1rr0R?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.iconLink}
            >
              {dark ? <GitHubWhiteIcon /> : <GitHubIcon />}
            </a>
            <a
              href="https://wa.me/0507487048"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.iconLink}
            >
              {dark ? <FigmaWhiteIcon /> : <FigmaIcon />}
            </a>
            <a
              href="https://www.linkedin.com/in/elcin-abdullayev-583861229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.iconLink}
            >
              {dark ? <LinkedinWhiteIcon /> : <LinkedinIcon />}
            </a>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
