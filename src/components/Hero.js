import React from 'react';
import resume from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div>
          <h1>{resume.name}</h1>
          <p className="headline">{resume.headline} • {resume.contact.location} • {resume.contact.experience}</p>
          <p className="summary">{resume.summary}</p>
          <div className="hero-ctas">
            <a className="btn primary" href="/Resume_Balaji_Palanisamy.pdf" download>Download Resume</a>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </div>
        <div className="hero-side">
          <div className="contact-card">
            <p><strong>Email:</strong> <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a></p>
            <p><strong>Phone:</strong> {resume.contact.phone}</p>
            <p><strong>Location:</strong> {resume.contact.location}</p>
            <div className="socials">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
