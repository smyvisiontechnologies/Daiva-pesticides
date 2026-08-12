import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* ==========================================
           HEADER
        ========================================== */

        .navbar-header {
          width: 100%;

          position: sticky;
          top: 0;

          z-index: 1000;

          background: #ffffff;

          border-bottom:
            1px solid
            rgba(9, 43, 104, 0.06);

          box-shadow:
            0 3px 18px
            rgba(9, 43, 104, 0.05);
        }

        .navbar {
          width: 100%;
          max-width: 1600px;

          height: 120px;

          margin: 0 auto;

          padding:
            0
            3%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;
        }

        /* ==========================================
           LOGO
        ========================================== */

        .navbar-logo {
          width: 310px;
          height: 120px;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          flex-shrink: 0;

          overflow: hidden;

          text-decoration: none;
        }

        .navbar-logo img {
          display: block;

          width: 300px;
          height: 112px;

          object-fit: contain;

          object-position: left center;

          margin: 0;

          transform: none;
        }

        /* ==========================================
           NAVIGATION LINKS
        ========================================== */

        .nav-links {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 32px;

          flex: 1;

          list-style: none;

          margin: 0;

          padding: 0;
        }

        .nav-links li {
          margin: 0;

          padding: 0;
        }

        .nav-link {
          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          padding:
            44px
            4px
            37px;

          color: #092b68;

          text-decoration: none;

          font-size: 15px;

          font-weight: 800;

          line-height: 1;

          text-transform: uppercase;

          white-space: nowrap;

          transition:
            color 0.3s ease;
        }

        .nav-link i {
          display: none;
        }

        .nav-link:hover {
          color: #16832b;
        }

        /* ACTIVE UNDERLINE */

        .nav-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 22px;

          width: 0;
          height: 3px;

          background: #16832b;

          border-radius: 20px;

          transform:
            translateX(-50%);

          transition:
            width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 70%;
        }

        .nav-link.active-link {
          color: #16832b;
        }

        .nav-link.active-link::after {
          width: 70%;
        }

        /* ==========================================
           DESKTOP PHONE
        ========================================== */

        .navbar-phone {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          flex-shrink: 0;

          min-width: 200px;

          padding:
            14px
            22px;

          background: #092b68;

          color: #ffffff;

          border-radius: 30px;

          text-decoration: none;

          font-size: 14px;

          font-weight: 750;

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .navbar-phone:hover {
          background: #16832b;

          transform:
            translateY(-2px);

          box-shadow:
            0 10px 25px
            rgba(9, 43, 104, 0.18);
        }

        /* ==========================================
           HAMBURGER
        ========================================== */

        .hamburger {
          width: 54px;
          height: 54px;

          display: none;

          align-items: center;

          justify-content: center;

          flex-direction: column;

          gap: 7px;

          padding: 0;

          background: transparent;

          border: none;

          cursor: pointer;
        }

        .hamburger span {
          display: block;

          width: 32px;
          height: 3px;

          background: #092b68;

          border-radius: 20px;

          transition:
            transform 0.35s ease,
            opacity 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform:
            translateY(10px)
            rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform:
            translateY(-10px)
            rotate(-45deg);
        }

        /* ==========================================
           MOBILE CALL BUTTON
        ========================================== */

        .mobile-call-button {
          display: none;

          width: 54px;
          height: 54px;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          background: #092b68;

          color: #ffffff;

          border-radius: 50%;

          text-decoration: none;

          font-size: 21px;
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media screen and (max-width: 950px) {

          .navbar {
            height: 108px;

            padding:
              0
              22px;

            gap: 16px;
          }

          .navbar-logo {
            width: 270px;
            height: 108px;
          }

          .navbar-logo img {
            width: 265px;
            height: 102px;

            object-position:
              left center;
          }

          .navbar-phone {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-call-button {
            display: flex;
          }

          .nav-links {
            position: absolute;

            top: 108px;
            left: 0;

            width: 100%;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 0;

            padding:
              14px
              18px
              24px;

            background:
              rgba(
                255,
                255,
                255,
                0.99
              );

            border-top:
              1px solid
              rgba(9, 43, 104, 0.06);

            box-shadow:
              0 18px 35px
              rgba(9, 43, 104, 0.1);

            opacity: 0;

            visibility: hidden;

            transform:
              translateY(-16px);

            transition:
              opacity 0.3s ease,
              visibility 0.3s ease,
              transform 0.3s ease;
          }

          .nav-links.active {
            opacity: 1;

            visibility: visible;

            transform:
              translateY(0);
          }

          .nav-links li {
            width: 100%;
          }

          .nav-link {
            width: 100%;

            justify-content:
              flex-start;

            gap: 14px;

            padding:
              16px
              16px;

            border-radius: 10px;

            font-size: 15px;

            text-transform: none;
          }

          .nav-link i {
            display: block;

            width: 26px;

            color: #16832b;

            font-size: 17px;

            text-align: center;
          }

          .nav-link::after {
            display: none;
          }

          .nav-link:hover {
            background:
              rgba(
                22,
                131,
                43,
                0.08
              );
          }

          .nav-link.active-link {
            color: #092b68;

            background:
              linear-gradient(
                90deg,
                rgba(22, 131, 43, 0.13),
                rgba(251, 181, 21, 0.04)
              );

            border-left:
              4px solid
              #16832b;
          }

        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media screen and (max-width: 600px) {

          .navbar {
            height: 112px;

            padding:
              0
              16px;

            display: grid;

            grid-template-columns:
              56px
              1fr
              56px;

            align-items: center;

            gap: 8px;
          }

          .hamburger {
            display: flex;

            width: 56px;
            height: 56px;

            order: 1;

            justify-self: start;

            align-self: center;
          }

          .navbar-logo {
            width: 100%;
            height: 112px;

            order: 2;

            display: flex;

            align-items: center;

            justify-content: center;

            justify-self: center;

            overflow: hidden;
          }

          .navbar-logo img {
            width: 275px;
            height: 106px;

            object-fit: contain;

            object-position:
              center center;

            transform: none;

            margin: 0;
          }

          .mobile-call-button {
            display: flex;

            width: 56px;
            height: 56px;

            order: 3;

            justify-self: end;

            align-self: center;

            font-size: 22px;
          }

          .nav-links {
            top: 112px;

            padding:
              14px
              16px
              24px;
          }

        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media screen and (max-width: 420px) {

          .navbar {
            height: 106px;

            grid-template-columns:
              52px
              1fr
              52px;

            padding:
              0
              13px;
          }

          .navbar-logo {
            height: 106px;
          }

          .navbar-logo img {
            width: 250px;
            height: 100px;
          }

          .hamburger,
          .mobile-call-button {
            width: 52px;
            height: 52px;
          }

          .hamburger span {
            width: 30px;
          }

          .mobile-call-button {
            font-size: 20px;
          }

          .nav-links {
            top: 106px;
          }

        }

        /* ==========================================
           EXTRA SMALL MOBILE
        ========================================== */

        @media screen and (max-width: 350px) {

          .navbar {
            height: 100px;

            grid-template-columns:
              48px
              1fr
              48px;

            padding:
              0
              10px;
          }

          .navbar-logo {
            height: 100px;
          }

          .navbar-logo img {
            width: 225px;
            height: 94px;
          }

          .hamburger,
          .mobile-call-button {
            width: 48px;
            height: 48px;
          }

          .hamburger span {
            width: 27px;
          }

          .nav-links {
            top: 100px;
          }

        }

      `}</style>

      <header className="navbar-header">

        <nav className="navbar">

          {/* HAMBURGER */}

          <button
            type="button"
            className={`hamburger ${
              menuOpen
                ? "open"
                : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

          {/* LOGO */}

          <NavLink
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="Daiva Pesticides"
            />

          </NavLink>

          {/* NAV LINKS */}

          <ul
            className={`nav-links ${
              menuOpen
                ? "active"
                : ""
            }`}
          >

            <li>

              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({
                  isActive,
                }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >

                <i className="fa-solid fa-house"></i>

                <span>
                  Home
                </span>

              </NavLink>

            </li>

            <li>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({
                  isActive,
                }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >

                <i className="fa-solid fa-circle-info"></i>

                <span>
                  About
                </span>

              </NavLink>

            </li>

            <li>

              <NavLink
                to="/products"
                onClick={closeMenu}
                className={({
                  isActive,
                }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >

                <i className="fa-solid fa-box-open"></i>

                <span>
                  Products
                </span>

              </NavLink>

            </li>

            <li>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({
                  isActive,
                }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >

                <i className="fa-solid fa-phone"></i>

                <span>
                  Contact
                </span>

              </NavLink>

            </li>

          </ul>

          {/* DESKTOP PHONE */}

          <a
            href="tel:+918277650250"
            className="navbar-phone"
          >

            <i className="fa-solid fa-phone"></i>

            +91 8277650250

          </a>

          {/* MOBILE PHONE */}

          <a
            href="tel:+918277650250"
            className="mobile-call-button"
            aria-label="Call Daiva Pesticides"
          >

            <i className="fa-solid fa-phone"></i>

          </a>

        </nav>

      </header>
    </>
  );
}

export default Navbar;