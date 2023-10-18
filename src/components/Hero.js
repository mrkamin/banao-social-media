import React from 'react';
import IMG from './assets/Rectangle 2.png';
import IMG2 from './assets/Rectangle 3.png';

const Hero = () => (
  <>
    <div className="position-relative hero-container">
      <div className="position-relative">
        <img src={IMG} alt="Hero" className="w-100 hero-image object-fit" />
        <img src={IMG2} alt="Hero rectingle" className="position-absolute top-0 start-0 w-100 hero-image object-fit" />
      </div>
      <div className="position-absolute hero-para">
        <h1 className="text-white">Computer Engineering</h1>
        <p className="text-white">142,765 Computer Engineers follow this</p>
      </div>
    </div>

  </>
);

export default Hero;
