import React from 'react';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';
import { Element } from 'react-scroll';
import '../App.css'; // Don't forget to import the CSS

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'High-quality frontend development using modern frameworks like React.',
      icon: <FaCode />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creative and user-friendly interface design tailored for all devices.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side logic and database integration with Node.js & MongoDB.',
      icon: <FaServer />,
    },
  ];

  return (
    <Element name="services" className="services-section">
      <section className="services-wrapper">
        <h2 className="services-heading">My Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Services;
