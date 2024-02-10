import React from 'react'
import '../Projects/Projects.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'

const Projects = () => {
  return (
    <div className='project' id='projects'>
      <div className="par">
        <p>My Projects</p>
      </div>
      <div className="conten">
        {ProjectData.map((content) => (
          <ProjectCard 
            key={content.id} 
            image={content.image} 
            name={content.name} 
            tech={content.tech}
            p1={content.p1}
            p2={content.p2}
            p3={content.p3}
            p4={content.p4}
            git={content.git}
          />
        ))}
      </div>
      <div className='verti'></div>
    </div>
  )
}

export default Projects