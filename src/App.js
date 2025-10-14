import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar inside Router */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          {/* Optional: catch all unknown routes */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer /> {/* Footer inside Router */}
       <WhatsAppButton />  {/* Floating WhatsApp Chat */}
    </Router>
  );
}

export default App;
