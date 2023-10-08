import React from 'react'
import {useParams} from "react-router-dom"
import {ProjectList} from "../helpers/ProjectList"
import {useState, useEffect } from 'react';

import {Link} from "react-router-dom";




import "../styles/ProjectDisplay.css"

function ImageReturn(normal, small){

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


  var imageSize;
  //var image = normal;
  var image;

  if (windowSize[0] > 1440) {
    imageSize = 1440*0.8;
    image = normal;
  }
  else if(windowSize[0] > 600) {
    imageSize = windowSize[0] * 0.8; 
    image = normal;
  
  }
  else {
    imageSize = windowSize[0] * 0.8; 
    image = small;
  }

  return (
    <img src={image}  alt="Project showcase"  style={{  width: imageSize, }}/>
    );;

}


function ReadLink(link){

  if (link != null){

    if(link !== "/")
      return (
        <div>
        <p>Link to project: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </p></div>
      );

    return(<div>
      <span>
        Link to project: <Link to="/Web.Portfolio/" className="link"> Home page </Link>
      </span>
      </div>);

  }

  return (<p>Link to project(s): Coming soon! </p>);

}

function ProjectDisplay() {

    const {id} = useParams();
    const project = ProjectList[id];
    return <div className="project">
        <div>
          {ImageReturn(project.image, project.imageSmall)}
        </div>

        <h1> {project.name} </h1>
        <h3> {project.desc} </h3>
        <p>{ReadLink(project.link)}</p>
        <p className="linebreak">  {project.detail} </p>
    </div>
}

export default ProjectDisplay


/*
        <img 
        src={project.image} 
        srcset="{project.imageSmall} 400w"

        alt="Project showcase"  style={{  width: ImageSize(), }}/>
*/