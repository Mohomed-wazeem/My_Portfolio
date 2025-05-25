import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <div className='header_left'>
        <h1>Portfol<span>io</span></h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar change" : "bar"}></div>
        <div className={isOpen ? "bar change" : "bar"}></div>
        <div className={isOpen ? "bar change" : "bar"}></div>
      </div>

      <div className={`header_links ${isOpen ? 'open' : ''}`}>
        <Link to="hero" smooth={true} duration={500}><h4>About</h4></Link>
        <Link to="projects" smooth={true} duration={500}><h4>Projects</h4></Link>
        <Link to="skills" smooth={true} duration={500}><h4>Skills</h4></Link>
        <Link to="services" smooth={true} duration={500}><h4>Services</h4></Link>
      </div>
    </div>
  );
};
