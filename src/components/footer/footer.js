import React from 'react';

import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-copy">© 2020 Кинопортал filmix.co</div>
        <nav className="footer-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
