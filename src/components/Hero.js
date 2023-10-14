import React from "react";
import IMG from "./assets/Rectangle 2.png";
import IMG2 from "./assets/Rectangle 3.png";
// import HeroNav from "./HeroNav";
// import IMG0 from './assets/Rectangle 2 (2).png'

const Hero = () => {
  return (
    <>
    <div className="position-relative hero-container">
      <div className="position-relative">
        <img src={IMG} alt="Hero" className="w-100 hero-image object-fit" />
          <img src={IMG2} alt="Hero rectingle" className="position-absolute top-0 end-0 start-0 botton-0 w-100 hero-image" />
      </div>
      <div className="position-absolute botton-0 top-50 start-0 end-50">
        <h1 className="text-white">Computer Engineering</h1>
        <p className="text-white">142,765 Computer Engineers follow this</p>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
