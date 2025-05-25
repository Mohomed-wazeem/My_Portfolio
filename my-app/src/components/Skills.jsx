import React from 'react'
import {Element} from 'react-scroll'
import skillImage from '../assets/pr.jpg';
import '../App.css';
import LinearProgress from '@mui/material/LinearProgress';

export const Skills = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skill_image'>
        <img src={skillImage} alt='skillimg'/>
        </div>
        <div className='skillContainer_text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer_skillset'>
                <h4>React</h4>
                <div className='skillContainer_slider1'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>

            <div className='skillContainer_skillset'>
                <h4>Node Js</h4>
                <div className='skillContainer_slider2'>
                    <LinearProgress variant="determinate" value={60} />
                </div>
            </div>

            <div className='skillContainer_skillset'>
                <h4>MongoDb</h4>
                <div className='skillContainer_slider3'>
                    <LinearProgress variant="determinate" value={75} />
                </div>
            </div>

            <div className='skillContainer_skillset'>
                <h4>PHP</h4>
                <div className='skillContainer_slider4'>
                    <LinearProgress variant="determinate" value={55} />
                </div>
            </div>

            <div className='skillContainer_skillset'>
                <h4>MySql</h4>
                <div className='skillContainer_slider5'>
                    <LinearProgress variant="determinate" value={65} />
                </div>
            </div>
        </div>
    </Element>
  )
}
