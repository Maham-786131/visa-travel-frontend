import React from "react";
import "../styles/whatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // 👇 Replace this with your actual WhatsApp number (no + or spaces)
  const whatsappNumber = "923001234567";

  const handleClick = () => {
    const message = "Hello! I’d like to know more about your visa & travel services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={handleClick} title="Chat on WhatsApp">
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
