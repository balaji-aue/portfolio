import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import resume from '../data/resume';

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Feel free to reach out — I'm open to new opportunities and collaborations.</p>
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {isSent && <p>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  )
}
