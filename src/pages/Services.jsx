import React from "react";
import "../styles/services.css";

// Import category images
import visaImg from "../assets/images/visa.jpg";
import passportImg from "../assets/images/passport.jpg";
import translationImg from "../assets/images/translation.jpg";
import travelImg from "../assets/images/travel.jpg";

const Services = () => {
  // 👇 Replace this number with your actual WhatsApp number (with country code)
  const whatsappNumber = "923001234567"; // example: 92 = Pakistan, 3001234567 = number

  // function to open WhatsApp with custom message
  const handleWhatsAppClick = (serviceTitle) => {
    const message = `Hello! I'm interested in your ${serviceTitle}. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const serviceCategories = [
    {
      title: "Visa Services",
      emoji: "✈️",
      img: visaImg,
      list: [
        "Tourist Visa",
        "Business Visa",
        "Student Visa",
        "Work Visa",
        "Family/Dependent Visa",
        "Immigration Services",
      ],
    },
    {
      title: "Passport Services",
      emoji: "🛂",
      img: passportImg,
      list: [
        "New Passport Applications",
        "Passport Renewals",
        "Lost/Damaged Passport Assistance",
      ],
    },
    {
      title: "Documentation & Translation",
      emoji: "📑",
      img: translationImg,
      list: [
        "Certified Translations (Legal, Academic, Medical)",
        "Notarization Services",
        "Legalization / Apostille Services",
      ],
    },
    {
      title: "Travel Services",
      emoji: "🌍",
      img: travelImg,
      list: [
        "Flight & Hotel Bookings",
        "Travel Insurance",
        "Holiday Packages",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-header text-center">
        <h1>Our Services</h1>
        <p>
          We provide reliable assistance for visas, passports, translations, and travel planning —
          making your journey stress-free and secure.
        </p>
      </section>

      <section className="services-grid">
        {serviceCategories.map((category, index) => (
          <div
            className="service-box"
            key={index}
            onClick={() => handleWhatsAppClick(category.title)}
            style={{ cursor: "pointer" }}
          >
            <div className="service-image">
              <img src={category.img} alt={category.title} />
              <div className="service-overlay">
                <h2>
                  {category.emoji} {category.title}
                </h2>
              </div>
            </div>
            <ul>
              {category.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cta-section text-center">
        <h3>Ready to Apply?</h3>
        <p>Start your visa or travel process today with trusted professionals.</p>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleWhatsAppClick("Visa & Travel Services")}
        >
          Apply Now on WhatsApp
        </button>
      </section>
    </div>
  );
};

export default Services;
