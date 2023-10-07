import React from 'react'
import {useParams} from "react-router-dom"
import {ProjectList} from "../helpers/ProjectList"
import GitHubIcon from '@material-ui/icons/GitHub'
//import { Dimensions } from "react-native";
import {useRef} from 'react';
import { useState, useEffect } from 'react';

import {Link, useLocation} from "react-router-dom";




import "../styles/ProjectDisplay.css"

function ImageSize(){
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


    var imageSize;
    if (windowSize[0] < 1440)
        imageSize = windowSize[0] * 0.8;
    else
        imageSize = 1440*0.8;

    return imageSize;

}

function ReadLink(link){

  if (link != null){

    if(link != "/")
      return (
        <div>
        <p>Link to project: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </p></div>
      );

    return(<div>
      <span>
        Link to project: <Link to="/" className="link"> Home page </Link>
      </span>
      </div>);

  }

  return (<p>Link to project(s): Coming soon! </p>);

}

function ProjectDisplay() {

    const {id} = useParams();
    const project = ProjectList[id];
    return <div className="project">
        <img src={project.image}   style={{  width: ImageSize(), }}/> 
        <h1> {project.name} </h1>
        <h3> {project.desc} </h3>
        <p>{ReadLink(project.link)}</p>
        <p className="linebreak">  {project.detail} </p>
    </div>
}

export default ProjectDisplay