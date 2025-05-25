import React from 'react';
import { Element } from 'react-scroll';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css'; 

export const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h2>Contact <span>Me</span></h2>
      <p>Feel free to reach out for collaborations or inquiries.</p>
      <div className="contact-icons">
        <a href="mailto:mohomedwazeem729@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Mohomed-wazeem/Mohomed-wazeem"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </Element>
  );
};
