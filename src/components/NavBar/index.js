import React,{useState} from 'react';
import './navbar.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';

const NavBar = () => {
    const [activeNav, setActiveNav]  = useState('a');
    return (
        <nav>
          <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === 'a' ? 'active' : ''}><AiOutlineHome/></a>  
          <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>  
          <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>  
          <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>  
          <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
        </nav>
    );
};

export default NavBar;