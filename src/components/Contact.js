import React from 'react';
import resume from '../data/resume';

export default function Contact(){
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Feel free to reach out — I’m open to new opportunities and collaborations.</p>
        <div className="contact-grid">
          <div className="card">
            <p><strong>Email</strong></p>
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </div>
          <div className="card">
            <p><strong>Phone</strong></p>
            <span>{resume.contact.phone}</span>
          </div>
        </div>
        <div className="socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
