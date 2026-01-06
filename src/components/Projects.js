import React from 'react';
import resume from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {resume.projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech">{p.tech.join(' • ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
