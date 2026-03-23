import { useEffect, useRef } from 'react';
import { profileData } from '../data/profileData';
import '../styles/About.css';

function About() {
  const { about } = profileData;
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

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text reveal">
            <span className="about-label">About Me</span>
            <h2 className="about-title">
              Passionate about creating{' '}
              <span className="hero-title-gradient">meaningful digital experiences</span>
            </h2>
            <p className="about-description">{about.paragraph}</p>

            <div className="about-values">
              {about.values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
