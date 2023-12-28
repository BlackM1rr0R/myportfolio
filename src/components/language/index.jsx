import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";

const Language = () => {
  const [data, setData] = useState([
    {
      name: "Language",
      li1: "•Azerbaijan C2",
      li2: "•Turkish C1",

      li3: "•English B1",

      li4: "•Russian B1",

      li5: "•German B2",
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
                  <li>{item.li1}</li>
                  <li>{item.li2}</li>
                  <li>{item.li3}</li>
                  <li>{item.li4}</li>
                  <li>{item.li5}</li>
                
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
