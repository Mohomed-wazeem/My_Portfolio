import React from 'react'
import {Element} from "react-scroll";
import { Topcontent } from './Topcontent';
import "../App.css";
import profileImage from '../assets/wazeem.png';

export const Hero = () => {
  return (
    <div className='hero-container'>
        <Element name="hero" className="hero-left" >
            <Topcontent />
        </Element>
            <div className='hero-right'>
                <img src={profileImage} alt='profilejcn' className='hero-image'/>
            </div>
    </div>
  );
};
