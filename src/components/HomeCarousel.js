import React from 'react';
import "../styles/hero.css"; // for HomeCarousel
import visaImg from '../assets/images/caresol 1.jpg';
import passportImg from '../assets/images/caresol2.jpg';
import travelImg from '../assets/images/caresol3.jpg';

const HomeCarousel = () => {
  return (
    <div
      id="homeCarousel"
      className="carousel slide fullscreen-carousel"
      data-bs-ride="carousel"
    >
      
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={visaImg} className="d-block w-100 heroimg" alt="Visa Service 1" />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-bold text-light">
              One Stop Solution for Visa & Travel Services
            </h1>
            <button className="btn btn-warning mt-3">Apply Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={passportImg} className="d-block w-100 heroimg" alt="Passport Assistance" />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-bold text-light">Passport Assistance</h1>
            <p>New, Renewal, and Lost Passport Support</p>
            <button className="btn btn-warning mt-3">Apply Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={travelImg} className="d-block w-100 heroimg" alt="Travel Services" />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-bold text-light">Travel Services</h1>
            <p>Flight booking and insurance</p>
            <button className="btn btn-warning mt-3">Apply Now</button>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
