import React from "react";
import { MdGroupAdd  } from 'react-icons/md';
import Feed from "./Feed";

const HeroNav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg border-bottom position-relative">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              All Post(32)
            </a>
          </li>
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
        <div class="d-flex gap-2">
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
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
          <button class="btn btn-primary" type="button">
            <MdGroupAdd />
            Join Group
          </button>
        </div>
      </div>
    </nav>
    <Feed />
    </>
  );
};

export default HeroNav;
