import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { RightArrowIcon } from "../../icons/";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="about" className={styles.background}>
      <Wrapper>
        <div className={styles.headertexts}>
          <p>#</p>
          <h2>about</h2>
        </div>
        <div className={styles.about}>
          <h2>Hi, i’m Elcin!</h2>
          <p>
            I'm a front-end developer with a passion for creating user-friendly
            websites. HTML, CSS, JavaScript, React, Bootstrap, etc. I have
            experience and I am constantly trying to improve my skills by
            following the latest trends. I am also a good problem solver and
            value teamwork. I am an excellent communicator, which allows me to
            build strong relationships with clients and colleagues.
          </p>
        </div>
        <div className={styles.salam}>

        <div className={styles.readmore}>
          <Link target="_blank" to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"}>
            Read more <RightArrowIcon />
          </Link>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
