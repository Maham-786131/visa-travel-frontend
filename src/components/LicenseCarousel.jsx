// src/components/LicenseCarousel.jsx
import React from "react";
import { Carousel } from "react-bootstrap";

const LicenseCarousel = ({ certificates }) => {
  return (
    <Carousel>
      {certificates.map((cert, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={cert.image}
            alt={cert.title}
          />
          <Carousel.Caption>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default LicenseCarousel;
