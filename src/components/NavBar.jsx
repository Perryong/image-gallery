import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../styles.css';  // your one-and-only stylesheet

export default function NavBar() {
  return (
    <nav className="navbar">
      <RouterNavLink to="/" className="nav-brand-item">
        Perry ONG | Portfolio
      </RouterNavLink>

      <ul className="navbar-nav">
        <li className="nav-item">
          <RouterNavLink to="/" className="nav-link">
            Home
          </RouterNavLink>
        </li>
        <li className="nav-item">
          <a
            href="https://perryongwq.github.io/Personal/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/Perryongwq?tab=repositories"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects (Github)
          </a>
        </li>
      </ul>
    </nav>
  );
}
