import React from "react";
import styles from "./index.module.css";
import { FigmaIcon, GitHubIcon, LinkedinIcon, LogoIcon } from "../../../icons";
import Wrapper from "../../UI/wrapper";
import Linkedin from "../../../assets/images/linkedin.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <Link to={"/"} className={styles.texts}>
            <LogoIcon />
            <h2>Elchin</h2>
          </Link>
          <div className={styles.contacts}>
            <Link target="_blank" to={"https://github.com/7u4bgr"}>
              <GitHubIcon />
            </Link>
            <Link
              target="_blank"
              to={
                "https://wa.me/0507487048"
              }
            >
              <FigmaIcon />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}
            >
              <LinkedinIcon/>
            </Link>
          </div>
          <div className={styles.about}>
            <div>
              <p>#</p>
              <a href="#projects">project</a>
            </div>
            <div>
              <p>#</p>
              <a href="#skills">skills</a>
            </div>
            <div>
              <p>#</p>
              <a href="#about">about-me</a>
            </div>
            <div>
              <p>#</p>
              <a href="#contacts">contacts</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
