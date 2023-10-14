import React, { useState } from "react";
import IMG from "./assets/whole.png";

const Header = ({openSignIn, openSignUp}) => {
  
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse pe-5 ps-5"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
            <a class="navbar-brand" href="#">
              <img src={IMG} alt="Logo" />
            </a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create account.{" "}
                <span className="text-primary fw-bold">It's free!</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#" onClick={openSignIn}>
                    Sign In
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" onClick={openSignUp}>
                    Sign Up
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
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
