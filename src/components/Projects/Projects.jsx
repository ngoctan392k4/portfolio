import { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import theme_pattern from "../../assets/theme_pattern.svg";

const Projects = ({ projectContent }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  function handleClickOnChange(getCurrentIndex) {
    setCurrentProjectIndex(getCurrentIndex);
  }

  return (
    <div className="container">
      <div className="project-heading">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="projects">
        <div className="heading">
          {projectContent.map((project, index) => (
            <div
              key={index}
              className={
                currentProjectIndex === index ? "project active" : "project"
              }
              onClick={() => handleClickOnChange(index)}
            >
              <span className="title">{project.title}</span>
            </div>
          ))}
        </div>

        <div className="content">
          {projectContent[currentProjectIndex] && (
            <ProjectCard project={projectContent[currentProjectIndex]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
