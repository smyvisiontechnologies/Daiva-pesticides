import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Added states for loading and success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".contact-animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;

    // Only allow numbers in the phone field and limit to 10 digits max
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Indian Phone Number Validation (Must start with 6, 7, 8, or 9 and be exactly 10 digits)
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    
    if (!indianPhoneRegex.test(formData.phone)) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid 10-digit Indian phone number.",
      });
      return; // Stop form submission if phone is invalid
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    const scriptURL = "https://script.google.com/macros/s/AKfycbyavbQhUMLqDU7lfi_IQKosFDYMdJZBDPaSX15bRkZux49FbocGJaVJvbPuCjGRnsuI/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Required to prevent CORS blocking from Google
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: "Daiva Pesticides Contact Page",
        }),
      });

      // Show success message and clear form
      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ==========================================
          SEO STRUCTURED DATA - CONTACT PAGE
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Daiva Pesticides - Agricultural Solutions in Karnataka",
          "url": "https://www.daivapesticides.com/contact",
          "description": "Contact Daiva Pesticides for agricultural products, crop protection solutions, dealership opportunities and farming support in Karnataka. Call +91-8277650250 or WhatsApp us.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Daiva Pesticides",
            "url": "https://www.daivapesticides.com/",
            "telephone": "+91-8277650250",
            "email": "daivapesticides@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karnataka",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-8277650250",
                "contactType": "customer service",
                "availableLanguage": ["English", "Kannada", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-8277650250",
                "contactType": "sales",
                "availableLanguage": ["English", "Kannada", "Hindi"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/share/18Eoe3afBa/",
              "https://www.instagram.com/daiva_pesticides?igsh=bnZqaHFjNHk2ZTE3",
              "https://youtube.com/@daivapesticides?si=Hjp0mSGb50kDIlde"
            ]
          }
        })}
      </script>

      {/* ==========================================
          SEO STRUCTURED DATA - BREADCRUMB
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.daivapesticides.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact Us",
              "item": "https://www.daivapesticides.com/contact"
            }
          ]
        })}
      </script>

      {/* ==========================================
          HIDDEN SEO CONTENT - NOT VISIBLE TO USERS
          BUT READABLE BY GOOGLE AND AI CRAWLERS
      ========================================== */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
          ariaHidden: "true",
          tabIndex: "-1",
        }}
      >
        <h2>Contact Daiva Pesticides - Agricultural Solutions in Karnataka</h2>
        <h3>Call +91-8277650250 for Crop Protection Products and Farming Solutions</h3>
        <p>
          Contact Daiva Pesticides for agricultural products, crop protection solutions, 
          pesticides, insecticides, fungicides and farming support in Karnataka, India.
        </p>
        <p>
          Our team is available Monday to Saturday, 9 AM to 6 PM IST. Call us at 
          +91-8277650250 or WhatsApp us for product enquiries, dealership opportunities, 
          farmer support and agricultural solutions in Karnataka.
        </p>
        <p>
          Email: daivapesticides@gmail.com
        </p>
        <p>
          Serving farmers and dealers across Bangalore, Mysore, Hubli, Belgaum, Mangalore, 
          Shimoga, Davangere, Bellary, Tumkur, Hassan, Mandya and all districts of Karnataka.
        </p>
        <ul>
          <li>Contact Daiva Pesticides Karnataka</li>
          <li>Agricultural Products Enquiry</li>
          <li>Crop Protection Solutions Contact</li>
          <li>Pesticides Dealer Enquiry Karnataka</li>
          <li>Farming Support Contact Number</li>
          <li>WhatsApp Agricultural Products</li>
          <li>Best Pesticides Company Contact</li>
        </ul>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #102a43;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .contact-container {
          width: 90%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* ==========================================
           ANIMATIONS
        ========================================== */

        .contact-animate {
          opacity: 0;
          transform: translateY(45px);

          transition:
            opacity 0.75s ease,
            transform 0.75s ease;
        }

        .contact-animate.contact-show {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-left-animation {
          transform: translateX(-55px);
        }

        .contact-right-animation {
          transform: translateX(55px);
        }

        .contact-left-animation.contact-show,
        .contact-right-animation.contact-show {
          transform: translateX(0);
        }

        /* ==========================================
           HERO
        ========================================== */

        .contact-hero {
          position: relative;

          min-height: 100vh; 

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            linear-gradient(
              90deg,
              rgba(5, 31, 76, 0.96) 0%,
              rgba(5, 31, 76, 0.84) 50%,
              rgba(5, 31, 76, 0.35) 100%
            ),
            url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80")
            center / cover no-repeat;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;

          max-width: 800px;
        }

        .contact-small-title {
          display: inline-flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 18px;

          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .contact-small-line {
          width: 40px;
          height: 3px;

          background: #fbb515;

          border-radius: 20px;
        }

        .contact-hero h1 {
          margin: 0;

          max-width: 800px;

          color: #ffffff;

          font-size: clamp(50px, 7vw, 82px);

          font-weight: 850;

          line-height: 1.03;

          letter-spacing: -3px;
        }

        .contact-hero h1 span {
          display: block;

          color: #72c453;
        }

        .contact-hero p {
          max-width: 670px;

          margin: 24px 0 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 17px;

          line-height: 1.85;
        }

        /* ==========================================
           MAIN CONTACT
        ========================================== */

        .contact-main-section {
          padding: 110px 0;

          background: #f7faf6;
        }

        .contact-main-grid {
          display: grid;

          grid-template-columns: 0.85fr 1.15fr;

          align-items: start;

          gap: 75px;
        }

        .contact-section-label {
          display: inline-block;

          margin-bottom: 12px;

          color: #5db747;

          font-size: 13px;
          font-weight: 850;

          letter-spacing: 2.2px;

          text-transform: uppercase;
        }

        .contact-info h2 {
          margin: 0 0 20px;

          color: #092b68;

          font-size: clamp(36px, 5vw, 55px);

          font-weight: 850;

          line-height: 1.12;

          letter-spacing: -2px;
        }

        .contact-info > p {
          margin: 0 0 35px;

          color: #65778b;

          font-size: 16px;

          line-height: 1.9;
        }

        /* ==========================================
           CONTACT CARDS
        ========================================== */

        .contact-details {
          display: flex;

          flex-direction: column;

          gap: 15px;
        }

        .contact-detail-card {
          display: flex;
          align-items: center;

          gap: 18px;

          padding: 20px 22px;

          background: #ffffff;

          border: 1px solid rgba(9, 43, 104, 0.07);

          border-radius: 15px;

          text-decoration: none;

          box-shadow: 0 8px 30px rgba(9, 43, 104, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .contact-detail-card:hover {
          transform: translateX(6px);

          border-color: rgba(93, 183, 71, 0.25);

          box-shadow: 0 15px 35px rgba(9, 43, 104, 0.09);
        }

        .contact-detail-icon {
          width: 54px;
          height: 54px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(93, 183, 71, 0.11);

          color: #5db747;

          border-radius: 13px;

          font-size: 20px;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .contact-detail-card:hover .contact-detail-icon {
          background: #5db747;
          color: #ffffff;

          transform: rotate(-5deg);
        }

        .contact-detail-content {
          min-width: 0;
        }

        .contact-detail-content span {
          display: block;

          margin-bottom: 5px;

          color: #8592a2;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .contact-detail-content strong {
          display: block;

          color: #092b68;

          font-size: 16px;
          font-weight: 750;

          overflow-wrap: anywhere;
        }

        /* ==========================================
           SOCIAL LINKS
        ========================================== */

        .contact-social-section {
          margin-top: 35px;
        }

        .contact-social-section h3 {
          margin: 0 0 15px;

          color: #092b68;

          font-size: 17px;
          font-weight: 800;
        }

        .contact-social-links {
          display: flex;
          align-items: center;

          gap: 10px;

          flex-wrap: wrap;
        }

        .contact-social-link {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          background: #092b68;
          color: #ffffff;

          border: none;
          outline: none;

          border-radius: 11px;

          font-family: inherit;
          font-size: 17px;

          cursor: pointer;
          text-decoration: none;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .contact-social-link:hover {
          background: #5db747;
          color: #ffffff;

          transform: translateY(-5px);
        }

        .contact-social-link:focus-visible {
          outline: 3px solid rgba(93, 183, 71, 0.3);

          outline-offset: 3px;
        }

        /* ==========================================
           FORM
        ========================================== */

        .contact-form-wrapper {
          padding: 45px 42px;

          background: #ffffff;

          border: 1px solid rgba(9, 43, 104, 0.07);

          border-radius: 24px;

          box-shadow: 0 20px 60px rgba(9, 43, 104, 0.09);
        }

        .contact-form-header {
          margin-bottom: 30px;
        }

        .contact-form-header h3 {
          margin: 0 0 9px;

          color: #092b68;

          font-size: 30px;
          font-weight: 850;

          letter-spacing: -0.7px;
        }

        .contact-form-header p {
          margin: 0;

          color: #718195;

          font-size: 14px;

          line-height: 1.7;
        }

        .contact-form {
          display: flex;

          flex-direction: column;

          gap: 20px;
        }

        .contact-form-row {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .contact-form-group {
          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .contact-form-group label {
          color: #263f5c;

          font-size: 13px;
          font-weight: 750;
        }

        .contact-input-wrapper {
          position: relative;
        }

        .contact-input-wrapper i {
          position: absolute;

          top: 50%;
          left: 16px;

          transform: translateY(-50%);

          color: #8c9aab;

          font-size: 14px;

          pointer-events: none;
        }

        .contact-form-group input,
        .contact-form-group select,
        .contact-form-group textarea {
          width: 100%;

          outline: none;

          background: #f8fafb;

          color: #263f5c;

          border: 1px solid #e4e9ef;

          border-radius: 10px;

          font-family: inherit;

          font-size: 14px;

          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-form-group input,
        .contact-form-group select {
          height: 52px;

          padding: 0 15px 0 43px;
        }

        .contact-form-group textarea {
          min-height: 145px;

          padding: 15px;

          resize: vertical;

          line-height: 1.6;
        }

        .contact-form-group input:focus,
        .contact-form-group select:focus,
        .contact-form-group textarea:focus {
          background: #ffffff;

          border-color: #5db747;

          box-shadow: 0 0 0 4px rgba(93, 183, 71, 0.1);
        }

        .contact-submit-btn {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          padding: 16px 25px;

          margin-top: 5px;

          border: none;

          background: #5db747;
          color: #ffffff;

          border-radius: 10px;

          cursor: pointer;

          font-family: inherit;

          font-size: 15px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-submit-btn:hover {
          background: #4fa43b;

          transform: translateY(-3px);

          box-shadow: 0 13px 30px rgba(93, 183, 71, 0.28);
        }

        .contact-submit-btn:disabled {
          background: #a3d496;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .form-status-message {
          margin-top: 15px;
          padding: 12px 15px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .form-status-message.success {
          background-color: #eef9ec;
          color: #2b7a1a;
          border: 1px solid #c3e8bc;
        }

        .form-status-message.error {
          background-color: #fce8e8;
          color: #c92a2a;
          border: 1px solid #f3c2c2;
        }

        .contact-form-note {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          margin: 15px 0 0;

          color: #8794a4;

          font-size: 11px;

          text-align: center;
        }

        .contact-form-note i {
          color: #5db747;
        }

        /* ==========================================
           QUICK CONNECT
        ========================================== */

        .quick-connect-section {
          padding: 100px 0;

          background: #ffffff;
        }

        .quick-connect-heading {
          max-width: 720px;

          margin: 0 auto 50px;

          text-align: center;
        }

        .quick-connect-heading h2 {
          margin: 0 0 15px;

          color: #092b68;

          font-size: clamp(34px, 4.5vw, 48px);

          font-weight: 850;

          letter-spacing: -1.5px;
        }

        .quick-connect-heading p {
          max-width: 620px;

          margin: 0 auto;

          color: #6b7d91;

          font-size: 16px;

          line-height: 1.8;
        }

        .quick-connect-grid {
          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 22px;
        }

        .quick-connect-card {
          position: relative;

          padding: 35px 28px;

          text-align: center;

          background: #ffffff;

          border: 1px solid rgba(9, 43, 104, 0.08);

          border-radius: 18px;

          text-decoration: none;

          overflow: hidden;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .quick-connect-card::before {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 4px;

          background: linear-gradient(90deg, #5db747, #fbb515);

          transform: scaleX(0);

          transition: transform 0.35s ease;
        }

        .quick-connect-card:hover {
          transform: translateY(-8px);

          border-color: rgba(93, 183, 71, 0.25);

          box-shadow: 0 20px 45px rgba(9, 43, 104, 0.09);
        }

        .quick-connect-card:hover::before {
          transform: scaleX(1);
        }

        .quick-connect-icon {
          width: 64px;
          height: 64px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 auto 20px;

          background: rgba(93, 183, 71, 0.1);

          color: #5db747;

          border-radius: 16px;

          font-size: 25px;
        }

        .quick-connect-card h3 {
          margin: 0 0 10px;

          color: #092b68;

          font-size: 20px;
          font-weight: 800;
        }

        .quick-connect-card p {
          margin: 0;

          color: #718195;

          font-size: 13px;

          line-height: 1.7;
        }

        /* ==========================================
           CTA
        ========================================== */

        .contact-cta {
          padding: 100px 20px;

          text-align: center;

          background: linear-gradient(135deg, #061f4d, #092b68);
        }

        .contact-cta-content {
          max-width: 760px;

          margin: 0 auto;
        }

        .contact-cta .contact-section-label {
          color: #fbb515;
        }

        .contact-cta h2 {
          margin: 0 0 18px;

          color: #ffffff;

          font-size: clamp(36px, 5vw, 54px);

          font-weight: 850;

          letter-spacing: -2px;
        }

        .contact-cta p {
          max-width: 650px;

          margin: 0 auto 30px;

          color: rgba(255, 255, 255, 0.72);

          font-size: 16px;

          line-height: 1.85;
        }

        .contact-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 15px 27px;

          background: #25D366;
          color: #ffffff;

          border-radius: 9px;

          text-decoration: none;

          font-size: 15px;
          font-weight: 750;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .contact-whatsapp-btn:hover {
          background: #1da851;

          transform: translateY(-3px);
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media screen and (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media screen and (max-width: 650px) {
          .contact-container {
            width: calc(100% - 30px);
          }

          .contact-hero {
            min-height: 100vh;
          }

          .contact-hero h1 {
            font-size: 48px;

            letter-spacing: -2px;
          }

          .contact-hero p {
            font-size: 15px;
          }

          .contact-main-section,
          .quick-connect-section {
            padding: 70px 0;
          }

          .contact-main-grid {
            gap: 40px;
          }

          .contact-form-wrapper {
            padding: 30px 20px;

            border-radius: 18px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-detail-card {
            padding: 17px 15px;
          }

          .contact-detail-icon {
            width: 47px;
            height: 47px;

            font-size: 17px;
          }

          .contact-detail-content strong {
            font-size: 13px;
          }

          .quick-connect-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 12px;
          }

          .quick-connect-card {
            padding: 25px 15px;
          }

          .quick-connect-card:last-child {
            grid-column: 1 / -1;
          }

          .quick-connect-icon {
            width: 53px;
            height: 53px;

            font-size: 21px;
          }

          .quick-connect-card h3 {
            font-size: 16px;
          }

          .quick-connect-card p {
            font-size: 12px;
          }

          .contact-cta {
            padding: 75px 20px;
          }
        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media screen and (max-width: 400px) {
          .contact-hero h1 {
            font-size: 42px;
          }

          .contact-detail-content strong {
            font-size: 12px;
          }

          .contact-social-link {
            width: 42px;
            height: 42px;
          }

          .quick-connect-card {
            padding: 22px 10px;
          }

          .quick-connect-card h3 {
            font-size: 14px;
          }

          .quick-connect-card p {
            font-size: 10.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <main className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-container">
            <div className="contact-hero-content">
              <div className="contact-small-title">
                <span className="contact-small-line"></span>
                Contact Daiva Pesticides
              </div>

              <h1>
                Let's Connect.
                <span>Let's Grow Together.</span>
              </h1>

              <p>
                Have questions about our agricultural solutions or want to
                connect with our team? Reach out to Daiva Pesticides and start a
                conversation with us.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT */}
        <section className="contact-main-section">
          <div className="contact-container">
            <div className="contact-main-grid">
              {/* CONTACT INFO */}
              <div className="contact-info contact-animate contact-left-animation">
                <span className="contact-section-label">Get In Touch</span>

                <h2>We're Here to Help You.</h2>

                <p>
                  Whether you want to know more about our agricultural products,
                  need support or simply want to connect, our team is ready to
                  hear from you.
                </p>

                <div className="contact-details">
                  <a
                    href="tel:+918277650250"
                    className="contact-detail-card"
                  >
                    <div className="contact-detail-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className="contact-detail-content">
                      <span>Call Us</span>
                      <strong>+91 8277650250</strong>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918277650250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-card"
                  >
                    <div className="contact-detail-icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>

                    <div className="contact-detail-content">
                      <span>WhatsApp</span>
                      <strong>Chat With Our Team</strong>
                    </div>
                  </a>

                  <a
                    href="mailto:daivapesticides@gmail.com"
                    className="contact-detail-card"
                  >
                    <div className="contact-detail-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>

                    <div className="contact-detail-content">
                      <span>Email Us</span>
                      <strong>daivapesticides@gmail.com</strong>
                    </div>
                  </a>
                </div>

                {/* SOCIAL BUTTONS */}
                <div className="contact-social-section">
                  <h3>Follow Us</h3>

                  <div className="contact-social-links">
                    <a
                      href="https://www.instagram.com/daiva_pesticides?igsh=bnZqaHFjNHk2ZTE3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a
                      href="https://www.facebook.com/share/18Eoe3afBa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://youtube.com/@daivapesticides?si=Hjp0mSGb50kDIlde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="YouTube"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>

                    <a
                      href="https://wa.me/918277650250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label="WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="contact-form-wrapper contact-animate contact-right-animation">
                <div className="contact-form-header">
                  <h3>Send Us a Message</h3>

                  <p>
                    Fill in your details below and our team will get back to you
                    shortly.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="name">Your Name *</label>

                      <div className="contact-input-wrapper">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="phone">Phone Number *</label>

                      <div className="contact-input-wrapper">
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="e.g. 8277650250"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength="10"
                          required
                        />
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="email">Email Address</label>

                      <div className="contact-input-wrapper">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="subject">I'm Interested In</label>

                      <div className="contact-input-wrapper">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="Product Enquiry">Product Enquiry</option>
                          <option value="Dealership Enquiry">
                            Dealership Enquiry
                          </option>
                          <option value="Farmer Support">Farmer Support</option>
                          <option value="Business Enquiry">
                            Business Enquiry
                          </option>
                          <option value="General Enquiry">
                            General Enquiry
                          </option>
                        </select>
                        <i className="fa-solid fa-seedling"></i>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="message">Your Message *</label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <i className="fa-solid fa-paper-plane"></i>}
                  </button>
                  
                  {statusMessage.text && (
                    <div className={`form-status-message ${statusMessage.type}`}>
                      {statusMessage.text}
                    </div>
                  )}
                </form>

                <p className="contact-form-note">
                  <i className="fa-solid fa-shield-halved"></i>
                  Your information is kept secure and confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONNECT */}
        <section className="quick-connect-section">
          <div className="contact-container">
            <div className="quick-connect-heading contact-animate">
              <span className="contact-section-label">Connect With Us</span>
              <h2>Choose the Way That Works for You.</h2>
              <p>
                Our team is just a call, message or email away. Connect with us
                for agricultural product information, support and business
                enquiries.
              </p>
            </div>

            <div className="quick-connect-grid">
              <a
                href="tel:+918277650250"
                className="quick-connect-card contact-animate"
              >
                <div className="quick-connect-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h3>Call Our Team</h3>
                <p>Speak directly with our team for enquiries and assistance.</p>
              </a>

              <a
                href="https://wa.me/918277650250"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-connect-card contact-animate"
              >
                <div className="quick-connect-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h3>Chat on WhatsApp</h3>
                <p>
                  Send us a quick message and connect directly with our team.
                </p>
              </a>

              <a
                href="mailto:daivapesticides@gmail.com"
                className="quick-connect-card contact-animate"
              >
                <div className="quick-connect-icon">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <h3>Send an Email</h3>
                <p>
                  Write to us for detailed product, support or business
                  enquiries.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contact-cta">
          <div className="contact-cta-content contact-animate">
            <span className="contact-section-label">
              We're Ready to Connect
            </span>
            <h2>Let's Build Better Agriculture Together.</h2>
            <p>
              Connect with Daiva Pesticides to learn more about our agricultural
              solutions and discover how we can support farmers, dealers and
              agricultural communities.
            </p>
            <a
              href="https://wa.me/918277650250"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <i className="fa-brands fa-whatsapp"></i>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;