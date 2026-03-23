import '../styles/Projects.css';

function ProjectCard({ project }) {
  const { title, description, image, techStack, category, github, live } = project;

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <div className="project-image">
          {/* Placeholder gradient - replace with actual image */}
          <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="url(#projectGradient)"/>
            <rect x="40" y="40" width="120" height="80" rx="10" fill="rgba(255,255,255,0.2)"/>
            <rect x="180" y="50" width="180" height="12" rx="6" fill="rgba(255,255,255,0.15)"/>
            <rect x="180" y="70" width="140" height="12" rx="6" fill="rgba(255,255,255,0.1)"/>
            <rect x="180" y="90" width="160" height="12" rx="6" fill="rgba(255,255,255,0.12)"/>
            <circle cx="80" cy="160" r="20" fill="rgba(255,255,255,0.15)"/>
            <circle cx="130" cy="160" r="15" fill="rgba(255,255,255,0.1)"/>
            <defs>
              <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7EDE2"/>
                <stop offset="50%" stopColor="#C4B8D9"/>
                <stop offset="100%" stopColor="#8FCAC8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="project-overlay">
          <div className="project-overlay-buttons">
            <a
              href={github}
              className="project-overlay-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={live}
              className="project-overlay-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
