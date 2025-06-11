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
import NoteBackground from "../../assets/images/notebackground.avif";
import Movies from '../../assets/images/movies.png'
import Khuran from "../../assets/images/khuranbackground.jpg";
import TicTac from "../../assets/images/tictactoebackground.jpg";
import RSP from "../../assets/images/rockbackground.jpg";
import Sakarya from "../../assets/images/emergency.jpg";
import ChinaGames from "../../assets/images/chinagames.png";
import NewsTR from "../../assets/images/newstrbackground.jpg";
import Maglos from "../../assets/images/financebackground.jpg";
import Payments from "../../assets/images/paymentbackground.jpg";
import FootBall from "../../assets/images/footballbackground.jpg";
import JS1 from "../../assets/images/js2.jpeg";
import Bitcoin from "../../assets/images/bitcoinbackground.jpg";
import Booking from "../../assets/images/booking3.png";
import NextCalcPP from "../../assets/images/calcphoto.jpg";
import Perfume from '../../assets/images/perfume.png';
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import translations from "./text.json";
import { changeLanguage, toggleDarkMode } from "../../redux/actions";

const Home = () => {
  const language = useSelector((state) => state.language);
  const dark = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const data = useMemo(() => [
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
      photo: InterViewer,
      skills: "HTML SCSS JavaScript REACTJS Redux Spring Boot",
      name: "German Course Platform",
      link: "https://deutscheakademiebaku.az/",
      overview: translations[language].interview,
    }, {
        photo: `${Skalioz}`,
        skills: "HTML SCSS REACTJS REST API`s Router`s SPRING BOOT",
        name: "Hospital Blog Website",
        overview:
          "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
        link: "https://sakaryasaglik.vercel.app/",
      },
      {
        photo: `${Perfume}`,
        skills: "HTML SCSS JavaScript REACTJS REDUX BACKEND",
        name: "Perfume Global Website",
        link: "https://perfumenewwebsite.vercel.app/",
        overview:
          "We offer a curated selection of the finest fragrances from renowned brands and independent artisans.."
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
        photo: `${Movies}`,
        skills: "HTML SCSS REACTJS REST API`s Router`s",
        name: "Movies-baku",
        overview: `${translations[language].moviesbaku}`,
        link: "https://movies-baku.vercel.app/",
      },
      {
        photo: `${Payments}`,
        skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
        name: "Payment Method Mobile App",
        link: "https://mypaymentmethod.vercel.app/",
        overview:
          "A payment method is a way or mechanism used to transfer money or value from one party to another in exchange..",
      },
      {
        photo: `${NextCalcPP}`,
        skills: "HTML SCSS NextJS Responsive",
        name: "Calculator with NextJS",
        link: "https://calcwithnext.vercel.app/",
        overview:
          " These are simple calculators used for arithmetic operations like and only with JS ",
      },
      {
        photo: `${NoteBackground}`,
        skills: "HTML SCSS REACTJS Responsive",
        name: "Notes App Website",
        link: "https://noteappdev.vercel.app/",
        overview:
          " A note-taking app is like a digital extension of your memory, a virtual notebook that.. ",
      },
      {
        photo: `${Bitcoin}`,
        skills: "HTML SCSS REACTJS REST API`s Router`s",
        name: "Crypto-Exchange Website",
        link: "https://crypto-api.vercel.app/",
        overview:
          " These platforms play a crucial role in the cryptocurrency ecosystem, providing users with a marketplace where.. ",
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
        photo: `${JS1}`,
        skills: "HTML JavaScript",
        name: "JavaScript-Lektionen",
        link: "https://github.com/7u4bgr/jsagain",
        overview:
          "JavaScript is a high-level, versatile programming language primarily known for its use in web development..",
      },
      {
        photo: `${TicTac}`,
        skills: "HTML SCSS JavaScript REACTJS",
        name: "TicTacToe",
        link: "https://tictakgame.vercel.app",
        overview:
          "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
      },
      {
        photo: `${Khuran}`,
        skills: "HTML SCSS REACTJS REST API`s Router`s",
        name: "Khuran Website",
        overview:
          "Provides information about the Quranic text, translations, interpretations (Tafsirs), and audio recitation.",
        link: "https://khuran.vercel.app/",
      },
      {
        photo: `${FootBall}`,
        skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
        name: "Football Mobile App",
        link: "https://football-baku.vercel.app/",
        overview:
          "Are you a passionate football fan? Look no further – our Football App is your go-to..",
      },
      {
        photo: `${RSP}`,
        skills: "HTML SCSS JavaScript REACTJS",
        name: "Rock Scissors Paper",
        link: "https://rockpaperscissorsgames.vercel.app/",
        overview:
          "Rock-paper-scissors is a simple hand game usually played between two people, where each player simultaneously..",
      },
      {
        photo: `${Sakarya}`,
        skills: "HTML SCSS JavaScript REACTJS Responsive",
        name: "Sakarya Evde Sağlık Hizmeti",
        link: "https://sakaryaevdesaglik.vercel.app/",
        overview:
          "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
      },

      {
        photo: `${ChinaGames}`,
        skills: "HTML SCSS JavaScript Responsive",
        name: "China Games",
        link: "https://chinagames.vercel.app/",
        overview:
          "JavaScript games have gained immense popularity due to the language's versatility and its ability to inter..",
      },
      {
        photo: `${NewsTR}`,
        skills: "HTML SCSS JavaScript ReactJS API`s",
        name: "NewsTR",
        link: "https://news-tr.vercel.app/",
        overview:
          "News information serves as a cornerstone of informed societies, providing citizens..",
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
                className={`${styles.darkButton} ${
                  dark ? styles.darkButton : styles.lightButton
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
