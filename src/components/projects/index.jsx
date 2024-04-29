import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { LiveIcon, RightArrowIcon } from "../../icons/";

import { Link, useNavigate } from "react-router-dom";
const Projects = ({ data,darkMode,translations }) => {


  return (
    <div
      id="projects"
      className={darkMode ? styles.background : styles.whitebackground}
    >
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <div className={styles.div1}>
              <div className={styles.texts}>
                <p>#</p>
                <h2>{translations.projects}</h2>
              </div>
              <div className={styles.line}>
                <hr />
              </div>
            </div>
            <Link
              to={"/allprojects"}
              className={`${styles.div2} ${styles.linkHovered}`}
            >
              <h2>
                {translations.viewall} <RightArrowIcon />
              </h2>
            </Link>
          </div>
          <div className={styles.maps}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div className={styles.images}>
                  <img className={styles.img} src={item.photo} alt="" />

                  <hr />
                </div>
                <div className={styles.skills}>
                  <h2>{item.skills}</h2>
                </div>
                <div className={styles.hr}>
                  <hr />
                </div>
                <div>
                  <div className={styles.projectname}>
                    <h2>{item.name}</h2>
                  </div>
                  <div className={styles.projectoverview}>
                    <p>{item.overview}</p>
                  </div>
                </div>
                <div className={styles.live}>
                  <Link target="_blank" to={item.link}>
                    {translations.map} <LiveIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
