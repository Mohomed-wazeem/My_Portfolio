import React, { useState } from 'react'
import "../App.css";

export const Projects = ({img, title, desc, link}) => {
    const [show, setshow] = useState(false);

  return (
    <a href={link}>
        <div className='project' 
        onMouseEnter={()=>setshow(true)} 
        onMouseLeave={()=>setshow(false)}>
            {
                show ? (
                    <div className='project_content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt='image' />
                )
            }
        </div>
    </a>
  )
}
