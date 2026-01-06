import React from 'react';
import resume from '../data/resume';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About</h2>
        <p>{resume.summary}</p>
        <h3>Skills</h3>
        <div className="skills">
          {resume.skills.map((s) => (
            <span className="skill" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
