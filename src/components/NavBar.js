import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      
        <a href="https://github.com/JacobCounts" target="_blank" rel="noreferrer noopener">
          <i className = "fab fa-github fa-3x" id="icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/jacob-counts-940aab1b7/" target="_blank" rel="noreferrer noopener">
          <i className = "fab fa-linkedin fa-3x" id="icon"></i>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
          </li>
          <li className="nav-item">
          <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
          </li>
          <li className="nav-item">
          <Link
          to="/blog"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
          </li>
          <li className="nav-item">
          <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
        
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
