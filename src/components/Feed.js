import React from "react";
import Data from "./Data";
import { AiFillEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import vector from "./assets/Vector.png";

const Feed = () => {
  return (
    <div className="container grid gap-5">
      <div className="feed d-flex flex-column gap-3 mt-3">
        {Data.map((data) => (
          <div key={data.id}>
            <div class="card">
              <img src={data.image} class="card-img-top" alt="" />
              <div class="card-body text-start">
                <h5 class="card-title ">{data.category}</h5>
                <div className="title justify-content-between ">
                  <h4 class="card-text ">{data.title}</h4>
                  <div className="dropdown">
                    
                    <button
                      className="dropdown-btn fs-2 p-0 text-end" // Toggle class
                      type="button"
                      id={`dropdownMenu${data.id}`} // Unique ID for each dropdown
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby={`dropdownMenu${data.id}`} // Match the ID
                    >
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </div>
                  </div>
                </div>
                <p>{data.details}</p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex gap-5">
                    <div>
                      {data.dateSign}
                      {data.date}
                      {data.companySingn}
                      {data.company}{" "}
                    </div>
                    <div>
                      {data.locationSingn}
                      {data.location}
                    </div>
                  </div>
                  <div> {data.visit} </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={data.userimage} alt={data.userName} />
                    <h6>{data.userName}</h6>
                  </div>
                  <div className="d-flex gap-5 align-items-center">
                    <div>
                      {" "}
                      <AiFillEye /> 1.4views{" "}
                    </div>

                    <button className="btn btn-secondary">
                      <BsFillShareFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="location d-flex flex-column gap-3 mt-5">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          <div className="d-flex gap-1 align-items-center">
            <MdOutlineLocationOn />
            Noida, India
          </div>
          <HiPencil />
        </div>
        <div className="vector">
          <img src={vector} alt="vetor" />
          <div className="text-start">
            Your location will help us serve better and extend a personalised
            experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
