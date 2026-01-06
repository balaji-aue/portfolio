import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Balaji Palanisamy — Built with React.</p>
      </div>
    </footer>
  )
}
