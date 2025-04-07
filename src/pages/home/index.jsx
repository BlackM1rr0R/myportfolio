import React, { useEffect, useMemo, useState } from "react";
import Me from "../../components/me";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import About from "../../components/about";
import Contacts from "../../components/contacts";
import Skalioz from "../../assets/images/skalioz.png";
import Booking from "../../assets/images/booking3.png";
import Language from "../../components/language";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { useSelector, useDispatch } from "react-redux";
import translations from "./text.json";
import { changeLanguage } from "../../redux/actions.js";
import InterViewer from '../../assets/images/d1.png'
import Perfume from '../../assets/images/perfume.png'
const Home = () => {
  const savedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(savedLanguage || "en");
  const dispatch = useDispatch();

  const handleChangeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
    dispatch(changeLanguage(lng));
  };
  const data = useMemo(()=>[
 
    {
      photo: `${Skalioz}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s JAVA SPRING BOOT",
      name: "Hospital Blog Website",
      overview:
        "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
      link: "https://sakaryasaglik.vercel.app/",
    },
    {
      photo: `${Perfume}`,

      skills: "HTML SCSS REACTJS Router`s Spring Boot",
      name: "Perfume-Website",
      link: "https://ambrette.istanbul/",
      overview: `${translations[language].booking}`,
    },
    {
      photo: `${InterViewer}`,

      skills: "HTML SCSS JavaScript REACTJS Redux Spring Boot",
      name: "German Course Platform",
      link: "https://deutscheakademiebaku.az/",
      overview: `${translations[language].interview}`,
    },
  ],[]);
  const handleClicker = () => {
    setDark((prevDark) => !prevDark);
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      container.style.transition = "opacity 0.5s ease-in-out";
      container.style.opacity = dark ? "0.8" : "1";
    }
  }, [dark]);
  return (
    <div
      id="container"
      className={dark ? styles.backgroundblack : styles.background}
    >
      <div className={styles.homes}>
        <Wrapper>
          <div className={styles.modeandlang}>
            <div className={styles.darkMode}>
              <button
                onClick={handleClicker}
                className={`${styles.darkButton} ${
                  dark ? styles.darkButton : styles.lightButton
                }`}
              >
                {dark
                  ? `${translations[language].darkmode}`
                  : `${translations[language].lightmode}`}
              </button>
            </div>

            <select
              onChange={(e) => handleChangeLanguage(e.target.value)}
              value={language}
              name=""
              id=""
            >
              <option value="en">English</option>
              <option value="aze">Azərbaycanca</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </Wrapper>

        <Me translations={translations[language]} darkMode={dark} />
        <Projects
          translations={translations[language]}
          darkMode={dark}
          data={data}
        />
        <Skills translations={translations[language]} darkMode={dark} />
        <Language translations={translations[language]} darkMode={dark} />
        <About translations={translations[language]} darkMode={dark} />
        <Contacts translations={translations[language]} darkMode={dark} />
      </div>
    </div>
  );
};

export default Home;
