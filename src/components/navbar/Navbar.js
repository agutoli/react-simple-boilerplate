import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default () => (
  <div className="navbar">
    <span className="navbar__brand">React Project</span>
    <ul className="navbar__list">
      <li className="navbar__list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/non-existent-route">404 page</Link>
      </li>
    </ul>
  </div>
);
