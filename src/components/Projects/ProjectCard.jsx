import "./Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image">
        {project.image && <img src={project.image} alt={project.title} />}
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          🔗 View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
