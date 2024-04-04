import React, { useState } from "react";
import Me from "../../components/me";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import About from "../../components/about";
import Contacts from "../../components/contacts";
import Movies from "../../assets/images/moviebackground.jpg";
import MoviesVideo from "../../assets/images/movienew.mp4";
import PaymentVideo from "../../assets/images/paymentnew.mp4";
import TiktakVideo from "../../assets/images/tiktak.mp4";
import Payments from "../../assets/images/paymentbackground.jpg";
import TicTac from "../../assets/images/tictactoebackground.jpg";
import Language from "../../components/language";
import styles from "./index.module.css"
const Home = () => {
  const [data, setData] = useState([
    {
      photo: `${Movies}`,
      video: `${MoviesVideo}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Movies-baku",
      overview:
        "A subscription-based online platform with a wide array of movies and TV series.",
      link: "https://movies-baku.vercel.app/",
    },
    {
      photo: `${Payments}`,
      video: `${PaymentVideo}`,
      skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
      name: "Payment Method Mobile App",
      link: "https://mypaymentmethod.vercel.app/",
      overview:
        "A payment method is a way or mechanism used to transfer money or value from one party to another in exchange..",
    },
    {
      photo: `${TicTac}`,
      video: `${TiktakVideo}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "TicTacToe",
      link: "https://tictakgame.vercel.app",
      overview:
        "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
    },
  ]);

  return (
    <div className={styles.homes}>
      <Me />
      <Projects data={data} />
      <Skills />
      <Language />
      <About />
      <Contacts />
    </div>
  );
};

export default Home;
