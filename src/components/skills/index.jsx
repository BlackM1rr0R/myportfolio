// Skills.jsx
import React, { useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";

const Skills = ({ darkMode, translations }) => {
  const data = useMemo(() => [
    {
      name: "Front-End Developer",
      skills: [
        "HTML", "CSS", "SCSS", "Responsive Design", "Bootstrap 5",
        "JavaScript", "TypeScript", "React", "Axios", "Form Handling",
        "React UI Libraries", "REST APIs", "NextJS", "Redux", "CI/CD", "React Native"
      ],
    },
    {
      name: "Backend Developer",
      skills: [
        "Java Core", "Spring Boot", "Spring Security (JWT)", "MySQL", "PostgreSQL", "SQL",
        "Swagger", "JUnit", "Docker", "Postman", "Redis", "CI/CD",
        "Apache Kafka", "Kubernetes", "Eureka", "Keycloak", "Grafana", "Elasticsearch"
      ],
    },
    {
      name: "Other Tools & Skills",
      skills: [
        "Figma", "IT Essentials", "Linux OS", "Windows OS", "Parrot OS",
        "Tails OS", "Networking", "Cybersecurity Tools", "Jira", "Zendesk",
        "AnyDesk", "Git", "GitHub", "GitLab"
      ],
    },
  ], []);

  return (
    <section
      id="skills"
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
    >
      <Wrapper>
        <header className={styles.header}>
          <span className={styles.hash}>#</span>
          <h2 className={styles.title}>{translations.skills}</h2>
        </header>

        <div className={styles.grid}>
          {data.map(({ name, skills }, idx) => (
            <article key={idx} className={styles.card} tabIndex={0}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <ul className={styles.skillList}>
                {skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    <span className={styles.bullet} aria-hidden="true">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
