import { useState, useEffect, useRef } from 'react';
import { profileData } from '../data/profileData';
import '../styles/Skills.css';

function Skills() {
  const { skills } = profileData;
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

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

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const selectedSkill = skills.find((s) => s.category === activeCategory);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header reveal">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-scroll-container reveal">
          <div className="skills-scroll">
            {skills.map((skill) => (
              <button
                key={skill.category}
                className={`skill-chip ${activeCategory === skill.category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(skill.category)}
              >
                {skill.category}
              </button>
            ))}
          </div>
        </div>

        {activeCategory && selectedSkill ? (
          <div className="skills-panel">
            <div className="skills-panel-header">
              <h3 className="skills-panel-title">{selectedSkill.category} Tools</h3>
              <button
                className="skills-panel-close"
                onClick={() => setActiveCategory(null)}
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>
            <div className="skills-panel-tools">
              {selectedSkill.tools.map((tool, index) => (
                <span key={index} className="skill-tool">
                  <span className="skill-tool-dot"></span>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="skills-empty reveal">
            <div className="skills-empty-icon">✨</div>
            <p className="skills-empty-text">
              Click on a skill category above to explore the tools I use
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
