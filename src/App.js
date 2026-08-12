import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Scroll to Top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// WhatsApp Button component
function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = `Hi Daiva Pesticides! 

I would like to enquire about your agricultural products and crop nutrition solutions.

Please share your product catalog and pricing.`;

    window.open(
      `https://wa.me/918277650250?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="jk-whatsapp-float" onClick={openWhatsApp}>
      <FontAwesomeIcon icon={faWhatsapp} />
      <span className="whatsapp-tooltip">Chat with us!</span>
      <span className="whatsapp-badge">1</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />

      <style>{`
        /* =====================================================
           FLOATING WHATSAPP BUTTON
        ===================================================== */

        .jk-whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          outline: none;
          animation: jkWhatsAppPulse 2s ease-in-out infinite;
        }

        .jk-whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 35px rgba(37, 211, 102, 0.5);
          animation: none;
        }

        .jk-whatsapp-float:active {
          transform: scale(0.95);
        }

        /* Pulsing animation */
        @keyframes jkWhatsAppPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        /* Tooltip */
        .jk-whatsapp-float .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-family: "Inter", sans-serif;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .jk-whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          right: 75px;
        }

        /* Tooltip arrow */
        .jk-whatsapp-float .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-left: 6px solid rgba(0, 0, 0, 0.8);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        /* Notification badge */
        .jk-whatsapp-float .whatsapp-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff3b30;
          color: white;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Inter", sans-serif;
          animation: jkBadgePop 0.5s ease;
        }

        @keyframes jkBadgePop {
          0% {
            transform: scale(0);
          }
          70% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 768px) {
          .jk-whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 54px;
            height: 54px;
            font-size: 26px;
          }

          .jk-whatsapp-float .whatsapp-tooltip {
            display: none;
          }
          
          .jk-whatsapp-float .whatsapp-badge {
            width: 18px;
            height: 18px;
            font-size: 9px;
            top: -4px;
            right: -4px;
          }
        }

        @media (max-width: 480px) {
          .jk-whatsapp-float {
            bottom: 16px;
            right: 16px;
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
          
          .jk-whatsapp-float .whatsapp-badge {
            width: 16px;
            height: 16px;
            font-size: 8px;
            top: -3px;
            right: -3px;
          }
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;