// import React from "react";
// import { Carousel } from "react-bootstrap";
import LicenseCarousel from "../components/LicenseCarousel";
import '../styles/About.css';

// Import category images
import cert1  from "../assets/images/cert1.jpg";
import cert2  from "../assets/images/cert2.jpg";
import cert3  from "../assets/images/cert3.jpg";
import cert4  from "../assets/images/cert4.jpg";

// choose
import choose1 from "../assets/images/choose1.jpg";
import choose2 from "../assets/images/choose2.jpg";
import choose3 from "../assets/images/choose3.jpg";

const certificates = [
  { image: cert1, title: "Official License", description: "Recognized by Government Authority" },
  { image: cert2, title: "ISO Certification", description: "Quality & Compliance Approved" },
  { image: cert3, title: "Authorized Partner", description: "Trusted by Travel Authorities" },
  { image: cert4, title: "Certified Translators", description: "Experts in legal, academic, and medical document translations" },
];

const choose = [
  { image: choose1,title: "Fast & Reliable", description: "Get your documents processed quickly without hassle." },
  { image: choose2,title: "Global Reach", description: "Your data and documents are handled with full confidentiality." },
  { image: choose3,title: "Ready to Start Your Journey?", description: "We provide services for clients traveling to countries around the world." },
]
const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Visa & Travel Services</h1>
        <p>Your trusted partner for visas, passports, and travel services worldwide.</p>
      </section>

      {/* Company Background */}
      <section className="company-background">
        <h2>Our Mission & Vision</h2>
        <p>
          At Visa & Travel Services, we aim to simplify international travel. With years of
          experience, we help clients get visas, passports, certified translations, and
          other travel-related services efficiently and securely.
        </p>
      </section>

      {/* Licenses & Certifications Carousel */}
      <section className="certifications-carousel">
        <h2>Our Certifications & Achievements</h2>
      {/*  Change interval to control slide speed */}
      <LicenseCarousel certificates={certificates} interval={4000} />

      </section>

      {/* Why Choose Us */}
     {/* Why Choose Us */}
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features">
        {choose.map((item, index) => (
          <div className="feature card" key={index}>
            <img src={item.image} alt={item.title} className="card-img-top" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Start Your Journey?</h2>
        <a href="/contact" className="btn-cta">Contact Us Now</a>
      </section>

    </div>
  );
};

export default About;
