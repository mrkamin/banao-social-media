import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import Data from './Data';

const Feed = () => (

  <div className="feed d-flex flex-column gap-3 mt-3">
    {Data.map((data) => (
      <div key={data.id}>
        <div className="card">
          <img src={data.image} className="card-img-top" alt="" />
          <div className="card-body text-start">
            <h5 className="card-title ">{data.category}</h5>
            <div className="title justify-content-between ">
              <h4 className="card-text ">{data.title}</h4>
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
                  aria-labelledby={`dropdownMenu${data.id}`}
                >
                  <a className="dropdown-item" href="#edit">
                    Edit
                  </a>
                  <a className="dropdown-item" href="#report">
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
                  {data.company}
                  {' '}
                </div>
                <div>
                  {data.locationSingn}
                  {data.location}
                </div>
              </div>
              <div>
                {' '}
                {data.visit}
                {' '}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2 align-items-center">
                <img src={data.userimage} alt={data.userName} />
                <h6>{data.userName}</h6>
              </div>
              <div className="d-flex gap-5 align-items-center">
                <div>
                  {' '}
                  <AiFillEye />
                  {' '}
                  1.4views
                  {' '}
                </div>

                <button type="button" className="btn btn-secondary">
                  <BsFillShareFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
