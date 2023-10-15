import React from 'react';
import { MdGroupAdd } from 'react-icons/md';
import Feed from './Feed';
import SidbarForHome from './SidbarForHome';

const HeroNav = () => (
  <div className="container heronavcontainer">
    <nav className="navbar navbar-expand-lg border-bottom position-relative">
      <div className="container-fluid">
        <a className="nav-link active" href="#allpots">
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
        <button className="btn btn-primary joingroup" type="button">
          <MdGroupAdd />
          Join Group
        </button>
      </div>
    </nav>
    <div className="container grid gap-5">
      <Feed />
      <SidbarForHome />
    </div>
  </div>
);

export default HeroNav;
