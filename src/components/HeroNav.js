import React from "react";
import { MdGroupAdd } from "react-icons/md";
import Feed from "./Feed";

const HeroNav = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg border-bottom position-relative">
        <div class="container-fluid">
          <a class="nav-link active" href="#">
            All Post(32)
          </a>
          <button
            class="navbar-toggler dropdown-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedConten"
            aria-controls="navbarSupportedConten"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="">Filters: All</span>
          </button>
          <div className="collapse navbar-collapse rounded-2 heronav" id="navbarSupportedConten"> 
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link " href="#">
                Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Job
              </a>
            </li>
          </ul>
          <div class="gap-2">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Write a Post
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Image
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Video
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Post
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <button class="btn btn-primary joingroup" type="button">
              <MdGroupAdd />
              Join Group
            </button>
        </div>
      </nav>
      <Feed />
    </div>
  );
};

export default HeroNav;
