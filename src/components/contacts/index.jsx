import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Email from "../../assets/images/email.svg";
import { Link } from "react-router-dom";
const Contacts = ({ darkMode }) => {
  return (
    <div
      id="contacts"
      className={darkMode ? styles.background : styles.whitebackground}
    >
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <p>#</p>
            <h2>contacts</h2>
          </div>
          <div className={styles.overview}>
            <p>
              I am interested in freelance and office work opportunities.
              However, if you have any other requests or questions, please feel
              free to contact me
            </p>
          </div>
          <div className={styles.flexs}>
            <div className={styles.mail}>
              <div>
                <div className={styles.texts}>
                  <h2>Message me here</h2>
                </div>
                <div className={styles.icontexts}>
                  <img src={Email} alt="" />
                  <a href="mailto:abdllyevv@gmail.com">abdllyevv@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contacts;
