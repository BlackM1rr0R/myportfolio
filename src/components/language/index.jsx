import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { AzerIcon } from "../../icons";
import Azer from "../../assets/images/azer.svg";
import Turk from "../../assets/images/turk.svg";
import English from "../../assets/images/uk.svg";
import Rus from '../../assets/images/rus.svg'
import German from '../../assets/images/german.svg'
const Language = () => {
  const [data, setData] = useState([
    {
      name: "Language",
      li1: "•Azerbaijan C2",
      flag1: `${Azer}`,
      li2: "•Turkish C1",
      flag2: `${Turk}`,
      li3: "•English B1",
      flag3: `${English}`,
      li4: "•Russian B1",
      flag4:`${Rus}`,
      li5: "•German B2",
      flag5:`${German}`
    },
  ]);
  return (
    <div id="skills" className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <p>#</p>
            <h2>language</h2>
          </div>
          <div className={styles.skills}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div className={styles.front}>
                  <h2>{item.name}</h2>
                </div>
                <ul>
                  <div className={styles.div1}>
                    <img src={item.flag1} alt="" />
                    <li>{item.li1}</li>
                  </div>
                  <div className={styles.div2}>
                    <li>{item.li2}</li>
                    <img src={item.flag2} alt="" />
                  </div>
                  <div className={styles.div3}>
                    <img src={item.flag3} alt="" />
                    <li>{item.li3}</li>
                  </div>
                  <div className={styles.div4}>
                  <li>{item.li4}</li>
                <img src={item.flag4} alt="" />
                  </div>
                  <div className={styles.div5}>
                <img src={item.flag5} alt="" />
                  <li>{item.li5}</li>
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
