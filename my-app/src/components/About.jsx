import React from 'react'
import {Element} from 'react-scroll'
import '../App.css';
import profileImage from '../assets/wazeem.png';

export const About = () => {
  return (
    <Element name="about" className="about-section">
        
        <div className='about-container'>
        <h2>About Me</h2>
            <p className="about-des">I'm a passionate Full Stack Developer specializing in the MERN Stack. I build interactive, scalable, and high-performance web applications that enhance user experience.</p>
            <p className="about-des">With a strong foundation in front-end and back-end development, I craft intuitive designs and robust architectures. I thrive on solving complex problems and delivering efficient solutions.</p>
        </div>
    </Element>
  )
}
