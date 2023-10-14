import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import vector from "./assets/Vector.png";
import {BiLike} from 'react-icons/bi'
import IMG from './assets/Group 65.png';

const Sidebar = () => {
    return (
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
        <div className="mt-5"><img src={IMG} alt="phot group" /></div>
        <div className="text-primary">See More...</div>
      </div>
    )
}

export default Sidebar;