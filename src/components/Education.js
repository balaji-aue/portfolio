import React from 'react';
import resume from '../data/resume';

export default function Education(){
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2>Education</h2>
        <div className="card">
          <h3>{resume.education.degree}</h3>
          <p>{resume.education.institute} • {resume.education.year}</p>
        </div>
      </div>
    </section>
  )
}
