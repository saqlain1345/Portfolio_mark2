import React from 'react';
import HomeButtons from '../HomeButtons';
import style from './home.module.css';
const Home = () => {
    return (
        <>
        <header>
        <div className={style.header_container}>
   <h5>Hello I'm </h5>
   <h1>Saqlain khan</h1>
   <h3 className={style.text_light}>Front End Developer</h3>
   <HomeButtons/>
        </div>
        </header>
        </>
    );
};

export default Home;