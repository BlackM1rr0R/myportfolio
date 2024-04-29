import React, { useEffect, useState } from "react";
import Me from "../../components/me";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import About from "../../components/about";
import Contacts from "../../components/contacts";
import Movies from "../../assets/images/moviebackground.jpg";

import Payments from "../../assets/images/paymentbackground.jpg";
import TicTac from "../../assets/images/tictactoebackground.jpg";
import Language from "../../components/language";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
const Home = () => {
  const [data, setData] = useState([
    {
      photo: `${Movies}`,
  
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Movies-baku",
      overview:
        "A subscription-based online platform with a wide array of movies and TV series.",
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
      photo: `${TicTac}`,
     
      skills: "HTML SCSS JavaScript REACTJS",
      name: "TicTacToe",
      link: "https://tictakgame.vercel.app",
      overview:
        "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
    },
  ]);
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
      <div className={styles.homes}>
        <Wrapper>
        <div className={styles.darkMode}>
          <button
            onClick={handleClicker}
            className={`${styles.darkButton} ${
              dark ? styles.darkButton : styles.lightButton
            }`}
            >
            {dark ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
            </Wrapper>
        <Me darkMode={dark}/>
        <Projects darkMode={dark} data={data} />
        <Skills darkMode={dark}/>
        <Language darkMode={dark}/>
        <About darkMode={dark}/>
        <Contacts darkMode={dark}/>
      </div>
    </div>
  );
};

export default Home;
