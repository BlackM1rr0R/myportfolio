import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import { FigmaIcon, FigmaWhiteIcon, GitHubIcon, GitHubWhiteIcon, LinkedinIcon, LinkedinWhiteIcon, LogoIcon } from "../../../icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.divcontrol1}>
            <div className={styles.div1}>
              <LogoIcon />
              <h2>Elchin</h2>
            </div>
            <div className={styles.front}>
              <h2>Full-Stack Developer</h2>
            </div>
          </div>
          <div className={styles.divcontrol2}>
            <div className={styles.div2}>
              <h2>Media</h2>
            </div>
            <div className={styles.iconcontrol}>
            <Link target="_blank" to={"https://github.com/BlackM1rr0R?tab=repositories"}>
              <GitHubWhiteIcon/>
            </Link>
            <Link
              target="_blank"
              to={
                "https://wa.me/0507487048"
              }
            >
             <FigmaWhiteIcon/>
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}
            >
              <LinkedinWhiteIcon/>
            </Link>
            </div>
          </div>
        </div>
        <h2 className={styles.copyright}>© Copyright 2023.</h2>
      </Wrapper>
    </div>
  );
};

export default Footer;
