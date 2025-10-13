import React, { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Form */}
        <div className="col-md-7 mb-4 mb-md-0">
          <div className="card shadow border-0 p-4">
            <h2 className="text-center mb-4 text-primary fw-bold">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="03xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Service Needed</label>
                  <input
                    type="text"
                    name="service"
                    className="form-control"
                    placeholder="Visa / Passport / Translation"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className="mt-3 text-center text-success fw-semibold">
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0 p-4 bg-light">
            <h4 className="text-primary fw-bold mb-4">Get in Touch</h4>
            <p className="text-muted">
              We’re here to assist you with visa, passport, and travel
              services. Feel free to contact us anytime.
            </p>

            <div className="d-flex align-items-center mb-3">
              <FaPhone className="text-primary me-3 fs-5" />
              <span>+92 300 1234567</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="text-primary me-3 fs-5" />
              <span>info@visatravelservices.com</span>
            </div>

            <div className="d-flex align-items-center">
              <FaMapMarkerAlt className="text-primary me-3 fs-5" />
              <span>123 Main Street, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
