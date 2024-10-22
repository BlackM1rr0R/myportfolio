import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Movies from "../../assets/images/moviebackground.jpg";
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
import { LiveIcon } from "../../icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions.js";
import translations from "../home/text.json";
import NoteBackground from "../../assets/images/notebackground.avif";
import Perfume from '../../assets/images/perfume.png'
const ViewProjects = () => {
  const savedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(savedLanguage || "en");
  const dispatch = useDispatch();
  const handleChangeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
    dispatch(changeLanguage(lng));
  };
  const [hover, setHover] = useState(true);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverExit = () => {
    setHover(false);
  };

  const data = useMemo(
    () => [
      {
        photo: `${Movies}`,
        skills: "HTML SCSS REACTJS REST API`s Router`s",
        name: "Movies-baku",
        overview:
          "A subscription-based online platform with a wide array of movies and TV series.",
        link: "https://movies-baku.vercel.app/",
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
          " These are simple calculators used for arithmetic operations like... ",
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
    ],
    []
  );
  const [dark, setDark] = useState(localStorage.getItem("darkMode") === "true");
  const handleClicker = () => {
    setDark((prevDark) => !prevDark);
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };
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
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.controlDarkMode}>
            <div className={styles.texts}>
              <p>/</p>
              <h2>{translations[language].projects}</h2>
            </div>
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
                className={styles.select}
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
          </div>

          <div className={styles.allmyprojects}>
            <p>{translations[language].listmyprojects}</p>
          </div>
          <div className={styles.maps}>
            {data?.map((item, index) => (
              <div key={index} className={styles.border}>
                <div
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverExit}
                  className={styles.images}
                >
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
                    {translations[language].map} <LiveIcon />
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

export default ViewProjects;
