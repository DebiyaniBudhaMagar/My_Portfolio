import { useEffect, useRef } from 'react';
import { profileData } from '../data/profileData';
import '../styles/Timeline.css';

function Timeline() {
  const { timeline } = profileData;
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
    <section id="experience" className="timeline-section" ref={sectionRef}>
      <div className="container">
        <div className="timeline-header reveal">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </div>

        <div className="timeline-horizontal">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-card reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-card-year">{item.year}</div>
              <div className="timeline-card-dot"></div>
              <div className="timeline-card-content">
                <h3 className="timeline-card-title">{item.title}</h3>
                <span className="timeline-card-organization">{item.organization}</span>
                <p className="timeline-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
