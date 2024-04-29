import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Azer from "../../assets/images/azer.svg";
import Turk from "../../assets/images/turk.svg";
import English from "../../assets/images/uk.svg";
import Rus from "../../assets/images/rus.svg";
import German from "../../assets/images/german.svg";
const Language = ({ darkMode, translations }) => {
  const [data, setData] = useState([
    {
      flag1: `${Azer}`,
      flag2: `${Turk}`,
      flag3: `${English}`,
      flag4: `${Rus}`,
      flag5: `${German}`,
    },
  ]);
  return (
    <div
      id="skills"
      className={darkMode ? styles.background : styles.whitebackground}
    >
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <p>#</p>
            <h2>{translations.languagem}</h2>
          </div>
          <div className={styles.skills}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div className={styles.front}>
                  <h2>{translations.languagetitle}</h2>
                </div>
                <ul>
                  <div className={styles.div1}>
                    <img src={item.flag1} alt="" />
                    <li>{translations.azerbaijan}</li>
                  </div>
                  <div className={styles.div2}>
                    <li>{translations.turkish}</li>
                    <img src={item.flag2} alt="" />
                  </div>
                  <div className={styles.div3}>
                    <img src={item.flag3} alt="" />
                    <li>{translations.english}</li>
                  </div>
                  <div className={styles.div4}>
                    <li>{translations.russian}</li>
                    <img src={item.flag4} alt="" />
                  </div>
                  <div className={styles.div5}>
                    <img src={item.flag5} alt="" />
                    <li>{translations.german}</li>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Language;
