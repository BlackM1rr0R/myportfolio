import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { LiveIcon, RightArrowIcon } from "../../icons/";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(199, 120, 221, 0.4)" },
};

const Projects = ({ data, darkMode, translations }) => {
  return (
    <section id="projects" className={darkMode ? styles.background : styles.whitebackground}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headertexts}>
            <div className={styles.div1}>
              <div className={styles.texts}>
                <p>#</p>
                <h2>{translations.projects}</h2>
              </div>
              <div className={styles.line}>
                <hr />
              </div>
            </div>

          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2000,        // 3 saniyede bir geçiş
              disableOnInteraction: false,  // kullanıcı kaydırsa bile devam etsin
            }}
            className={styles.swiperContainer}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className={styles.card}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className={styles.imageWrapper}>
                    <img src={item.photo} alt={item.name} className={styles.img} />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.skills}>{item.skills}</h3>
                    <h2 className={styles.projectName}>{item.name}</h2>
                    <p className={styles.projectOverview}>{item.overview}</p>
                  </div>
                  <div className={styles.liveLink}>
                    <Link target="_blank" to={item.link} rel="noopener noreferrer">
                      {translations.map} <LiveIcon />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
