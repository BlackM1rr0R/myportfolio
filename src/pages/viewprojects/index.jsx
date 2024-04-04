import React, { useState } from "react";
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
import Payments from '../../assets/images/paymentbackground.jpg'
import FootBall from '../../assets/images/footballbackground.jpg'
import JS1 from '../../assets/images/js2.jpeg'
import Bitcoin from '../../assets/images/bitcoinbackground.jpg'
import Booking from '../../assets/images/booking3.png'
import { LiveIcon } from "../../icons";
import { Link } from "react-router-dom";
import MovieVideo from '../../assets/images/movienew.mp4'
import PaymentVideo from '../../assets/images/paymentnew.mp4'
import CryptoVideo from '../../assets/images/cryptovideo.mp4'
import DoctorVideo from '../../assets/images/doctorvideo.mp4'
import JsVideo from '../../assets/images/jsvideo.mp4'
import TikTakVideo from '../../assets/images/tiktak.mp4'
import KhuranVideo from '../../assets/images/khuranvideo.mp4'
import FootballVideo from '../../assets/images/footballvideo.mp4'
import RockVideo from '../../assets/images/rockvideo.mp4'
import SakaryaVideo from '../../assets/images/sakaryavideo.mp4'
import ChinaGamesVideo from '../../assets/images/chinagames.mp4'
import NewsTrVideo from '../../assets/images/newstrvideo.mp4'
import MaglosFinance from '../../assets/images/maglosfinance.mp4'
const ViewProjects = () => {
  const [hover,setHover]=useState(false)
  const handleHover=()=>{
    setHover(true)
  }
  const handleHoverExit=()=>{
    setHover(false)
  }

  const [data, setData] = useState([
    {
      photo: `${Movies}`,
      video:`${MovieVideo}`,
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
      photo: `${Bitcoin}`,
      video:`${CryptoVideo}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Crypto-Exchange Website",
      link: "https://crypto-api.vercel.app/",
      overview:
      " These platforms play a crucial role in the cryptocurrency ecosystem, providing users with a marketplace where.. ",
    },
    {
      photo: `${Booking}`,
      video:`${DoctorVideo}`,
      skills: "HTML SCSS REACTJS Router`s",
      name: "Booking-Reservation",
      link: "https://doctor-baku.vercel.app/",
      overview:
      "  Booking and reservation refer to the process of securing a spot or arrangement for a service, accommodation.. ",
    },
    {
      photo: `${JS1}`,
      video:`${JsVideo}`,

      skills: "HTML JavaScript",
      name: "JavaScript-Lektionen",
      link: "https://github.com/7u4bgr/jsagain",
      overview:
      "JavaScript is a high-level, versatile programming language primarily known for its use in web development..",
    },
    {
      photo: `${TicTac}`,
      video:`${TikTakVideo}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "TicTacToe",
      link: "https://tictakgame.vercel.app",
      overview:
      "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
    },
    {
      photo: `${Khuran}`,
      video:`${KhuranVideo}`,

      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Khuran Website",
      overview:
        "Provides information about the Quranic text, translations, interpretations (Tafsirs), and audio recitation.",
      link: "https://khuran.vercel.app/",
    },
    {
      photo: `${FootBall}`,
      video:`${FootballVideo}`,

      skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
      name: "Football Mobile App",
      link: "https://football-baku.vercel.app/",
      overview:
        "Are you a passionate football fan? Look no further – our Football App is your go-to destination for all things football-related!...",
    },
    {
      photo: `${RSP}`,
      video:`${RockVideo}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "Rock Scissors Paper",
      link: "https://rockpaperscissorsgames.vercel.app/",
      overview:
        "Rock-paper-scissors is a simple hand game usually played between two people, where each player simultaneously..",
    },
    {
      photo: `${Sakarya}`,
      video:`${SakaryaVideo}`,

      skills: "HTML SCSS JavaScript REACTJS Responsive",
      name: "Sakarya Evde Sağlık Hizmeti",
      link: "https://sakaryaevdesaglik.vercel.app/",
      overview:
        "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
    },

    {
      photo: `${ChinaGames}`,
      video:`${ChinaGamesVideo}`,

      skills: "HTML SCSS JavaScript Responsive",
      name: "China Games",
      link: "https://chinagames.vercel.app/",
      overview:
        "JavaScript games have gained immense popularity due to the language's versatility and its ability to inter..",
    },
    {
      photo: `${NewsTR}`,
      video:`${NewsTrVideo}`,

      skills: "HTML SCSS JavaScript ReactJS API`s",
      name: "NewsTR",
      link: "https://news-tr.vercel.app/",
      overview:
        "News information serves as a cornerstone of informed societies, providing citizens with the information necessary..",
    },
    {
      photo: `${Maglos}`,
      video:`${MaglosFinance}`,

      skills: "HTML SCSS JavaScript ReactJS API`s",
      name: "Maglos Finance",
      link: "https://maglos.vercel.app/",
      overview:
        "Finance is a broad term encompassing the management of money and assets. It involves activities related to investing..",
    },
  ]);

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <p>/</p>
            <h2>projects</h2>
          </div>
          <div className={styles.allmyprojects}>
            <p>List of my projects:</p>
          </div>
          <div className={styles.maps}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div onMouseEnter={handleHover}  onMouseLeave={handleHoverExit} className={styles.images}>
                {hover ? (
                    <video autoPlay={true} muted>
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img className={styles.img} src={item.photo} alt="" />
                  )}
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
                    Live <LiveIcon />
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
