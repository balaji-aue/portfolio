import React from 'react';
import { motion } from 'framer-motion';
import resume from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{resume.name}</h1>
          <p className="headline">{resume.headline} • {resume.contact.location} • {resume.contact.experience}</p>
          <p className="summary">{resume.summary}</p>
          <div className="hero-ctas">
            <a className="btn primary" href="/Resume_Balaji_Palanisamy.pdf" download>Download Resume</a>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </motion.div>
        <motion.div
          className="hero-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-card">
            <p><strong>Email:</strong> <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a></p>
            <p><strong>Phone:</strong> {resume.contact.phone}</p>
            <p><strong>Location:</strong> {resume.contact.location}</p>
            <div className="socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
