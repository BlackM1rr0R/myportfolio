// src/data/projects.js
import Skalioz from "../assets/images/skalioz.png";
import InterViewer from "../assets/images/d1.png";
import Fatima from "../assets/images/fatima.png";
import Movies from "../assets/images/movies.png";
import Maglos from "../assets/images/financebackground.jpg";
import Booking from "../assets/images/booking3.png";
import Perfume from "../assets/images/perfume.png";
import FormDom from "../assets/images/formdom.png";
const getProjects = (translations, language) => [
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
    skills: "HTML SCSS JavaScript REACTJS REDUX BACKEND",
    name: "Perfume Global Website",
    link: "https://perfumenewwebsite.vercel.app/",
    overview:
      "We offer a curated selection of the finest fragrances from renowned brands and independent artisans..",
  },

  {
    photo: Fatima,
    skills: "HTML SCSS JavaScript REACTJS REDUX BACKEND",
    name: "UI/UX Blog Website",
    link: "https://fatimastudioweb.vercel.app/",
    overview:
      "UI/UX designer passionate about creating seamless digital experiences that connect people with technology.",
  },
  {
    photo: Movies,
    skills: "HTML SCSS REACTJS REST API`s Router`s",
    name: "Movies-baku",
    overview: translations[language].moviesbaku,
    link: "https://movies-baku.vercel.app/",
  },

  {
    photo: Booking,
    skills: "HTML SCSS REACTJS Router`s",
    name: "Booking-Reservation",
    link: "https://doctor-baku.vercel.app/",
    overview:
      "Booking and reservation refer to the process of securing a spot or arrangement for a service, accommodation.. ",
  },

  {
    photo: Maglos,
    skills: "HTML SCSS JavaScript ReactJS API`s",
    name: "Maglos Finance",
    link: "https://maglos.vercel.app/",
    overview:
      "Finance is a broad term encompassing the management of money and assets. It..",
  },
];

export default getProjects;
