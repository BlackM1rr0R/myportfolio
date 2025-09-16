import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Me from "../../components/me";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import About from "../../components/about";
import Contacts from "../../components/contacts";
import Language from "../../components/language";
import Skalioz from "../../assets/images/skalioz.png";
import InterViewer from '../../assets/images/d1.png';
import Fatima from '../../assets/images/fatima.png'

import Maglos from "../../assets/images/financebackground.jpg";

import Booking from "../../assets/images/booking3.png";

import Perfume from '../../assets/images/perfume.png';
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import translations from "./text.json";
import { changeLanguage, toggleDarkMode } from "../../redux/actions";
import FormDom from '../../assets/images/formdom.png'
const Home = () => {
  const language = useSelector((state) => state.language);
  const dark = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const data = useMemo(() => [
    {
      photo: FormDom,
      skills: "HTML SCSS REACTJS REST API`s Router`s SPRING BOOT",
      name: "FormDom Form Website",
      overview:
        "Here, you can freely share your thoughts and participate in discussions by posting anonymously.",
      link: "https://formdom.pro/",
    },
    {
      photo: InterViewer,
      skills: "HTML SCSS JavaScript REACTJS Redux Spring Boot",
      name: "German Course Platform",
      link: "https://deutscheakademiebaku.az/",
      overview: translations[language].interview,
    },
    {
      photo: Skalioz,
      skills: "HTML SCSS REACTJS REST API`s Router`s SPRING BOOT",
      name: "Hospital Blog Website",
      overview:
        "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
      link: "https://eternalsaglik.com/",
    },
    {
      photo: Perfume,
      skills: "HTML SCSS REACTJS Router`s Spring Boot",
      name: "Perfume-Website",
      link: "https://ambrette.istanbul/",
      overview: translations[language].booking,
    },
    {
      photo: `${Fatima}`,
      skills: "HTML SCSS JavaScript REACTJS REDUX BACKEND",
      name: "UI/UX Blog Website",
      link: "https://fatimastudioweb.vercel.app/",
      overview:
        "UI/UX designer passionate about creating seamless digital experiences that connect people with technology."
    },
    {
      photo: `${Booking}`,
      skills: "HTML SCSS REACTJS Router`s",
      name: "Booking-Reservation",
      link: "https://doctor-baku.vercel.app/",
      overview:
        "  Booking and reservation refer to the process of securing a spot or arrangement for a service, accommodation.. ",
    },
 
    {
      photo: `${Maglos}`,
      skills: "HTML SCSS JavaScript ReactJS API`s",
      name: "Maglos Finance",
      link: "https://maglos.vercel.app/",
      overview:
        "Finance is a broad term encompassing the management of money and assets. It..",
    },
  ], [language]);

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      container.style.transition = "opacity 0.5s ease-in-out";
      container.style.opacity = dark ? "0.8" : "1";
    }
  }, [dark]);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleChangeLanguage = (lng) => {
    dispatch(changeLanguage(lng));
  };

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
                onClick={handleDarkModeToggle}
                className={`${styles.darkButton} ${dark ? styles.darkButton : styles.lightButton
                  }`}
              >
                {dark
                  ? translations[language].darkmode
                  : translations[language].lightmode}
              </button>
            </div>

            <select
              onChange={(e) => handleChangeLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="aze">Azərbaycanca</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </Wrapper>

        <Me translations={translations[language]} darkMode={dark} />
        <Projects translations={translations[language]} darkMode={dark} data={data} />
        <Skills translations={translations[language]} darkMode={dark} />
        <Language translations={translations[language]} darkMode={dark} />
        <About translations={translations[language]} darkMode={dark} />
        <Contacts translations={translations[language]} darkMode={dark} />

      </div>
    </div>
  );
};

export default Home;
