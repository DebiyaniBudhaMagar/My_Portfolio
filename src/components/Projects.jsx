import { useState, useEffect, useRef } from 'react';
import { profileData } from '../data/profileData';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

function Projects() {
  const { projects } = profileData;
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', 'Web', 'Design', 'Data', 'Other'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work showcasing my skills and creativity
          </p>
        </div>

        <div className="projects-filters reveal">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="projects-empty">
              <div className="projects-empty-icon">🔍</div>
              <p className="projects-empty-text">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
