import React from 'react'
import { Link } from 'react-scroll'
import "../App.css";

export const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h2>Mohomed <span>Wazeem</span></h2>
            <p>Full Stack Developer</p>
            <h4>Passionate about building scalable web applications</h4>
            <div className='button_con'>
            <a 
              href="/wazeemcv.pdf" download 
            >
              <button>Download CV</button>
              
            </a>
            
            <Link to="projects" smooth={true} duration={500}>
                <button>My Projects</button>
            </Link>
            </div>
        </div>
        
    </div>
  )
}
