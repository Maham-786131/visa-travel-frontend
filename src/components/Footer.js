import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="gy-3 align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h5 className="fw-bold text-light mb-2">VisaTravel Services</h5>
            <p className="mb-0 small">
              Your trusted partner for Visa, Passport, and Travel Support.
            </p>
          </Col>

          <Col
            md={6}
            className="text-center text-md-end d-flex justify-content-center justify-content-md-end gap-3"
          >
            <a href="#" className="text-light fs-5">
              <FaFacebook />
            </a>
            <a href="#" className="text-light fs-5">
              <FaInstagram />
            </a>
            <a href="#" className="text-light fs-5">
              <FaTwitter />
            </a>
            <a href="#" className="text-light fs-5">
              <FaWhatsapp />
            </a>
          </Col>
        </Row>
        <hr className="border-secondary my-3" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} VisaTravel Services. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
