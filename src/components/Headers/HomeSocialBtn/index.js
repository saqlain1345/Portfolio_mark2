import React from 'react';
import style from './homeSocialBtn.module.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
const HomeSocialBtn = () => {
    return (
        <>
           <div className={style.header__socials}>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com' target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href='https://instagram.com.com' target="_blank" rel="noreferrer"><FiInstagram/></a>
            <a href='https://gmail.com' target="_blank" rel="noreferrer"><SiGmail/></a>
            </div> 
        </>
    );
};

export default HomeSocialBtn;