import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IMG from './assets/whole.png';

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
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse pe-5 ps-5 headernav${isNavOpen ? ' show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
            <button className="navbar-brand btn" type="button" onClick={closeNav}>
              <img src={IMG} alt="Logo" />
            </button>
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
                href="#create account"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isNavOpen}
              >
                Create account.
                {' '}
                <span className="text-primary fw-bold">It&apos;s free!</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button" onClick={() => { closeNav(); openSignIn(); }}>
                    Sign In
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => { closeNav(); openSignUp(); }}>
                    Sign Up
                  </button>
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

Header.propTypes = {
  openSignIn: PropTypes.func.isRequired,
  openSignUp: PropTypes.func.isRequired,
};

export default Header;
