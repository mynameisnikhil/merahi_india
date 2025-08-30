import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: 9 }}
      >
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-primary">
              <span className="text-dark">ME</span>RAAHI
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/packages" className="nav-item nav-link">
                Packages
              </Link>
              <Link to="/destination" className="nav-item nav-link">
                Destination
              </Link>
              {/* <Link to="/blog" className="nav-item nav-link">
                Blog
              </Link> */}
              {/* <Link to="/guides" className="nav-item nav-link">
                Guides
              </Link> */}
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
