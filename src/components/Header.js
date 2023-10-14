import React, { useState } from "react";
import IMG from "./assets/whole.png";

const Header = ({ openSignIn, openSignUp }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navigation menu
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary header-navbar${isNavOpen ? ' open' : ''}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse pe-5 ps-5 headernav${isNavOpen ? ' show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
            <a className="navbar-brand" href="#" onClick={closeNav}>
              <img src={IMG} alt="Logo" />
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </form>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isNavOpen}
              >
                Create account.{" "}
                <span className="text-primary fw-bold">It's free!</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => { closeNav(); openSignIn(); }}>
                    Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => { closeNav(); openSignUp(); }}>
                    Sign Up
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
