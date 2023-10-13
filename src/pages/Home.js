import { GitHub } from '@material-ui/icons'
import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import Propic from "../assets/Propic.jpg";
import PropicSmall from "../assets/PropicSmall.jpg"

import cplusplus from "../assets/cplusplus.png"
import cSharp from "../assets/c-sharp.png"
import js from '../assets/js.png';

import BlenderIcon from "../assets/logos/blender.png"
import UnityIcon from "../assets/logos/Unity.png"
import UEIcon from "../assets/logos/UE.png"
import OpenGLIcon from "../assets/logos/OpenGL.png"

import htmlIcon from "../assets/logos/HTML5.png"
import cssIcon from "../assets/logos/CSS.png"
import reactjsIcon from "../assets/logos/ReactJS.png"
import npmIcon from "../assets/logos/npm.png"

import {useState, useEffect } from 'react';

function PropicReturn(){

  /* */
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        //window.innerHeight,
      ]);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
      
  
    if(windowSize[0] > 600) {
      
      return Propic;
    
    } 
    else
      return PropicSmall;
  
  }

function Home() {
  return (
    <div className="home">
      <div className="about">

        <div className="propic">
          <img src={PropicReturn()} alt="Profile Picture" />
        </div>
        <div>
          <h3>Terrance HO</h3>          
        </div>

        <div className="prompt">
          <p>
            A self-motivated content creator 
          </p>
          <h4>Contact me:</h4>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/terrance-ho-95a11a281" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <EmailIcon onClick={() => window.location = 'mailto:terrance.ho.work@gmail.com'}/>
            <a href="https://github.com/Terrancus" target="_blank" rel="noopener noreferrer">
              <GitHub  />
            </a>
        </div>
      </div>
    </div>
      
      <div className="skills">

        <h1>Summary</h1>
        <div className="Summary">
          <span> 
            <p>
              A BA fresh graduate who enjoys content creation. I have many side projects, including story writing, conlanging, and small scale game development.
            </p>
          </span>

        </div>

        <hr class="roundedDivLine"/>


        <h1>Technical Skills</h1>
        <ul className="list">

          <li className="item">
            <h3>Skills</h3>
            <span>
              <ul>
                <li>Low poly 3D modeling</li>
                <li>Basic game development</li>
                <li>Front-end Web development</li>
              </ul>
            </span>
          </li>

          <li className="item">
            <h3>Game Dev Tools</h3>
            <span>
              <ul className="skillList">
                <li>
                  <div className="skillIcon"> 
                    <img src={BlenderIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    Blender
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={UnityIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    Unity
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={UEIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    Unreal Engine
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={OpenGLIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    OpenGL
                  </div>
                  
                </li>
              </ul>
            </span>
          </li>

          <li className="item">
            <h3>Web Dev Tools</h3>
            <span>
              <ul className="skillList">
              <li>
                  <div className="skillIcon"> 
                    <img src={htmlIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    HTML
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={cssIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    CSS
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={reactjsIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    ReactJS
                  </div>
                  
                </li>
                <li>
                  <div className="skillIcon"> 
                    <img src={npmIcon} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    Npm
                  </div>
                </li>
              </ul>
            </span>
          </li>
          
          <li className="item">
            <h3>Programming Languages</h3>
            <span>
              <ul className="skillList">
                <li>
                  <div className="skillIcon" > 
                    <img src={cplusplus} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    C++
                  </div>
                </li>
                <li>
                  <div className="skillIcon">
                    <img src={cSharp} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    C#
                  </div>
                
                  </li>
                <li> 
                  <div className="skillIcon"> 
                    <img src={js} alt="Icon"/> 
                  </div>
                  <div className="skillName">
                    JavaScript
                  </div>
                  
                </li>
              </ul>
            </span>

          </li>   

        </ul>

        <hr class="roundedDivLine"/>

        <h1>Other Skills</h1>
        <ul className="list">
        <h3>Languages</h3>

            <h4>Fluent</h4>
            <ul className="otherSkills">
              <li>Chinese (Cantonese and Mandarin)</li>
              <li>English</li>
            </ul>

            <h4>Intermediate</h4>
            <ul className="otherSkills">
              <li>Latin</li>
              <li>French</li>
            </ul>

        </ul>


      </div>

    </div>
  )
}

export default Home