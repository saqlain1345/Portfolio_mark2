import React from "react";
import HomeButtons from "../HomeButtons";
import style from "./home.module.css";
import hero from "../../../assets/images/saq1.png";
import HomeSocialBtn from "../HomeSocialBtn";
const Home = () => {
  return (
    <>
      <header id="home">
        <div className={style.header_container}>
          <h5>Hello I'm </h5>
          <h1>Saqlain khan</h1>
          <h3 className={style.text_light}>Front End Developer</h3>
          <HomeButtons />
          <HomeSocialBtn/>
          <div className={style.hero}>
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
