import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background:
            linear-gradient(
              135deg,
              #071f4d 0%,
              #092b68 55%,
              #0d377f 100%
            );

          color: #ffffff;

          padding:
            70px
            0
            0;

          position: relative;

          overflow: hidden;
        }

        .footer::before {
          content: "";

          position: absolute;

          width: 280px;
          height: 280px;

          border-radius: 50%;

          background:
            rgba(93, 183, 71, 0.08);

          top: -120px;
          right: -100px;
        }

        .footer::after {
          content: "";

          position: absolute;

          width: 220px;
          height: 220px;

          border-radius: 50%;

          background:
            rgba(251, 181, 21, 0.06);

          bottom: -120px;
          left: -70px;
        }

        .footer-container {
          width: 90%;

          max-width: 1250px;

          margin: 0 auto;

          position: relative;

          z-index: 2;
        }

        .footer-grid {
          display: grid;

          grid-template-columns:
            1.4fr
            1fr
            1fr
            1fr;

          gap: 45px;

          padding-bottom: 50px;
        }

        /* =========================
           BRAND
        ========================= */

        .footer-brand h2 {
          margin:
            0
            0
            16px;

          font-size: 30px;

          font-weight: 800;

          color: #ffffff;

          letter-spacing: -0.5px;
        }

        .footer-brand h2 span {
          color: #76c653;
        }

        .footer-brand p {
          margin: 0;

          max-width: 380px;

          color:
            rgba(255, 255, 255, 0.72);

          font-size: 14px;

          line-height: 1.9;
        }

        /* =========================
           TITLES
        ========================= */

        .footer-title {
          margin:
            0
            0
            20px;

          color: #ffffff;

          font-size: 17px;

          font-weight: 800;

          position: relative;
        }

        .footer-title::after {
          content: "";

          display: block;

          width: 35px;
          height: 3px;

          margin-top: 8px;

          background:
            linear-gradient(
              90deg,
              #5db747,
              #fbb515
            );

          border-radius: 20px;
        }

        /* =========================
           QUICK LINKS
        ========================= */

        .footer-links {
          list-style: none;

          margin: 0;

          padding: 0;

          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .footer-links li {
          margin: 0;
        }

        .footer-links a {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color:
            rgba(255, 255, 255, 0.75);

          text-decoration: none;

          font-size: 14px;

          font-weight: 500;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .footer-links a i {
          color: #5db747;

          font-size: 11px;
        }

        .footer-links a:hover {
          color: #ffffff;

          transform:
            translateX(5px);
        }

        /* =========================
           CONTACT
        ========================= */

        .footer-contact-item {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 15px;
        }

        .footer-contact-icon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(255, 255, 255, 0.08);

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 12px;

          color: #fbb515;

          font-size: 15px;
        }

        .footer-contact-text span {
          display: block;

          margin-bottom: 3px;

          color:
            rgba(255, 255, 255, 0.5);

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .footer-contact-text a {
          color: #ffffff;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;

          transition: color 0.3s ease;
        }

        .footer-contact-text a:hover {
          color: #76c653;
        }

        /* =========================
           SOCIAL LINKS
        ========================= */

        .social-links {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;
        }

        .social-link {
          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #ffffff;

          text-decoration: none;

          background:
            rgba(255, 255, 255, 0.08);

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 12px;

          font-size: 17px;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .social-link:hover {
          background: #5db747;

          color: #ffffff;

          transform:
            translateY(-4px);
        }

        /* =========================
           BOTTOM FOOTER
        ========================= */

        .footer-bottom {
          border-top:
            1px solid
            rgba(255, 255, 255, 0.1);

          padding:
            22px
            0;

          position: relative;

          z-index: 2;
        }

        .footer-bottom-content {
          width: 90%;

          max-width: 1250px;

          margin: 0 auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;
        }

        .copyright {
          margin: 0;

          color:
            rgba(255, 255, 255, 0.62);

          font-size: 13px;
        }

        .developer-text {
          margin: 0;

          color:
            rgba(255, 255, 255, 0.68);

          font-size: 13px;
        }

        .developer-text a {
          color: #fbb515;

          text-decoration: none;

          font-weight: 800;

          letter-spacing: 0.3px;

          transition: color 0.3s ease;
        }

        .developer-text a:hover {
          color: #76c653;
        }

        /* =========================
           TABLET
        ========================= */

        @media screen and (max-width: 950px) {

          .footer-grid {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 40px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media screen and (max-width: 600px) {

          .footer {
            padding-top: 55px;
          }

          .footer-grid {
            grid-template-columns: 1fr;

            gap: 35px;

            padding-bottom: 40px;
          }

          .footer-brand h2 {
            font-size: 27px;
          }

          .footer-bottom-content {
            flex-direction: column;

            text-align: center;

            gap: 8px;
          }

        }
      `}</style>

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-grid">

            {/* Brand */}

            <div className="footer-brand">

              <h2>
                Daiva <span>Pesticides</span>
              </h2>

              <p>
                Supporting farmers with reliable agricultural
                solutions focused on crop protection, better
                productivity and healthier farming.
              </p>

            </div>


            {/* Quick Links */}

            <div>

              <h3 className="footer-title">
                Quick Links
              </h3>

              <ul className="footer-links">

                <li>
                  <Link to="/">
                    <i className="fa-solid fa-chevron-right"></i>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    <i className="fa-solid fa-chevron-right"></i>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/products">
                    <i className="fa-solid fa-chevron-right"></i>
                    Products
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    <i className="fa-solid fa-chevron-right"></i>
                    Contact
                  </Link>
                </li>

              </ul>

            </div>


            {/* Contact */}

            <div>

              <h3 className="footer-title">
                Contact
              </h3>

              <div className="footer-contact-item">

                <div className="footer-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div className="footer-contact-text">

                  <span>
                    Call Us
                  </span>

                  <a href="tel:+918277650250">
                    +91 8277650250
                  </a>

                </div>

              </div>

            </div>


            {/* Social Links */}

            <div>

              <h3 className="footer-title">
                Follow Us
              </h3>

              <div className="social-links">

                <a
                  href="https://www.facebook.com/share/18Eoe3afBa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="https://www.instagram.com/daiva_pesticides?igsh=bnZqaHFjNHk2ZTE3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                  href="https://youtube.com/@daivapesticides?si=Hjp0mSGb50kDIlde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>

                <a
                  href="https://wa.me/918277650250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Footer */}

        <div className="footer-bottom">

          <div className="footer-bottom-content">

            <p className="copyright">
              © {currentYear} Daiva Pesticides. All Rights Reserved.
            </p>

            <p className="developer-text">
              Developed by{" "}
              <a
                href="https://smyvisiontechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;