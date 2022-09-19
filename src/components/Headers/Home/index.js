import React,{useEffect} from "react";
import HomeButtons from "../HomeButtons";
import style from "./home.module.css";
import hero from "../../../assets/images/saq1.png";
import HomeSocialBtn from "../HomeSocialBtn";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <header id="home">
        <div className={style.header_container}>
          <div data-aos="zoom-out" data-aos-duration="2000">
            <h5>Hello I'm </h5>
            <h1>Saqlain khan</h1>
            <h3 className={style.text_light}>Front End Developer</h3>
            <HomeButtons />
          </div>
            <HomeSocialBtn />
          <div className={style.hero} data-aos="flip-up" data-aos-duration="1000">
            <img src={hero} alt="" />
          </div>
          <a href="#contact" className={style.scroll__down}>
            Scroll down
          </a>
        </div>
      </header>
    </>
  );
};

export default Home;
