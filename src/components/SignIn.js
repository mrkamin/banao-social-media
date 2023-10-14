import React from 'react';
import { Link } from 'react-router-dom';
import Feed from './Feed';
import IMG from './assets/outline-exit_to_app-24px.png';
import Sidebar from './Sidebar';

const SignIn = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg border-bottom position-relative">
      <div className="container-fluid">
        <a className="nav-link active" href="#allpost">
          All Post(32)
        </a>
        <button
          className="navbar-toggler dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedConten"
          aria-controls="navbarSupportedConten"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">Filters: All</span>
        </button>
        <div
          className="collapse navbar-collapse rounded-2 heronav"
          id="navbarSupportedConten"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link " href="#event">
                Event
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#job">
                Job
              </a>
            </li>
          </ul>
          <div className="gap-2">
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Write a Post
              </button>
              <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#image">
                    Image
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#video">
                    Video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#post">
                    Post
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/" class="btn border joingroup" type="button">
          <img src={IMG} alt="leavgroup sign" />
          Leave Group
        </Link>
      </div>
    </nav>
    <div className="container grid gap-5">
      <Feed />
      <Sidebar />
    </div>
  </div>
);

export default SignIn;
