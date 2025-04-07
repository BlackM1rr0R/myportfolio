import React, { useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";

const Skills = ({ darkMode, translations }) => {
  const data = useMemo(() => [
    {
      name: "Front-End Developer",
      skills: [
        "HTML", "CSS", "SCSS", "Responsive", "BootStrap5",
        "JavaScript", "TypeScript", "React",
        "React UI", "REST API`s", "NextJS", "Redux","CI/CD","React Native"
      ]
    },
    {
      name: "Backend Developer",
      skills: [
        "Java Core", "Spring Boot", "Spring JWT", "MySQL", "PostgreSQL", "SQL","Swagger",
        "JUnit","Docker", "Postman","Redis","CI/CD","Apache Kafka","Kubernetes","Eureka","Keycloak","Grafana","Elasticsearch"
      ]
    },
    {
      name: "Other",
      skills: [
        "Figma", "IT Ess", "Linux OS", "Windows OS", "Parrot OS",
        "Tails OS", "Network", "Cyber Tool", "Jira", "Zendesk", "AnyDesk", "Git", "GitHub","GitLab"
      ]
    }
  ], []);

  return (
    <div
      id="skills"
      className={darkMode ? styles.background : styles.whitebackground}
    >
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <p>#</p>
            <h2>{translations.skills}</h2>
          </div>
          <div className={styles.skills}>
            {data.map((item, index) => (
              <div key={index} className={styles.border}>
                <div className={styles.front}>
                  <h2>{item.name}</h2>
                </div>
                <ul>
                  {item.skills.map((skill, index) => (
                    <li key={index}>{`•${skill}`}</li>
                  ))}
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
