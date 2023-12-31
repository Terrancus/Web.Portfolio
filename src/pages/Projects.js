import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

import "../styles/Projects.css"

function Projects() {
  return (
    <div className="projects">
      <div className="PageTitle">
        <h1>My Personal Projects</h1>
      </div>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.coverImage} />
        })}
      </div>
    </div>
  )
}

export default Projects