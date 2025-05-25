import React from 'react'
import prj1 from '../assets/petshoppic.png';
import prj2 from '../assets/blogpic.png';
import prj3 from '../assets/portfoliopic.png';
import { Element } from 'react-scroll'
import {Projects} from '../components/Projects';
import "../App.css";

export const Projectscontainer = () => {

    const projects = [
        {
            img: prj1,
            title: "PetShop website",
            desc:
                "Passionate about building scalable web applications with expertise in MERN Stack.",
            link: "https://github.com/Mohomed-wazeem/PetShop_Managment_System"
        },
        {
            img: prj2,
            title: "Blogging Platform",
            desc:
                "Passionate about building scalable web applications with expertise in MERN Stack.",
            link: "https://github.com/Mohomed-wazeem/Blogging-platform"
        },
        {
            img: prj3,
            title: "Portfolio website",
            desc:
                "Passionate about building scalable web applications with expertise in MERN Stack.",
            link: "wwww.google.com"
        },
    ];

    return (
        <Element className="projectContainer" id="projects">
            <h2>Projects</h2>
            <div className="projectcontainer_projects">
                {
                    projects.map((project, index) => (
                        <Projects 
                            key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </Element>
    )
}

