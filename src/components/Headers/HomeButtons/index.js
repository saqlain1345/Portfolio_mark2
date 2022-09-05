import React from 'react';
// import './homeButtons.module.css';
import CV from '../../../assets/cv.pdf';
const HomeButtons = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn_primary'>Let's Connect</a>
        </div>
    );
};

export default HomeButtons;