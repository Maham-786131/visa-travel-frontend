import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import "../styles/Home.css";
// Import category images
import visaImg from "../assets/images/visa.jpg";
import passportImg from "../assets/images/passport.jpg";
import translationImg from "../assets/images/translation.jpg";
import travelImg from "../assets/images/travel.jpg";


const Home = () => {
  const whatsappNumber = "923200402588"; // your WhatsApp number

  const openWhatsApp = (service) => {
    const message = `Hello! I'm interested in your ${service} service. Please provide more details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      title: "Visa Services",
      desc: "Tourist, Business, and Student Visas",
      img: visaImg, // visa image
    },
    {
      title: "Passport Assistance",
      desc: "New, Renewal, and Lost Passport Support",
      img: passportImg, // Passport image
    },
    {
      title: "Translations",
      desc: "Certified document translations",
      img:translationImg, // Documents image
    },
    {
      title: "Travel Services",
      desc: "Flight booking and insurance",
      img:travelImg, // Travel image
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold">Visa & Travel Services</h1>
            <p className="lead mt-3">
              One Stop Solution for Visa, Passport & Travel Services
            </p>
            <div className="mt-4">
              <button className="btn btn-light me-2" onClick={() => openWhatsApp("Visa Services")}>
                Apply Now
              </button>
              <button
                className="btn btn-outline-light"
                onClick={() => openWhatsApp("General Inquiry")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card service-card shadow-sm h-100">
                  <img src={service.img} alt={service.title} className="card-img-top service-img" />
                  <div className="card-body">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => openWhatsApp(service.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">How It Works</h2>
          <div className="row justify-content-center">
            {[
              "Submit Your Request",
              "Verify Your Documents",
              "Processing & Updates",
              "Receive Your Visa/Passport",
            ].map((step, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="step-box p-4 shadow-sm">
                  <div className="step-number">{index + 1}</div>
                  <p className="fw-semibold mt-2">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Trusted by Thousands</h2>
          <p className="text-muted mb-4">
            Over 10,000 successful applications with 98% visa approval rate.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="trust-box shadow-sm p-3 rounded bg-white">
                <h4 className="fw-bold text-primary">98%</h4>
                <p>Visa Success Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="trust-box shadow-sm p-3 rounded bg-white">
                <h4 className="fw-bold text-primary">10,000+</h4>
                <p>Clients Served</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="trust-box shadow-sm p-3 rounded bg-white">
                <h4 className="fw-bold text-primary">Certified</h4>
                <p>Licensed Travel Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
