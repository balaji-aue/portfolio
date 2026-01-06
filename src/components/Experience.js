import React from 'react';
import resume from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {resume.experience.map((exp) => (
            <div className="timeline-item" key={exp.company}>
              <div className="timeline-meta">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company} • <span className="date">{exp.date}</span></p>
              </div>
              <div className="timeline-body">
                {exp.projects.map((p, i) => (
                  <div className="project" key={i}>
                    <strong>{p.title}</strong>
                    <ul>
                      {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
