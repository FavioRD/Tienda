import React from 'react';
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="/">Inicio</a>
        <a href="/news">Noticias</a>
        <a href="/about">About</a>
        <a href="/contact">Contacto</a>
      </div>
    </footer>
  );
}

export default Footer;
