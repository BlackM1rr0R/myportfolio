import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
const Skills = () => {
  const [data, setData] = useState([
    {
      name: "Front-End Developer",
      li1: "•HTML",
      li2: "•CSS",
      li3: "•SCSS",
      li4: "•Responsive",
      li5: "•BootStrap5",
      li6: "•JavaScript",
      li7: "•TypeScript",
      li8: "•Git",
      li9: "•GitHub",
      li10: "•React",
      li11: "•React UI",
      li12: "•REST API`s",
    },
    {
        name:"CyberSecurity",
        li1: "•PAM360",
        li2: "•KempLB",
        li3: "•Symantec",
        li4: "•EDR",
        li5: "•XDR",
        li6: "•Bitrix24",
        li7: "•Nessus Scan",
    },
    {
        name:"Other",
        li1: "•Figma",
        li2: "•IT Essential",
        li3: "•Linux OS",
        li4: "•Windows 2007",
        li5: "•Parrot OS",
        li6: "•Tails OS",
        li7: "•Basic Network",
        li8:"•Cyber Tool",
        li9:"•Jira",
        li10:"•Zendesk",
        li11:"•AnyDesk"
    },
  ]);
  return (
    <div id="skills" className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <p>#</p>
            <h2>skills</h2>
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
                  <li>{item.li6}</li>
                  <li>{item.li7}</li>
                  <li>{item.li8}</li>
                  <li>{item.li9}</li>
                  <li>{item.li10}</li>
                  <li>{item.li11}</li>
                  <li>{item.li12}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Skills;
