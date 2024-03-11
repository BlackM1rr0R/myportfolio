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
import { useSpring, animated } from "react-spring";
const Home = () => {
  const [data, setData] = useState([
    {
      photo: `${Movies}`,
      video:`${MoviesVideo}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Movies-baku",
      overview:
        "A subscription-based online platform with a wide array of movies and TV series.",
      link: "https://movies-baku.vercel.app/",
    },
    {
      photo: `${Payments}`,
      video:`${PaymentVideo}`,
      skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
      name: "Payment Method Mobile App",
      link: "https://mypaymentmethod.vercel.app/",
      overview:
        "A payment method is a way or mechanism used to transfer money or value from one party to another in exchange..",
    },
    {
      photo: `${TicTac}`,
      video:`${TiktakVideo}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "TicTacToe",
      link: "https://tictakgame.vercel.app",
      overview:
        "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
    },
  ]);
  const [backgroundSpring] = useSpring(() => ({
    opacity: 1,
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { duration: 2200 },
  }));

  const [skillsSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  const [projectsSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  const [languageSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  const [aboutSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  const [contactSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2200 },
  }));

  return (
    <div>
      <animated.div style={backgroundSpring}>
        <Me />
      </animated.div>
      <animated.div style={projectsSpring}>
        <Projects data={data} />
      </animated.div>
      <animated.div style={skillsSpring}>
        <Skills />
      </animated.div>
      <animated.div style={languageSpring}>
        <Language />
      </animated.div>
      <animated.div style={aboutSpring}>
        <About />
      </animated.div>
      <animated.div style={contactSpring}>
        <Contacts />
      </animated.div>
    </div>
  );
};

export default Home;
