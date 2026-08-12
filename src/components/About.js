import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".about-animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* ==========================================
          SEO STRUCTURED DATA - ABOUT PAGE
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Daiva Pesticides - Agricultural Solutions in Karnataka",
          "url": "https://www.daivapesticides.com/about",
          "description": "Learn about Daiva Pesticides, a trusted agricultural solutions company in Karnataka, India providing crop protection products, pesticides and farming solutions for better harvests.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Daiva Pesticides",
            "url": "https://www.daivapesticides.com/",
            "description": "Daiva Pesticides is committed to bringing reliable crop protection and agricultural solutions closer to Indian farmers through practical product thinking, strong distribution and direct farmer engagement.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karnataka",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8277650250",
              "contactType": "customer service"
            },
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
              "name": "About Us",
              "item": "https://www.daivapesticides.com/about"
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
        <h2>About Daiva Pesticides - Trusted Agricultural Solutions in Karnataka</h2>
        <h3>Leading Crop Protection Company in Karnataka, India</h3>
        <p>
          Daiva Pesticides is a trusted agricultural company based in Karnataka, India. 
          We specialize in crop protection products, agricultural pesticides, insecticides, 
          fungicides and farming solutions for farmers across Karnataka and India.
        </p>
        <p>
          Our mission is to bring reliable crop protection and agricultural solutions 
          closer to Indian farmers through practical product thinking, strong distribution 
          networks and direct farmer engagement. We serve agricultural communities in 
          Bangalore, Mysore, Hubli, Belgaum, Mangalore, Shimoga, Davangere and all 
          districts of Karnataka.
        </p>
        <p>
          Contact Daiva Pesticides at +91-8277650250 for agricultural products, 
          crop protection solutions, dealer opportunities and farming support in Karnataka.
        </p>
        <ul>
          <li>About Daiva Pesticides Karnataka</li>
          <li>Agricultural Solutions Company in Karnataka</li>
          <li>Crop Protection Products Supplier</li>
          <li>Pesticides Manufacturer in Karnataka</li>
          <li>Farming Solutions Provider India</li>
          <li>Trusted Agricultural Brand</li>
          <li>Dealer Opportunities in Karnataka</li>
          <li>Best Pesticides Company in Karnataka</li>
        </ul>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-page {
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

        .about-container {
          width: 90%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* =====================================
           SCROLL ANIMATION
        ===================================== */

        .about-animate {
          opacity: 0;
          transform: translateY(45px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .about-animate.show {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-left {
          transform: translateX(-60px);
        }

        .animate-right {
          transform: translateX(60px);
        }

        .animate-left.show,
        .animate-right.show {
          transform: translateX(0);
        }

        /* =====================================
           HERO
        ===================================== */

        .about-hero {
          position: relative;

          min-height: 570px;

          display: flex;
          align-items: center;

          background:
            linear-gradient(
              90deg,
              rgba(5, 31, 76, 0.96) 0%,
              rgba(5, 31, 76, 0.8) 50%,
              rgba(5, 31, 76, 0.3) 100%
            ),
            url(
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            )
            center / cover no-repeat;

          overflow: hidden;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;

          max-width: 830px;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 20px;

          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .about-badge-line {
          width: 40px;
          height: 3px;

          background: #fbb515;

          border-radius: 20px;
        }

        .about-hero h1 {
          margin: 0;

          max-width: 900px;

          color: #ffffff;

          font-size:
            clamp(50px, 7vw, 88px);

          font-weight: 850;

          line-height: 1.02;

          letter-spacing: -3px;
        }

        .about-hero h1 span {
          display: block;

          color: #72c453;
        }

        .about-hero p {
          max-width: 720px;

          margin:
            25px
            0
            0;

          color:
            rgba(255, 255, 255, 0.83);

          font-size: 17px;

          line-height: 1.85;
        }

        /* =====================================
           COMMON
        ===================================== */

        .about-section-label {
          display: inline-block;

          margin-bottom: 13px;

          color: #5db747;

          font-size: 13px;
          font-weight: 850;

          letter-spacing: 2.3px;

          text-transform: uppercase;
        }

        /* =====================================
           INTRO
        ===================================== */

        .about-intro {
          padding:
            110px
            0;

          background: #ffffff;
        }

        .about-intro-grid {
          display: grid;

          grid-template-columns:
            1.05fr
            0.95fr;

          align-items: center;

          gap: 85px;
        }

        .about-intro-content h2,
        .who-content h2,
        .vision-content h2,
        .values-heading h2 {
          margin:
            0
            0
            23px;

          color: #092b68;

          font-size:
            clamp(36px, 5vw, 58px);

          font-weight: 850;

          line-height: 1.12;

          letter-spacing: -2px;
        }

        .about-intro-content h2 span {
          color: #5db747;
        }

        .about-intro-content p,
        .who-content p,
        .vision-content p {
          margin:
            0
            0
            20px;

          color: #65778b;

          font-size: 16px;

          line-height: 1.9;
        }

        .about-highlight-box {
          margin-top: 30px;

          padding:
            24px
            26px;

          display: flex;
          align-items: flex-start;

          gap: 17px;

          background:
            linear-gradient(
              135deg,
              #f4faef,
              #fffaf0
            );

          border-left:
            4px solid #5db747;

          border-radius:
            0
            14px
            14px
            0;
        }

        .about-highlight-box i {
          margin-top: 3px;

          color: #fbb515;

          font-size: 24px;
        }

        .about-highlight-box strong {
          display: block;

          margin-bottom: 6px;

          color: #092b68;

          font-size: 16px;
        }

        .about-highlight-box span {
          color: #65778b;

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================
           INTRO IMAGE
        ===================================== */

        .about-intro-image {
          position: relative;
        }

        .about-intro-image img {
          width: 100%;
          height: 590px;

          object-fit: cover;

          display: block;

          border-radius: 28px;

          box-shadow:
            0 25px 65px
            rgba(9, 43, 104, 0.14);
        }

        .about-floating-card {
          position: absolute;

          left: -45px;
          bottom: 45px;

          width: 220px;

          padding:
            24px
            22px;

          background: #092b68;
          color: #ffffff;

          border-radius: 18px;

          box-shadow:
            0 20px 45px
            rgba(9, 43, 104, 0.25);
        }

        .about-floating-card i {
          margin-bottom: 14px;

          color: #fbb515;

          font-size: 30px;
        }

        .about-floating-card h3 {
          margin:
            0
            0
            8px;

          font-size: 21px;
        }

        .about-floating-card p {
          margin: 0;

          color:
            rgba(255, 255, 255, 0.7);

          font-size: 13px;

          line-height: 1.6;
        }

        /* =====================================
           WHO WE ARE
        ===================================== */

        .who-section {
          padding:
            110px
            0;

          background: #f7faf6;
        }

        .who-grid {
          display: grid;

          grid-template-columns:
            0.95fr
            1.05fr;

          align-items: center;

          gap: 80px;
        }

        .who-image-wrapper {
          position: relative;

          padding-bottom: 25px;
        }

        .who-image-main {
          width: 100%;
          height: 560px;

          object-fit: cover;

          display: block;

          border-radius: 25px;
        }

        .who-mini-image {
          position: absolute;

          right: -35px;
          bottom: -20px;

          width: 230px;
          height: 200px;

          object-fit: cover;

          border:
            8px solid #f7faf6;

          border-radius: 20px;

          box-shadow:
            0 18px 40px
            rgba(9, 43, 104, 0.14);
        }

        .who-content h3 {
          margin:
            0
            0
            20px;

          color: #5db747;

          font-size: 22px;
          font-weight: 800;
        }

        /* =====================================
           FIELD POINTS
        ===================================== */

        .core-points {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;

          margin-top: 30px;
        }

        .core-point {
          min-width: 0;

          padding:
            22px
            20px;

          background: #ffffff;

          border:
            1px solid
            rgba(9, 43, 104, 0.07);

          border-radius: 15px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .core-point:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(93, 183, 71, 0.2);

          box-shadow:
            0 15px 35px
            rgba(9, 43, 104, 0.08);
        }

        .core-point i {
          width: 45px;
          height: 45px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 15px;

          color: #5db747;

          background:
            rgba(93, 183, 71, 0.11);

          border-radius: 12px;

          font-size: 18px;
        }

        .core-point strong {
          display: block;

          margin-bottom: 6px;

          color: #092b68;

          font-size: 15px;

          line-height: 1.4;
        }

        .core-point span {
          display: block;

          color: #708093;

          font-size: 13px;

          line-height: 1.6;
        }

        /* =====================================
           VISION AND MISSION
        ===================================== */

        .vision-section {
          padding:
            110px
            0;

          background: #ffffff;
        }

        .vision-content {
          max-width: 850px;
        }

        .vision-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 28px;

          margin-top: 55px;
        }

        .vision-card {
          position: relative;

          min-height: 330px;

          padding:
            45px
            38px;

          background: #ffffff;

          border:
            1px solid
            rgba(9, 43, 104, 0.08);

          border-radius: 22px;

          box-shadow:
            0 15px 45px
            rgba(9, 43, 104, 0.07);

          overflow: hidden;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        /*
          Decorative circles removed
          from Vision and Mission cards.
        */

        .vision-card:hover {
          transform:
            translateY(-8px);

          border-color:
            rgba(93, 183, 71, 0.2);

          box-shadow:
            0 25px 60px
            rgba(9, 43, 104, 0.12);
        }

        .vision-icon {
          width: 65px;
          height: 65px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 25px;

          background:
            linear-gradient(
              135deg,
              #5db747,
              #78c95c
            );

          color: #ffffff;

          border-radius: 17px;

          font-size: 25px;
        }

        .vision-card:nth-child(2)
        .vision-icon {
          background:
            linear-gradient(
              135deg,
              #092b68,
              #16488d
            );

          color: #fbb515;
        }

        .vision-card h3 {
          margin:
            0
            0
            15px;

          color: #092b68;

          font-size: 27px;
          font-weight: 800;
        }

        .vision-card p {
          margin: 0;

          color: #687b90;

          font-size: 15px;

          line-height: 1.85;
        }

        /* =====================================
           VALUES
        ===================================== */

        .values-section {
          padding:
            105px
            0;

          background:
            linear-gradient(
              135deg,
              #061f4d,
              #092b68
            );
        }

        .values-heading {
          max-width: 720px;

          margin-bottom: 55px;
        }

        .values-heading .about-section-label {
          color: #fbb515;
        }

        .values-heading h2 {
          color: #ffffff;
        }

        .values-heading p {
          margin: 0;

          color:
            rgba(255, 255, 255, 0.7);

          font-size: 16px;

          line-height: 1.8;
        }

        .values-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 22px;
        }

        .value-card {
          padding:
            32px
            25px;

          background:
            rgba(255, 255, 255, 0.07);

          border:
            1px solid
            rgba(255, 255, 255, 0.09);

          border-radius: 18px;

          backdrop-filter: blur(8px);

          transition:
            transform 0.35s ease,
            background 0.35s ease;
        }

        .value-card:hover {
          transform:
            translateY(-8px);

          background:
            rgba(255, 255, 255, 0.11);
        }

        .value-card i {
          margin-bottom: 20px;

          color: #fbb515;

          font-size: 28px;
        }

        .value-card h3 {
          margin:
            0
            0
            10px;

          color: #ffffff;

          font-size: 19px;
        }

        .value-card p {
          margin: 0;

          color:
            rgba(255, 255, 255, 0.66);

          font-size: 13px;

          line-height: 1.75;
        }

        /* =====================================
           STATS
        ===================================== */

        .about-stats {
          padding:
            75px
            0;

          background: #f7faf6;
        }

        .about-stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 25px;
        }

        .about-stat {
          padding:
            30px
            20px;

          text-align: center;

          background: #ffffff;

          border-radius: 18px;

          box-shadow:
            0 10px 35px
            rgba(9, 43, 104, 0.06);
        }

        .about-stat i {
          margin-bottom: 15px;

          color: #5db747;

          font-size: 28px;
        }

        .about-stat h3 {
          margin: 0;

          color: #092b68;

          font-size: 28px;
          font-weight: 850;
        }

        .about-stat p {
          margin:
            7px
            0
            0;

          color: #748398;

          font-size: 13px;
        }

        /* =====================================
           CTA
        ===================================== */

        .about-cta {
          position: relative;

          padding:
            110px
            20px;

          text-align: center;

          background:
            linear-gradient(
              rgba(9, 43, 104, 0.91),
              rgba(9, 43, 104, 0.91)
            ),
            url(
              "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1800&q=80"
            )
            center / cover no-repeat;
        }

        .about-cta-content {
          max-width: 800px;

          margin: 0 auto;
        }

        .about-cta h2 {
          margin:
            0
            0
            18px;

          color: #ffffff;

          font-size:
            clamp(38px, 5vw, 58px);

          font-weight: 850;

          letter-spacing: -2px;
        }

        .about-cta p {
          max-width: 680px;

          margin:
            0
            auto
            30px;

          color:
            rgba(255, 255, 255, 0.76);

          font-size: 16px;

          line-height: 1.85;
        }

        .about-cta-buttons {
          display: flex;

          justify-content: center;

          gap: 15px;

          flex-wrap: wrap;
        }

        .about-primary-btn,
        .about-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding:
            15px
            27px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 15px;
          font-weight: 750;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .about-primary-btn {
          background: #5db747;
          color: #ffffff;
        }

        .about-primary-btn:hover {
          background: #4fa43b;

          transform:
            translateY(-3px);
        }

        .about-secondary-btn {
          color: #ffffff;

          border:
            1px solid
            rgba(255, 255, 255, 0.4);
        }

        .about-secondary-btn:hover {
          background: #ffffff;
          color: #092b68;

          transform:
            translateY(-3px);
        }

        /* =====================================
           TABLET
        ===================================== */

        @media screen and (max-width: 1050px) {

          .about-intro-grid,
          .who-grid {
            gap: 50px;
          }

          .values-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        /* =====================================
           MOBILE / TABLET
        ===================================== */

        @media screen and (max-width: 800px) {

          .about-hero {
            min-height: 520px;
          }

          .about-hero h1 {
            letter-spacing: -2px;
          }

          .about-intro,
          .who-section,
          .vision-section,
          .values-section {
            padding:
              80px
              0;
          }

          .about-intro-grid,
          .who-grid {
            grid-template-columns: 1fr;
          }

          .about-intro-image {
            order: -1;
          }

          .about-intro-image img,
          .who-image-main {
            height: 480px;
          }

          .about-floating-card {
            left: 20px;
          }

          .who-mini-image {
            right: 15px;
          }

          /*
            Field cards stay 2 × 2
            on mobile/tablet.
          */

          .core-points {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .vision-grid {
            grid-template-columns: 1fr;
          }

          .about-stats-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media screen and (max-width: 500px) {

          .about-container {
            width: calc(100% - 30px);
          }

          .about-hero {
            min-height: 500px;
          }

          .about-hero h1 {
            font-size: 47px;

            letter-spacing: -1.5px;
          }

          .about-hero p {
            font-size: 15px;
          }

          .about-intro,
          .who-section,
          .vision-section,
          .values-section {
            padding:
              65px
              0;
          }

          .about-intro-image img,
          .who-image-main {
            height: 370px;
          }

          .about-floating-card {
            position: relative;

            left: auto;
            bottom: auto;

            width: 100%;

            margin-top: 15px;
          }

          .who-image-wrapper {
            margin-bottom: 30px;
          }

          .who-mini-image {
            width: 150px;
            height: 130px;

            right: 8px;
            bottom: -20px;

            border-width: 5px;
          }

          /*
            Keep exactly 2 cards per row
            even on small mobile.
          */

          .core-points {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 10px;
          }

          .core-point {
            padding:
              17px
              12px;

            border-radius: 13px;
          }

          .core-point i {
            width: 39px;
            height: 39px;

            margin-bottom: 11px;

            font-size: 15px;

            border-radius: 10px;
          }

          .core-point strong {
            font-size: 13px;

            line-height: 1.35;
          }

          .core-point span {
            font-size: 11.5px;

            line-height: 1.5;
          }

          .vision-card {
            min-height: auto;

            padding:
              35px
              27px;
          }

          .vision-icon {
            width: 56px;
            height: 56px;

            font-size: 21px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .about-stats-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 12px;
          }

          .about-stat {
            padding:
              25px
              10px;
          }

          .about-stat h3 {
            font-size: 22px;
          }

          .about-cta {
            padding:
              80px
              20px;
          }

          .about-cta-buttons {
            flex-direction: column;
          }

          .about-primary-btn,
          .about-secondary-btn {
            width: 100%;
          }

        }

        /* =====================================
           VERY SMALL MOBILE
        ===================================== */

        @media screen and (max-width: 350px) {

          .core-points {
            gap: 8px;
          }

          .core-point {
            padding:
              15px
              9px;
          }

          .core-point strong {
            font-size: 12px;
          }

          .core-point span {
            font-size: 10.5px;
          }

        }

        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .about-animate {
            opacity: 1;

            transform: none;

            transition: none;
          }

        }
      `}</style>

      <main className="about-page">

        {/* =====================================
            HERO
        ===================================== */}

        <section className="about-hero">

          <div className="about-container">

            <div className="about-hero-content about-animate show">

              <div className="about-badge">

                <span className="about-badge-line">
                </span>

                About Daiva Pesticides

              </div>

              <h1>

                We Deliver Results

                <span>
                  To Farmers.
                </span>

              </h1>

              <p>
                Daiva Pesticides is committed to bringing
                reliable crop protection and agricultural
                solutions closer to Indian farmers through
                practical product thinking, strong distribution
                and direct farmer engagement.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            INTRO
        ===================================== */}

        <section className="about-intro">

          <div className="about-container">

            <div className="about-intro-grid">

              <div className="about-intro-content about-animate animate-left">

                <span className="about-section-label">
                  Our Journey
                </span>

                <h2>
                  Building a Stronger Future for{" "}
                  <span>
                    Indian Agriculture.
                  </span>
                </h2>

                <p>
                  Daiva Pesticides was established with a clear
                  mission to bring dependable agricultural
                  solutions to farming communities and help
                  farmers achieve better crop health, protection
                  and productivity.
                </p>

                <p>
                  We are building a strong and scalable
                  agricultural brand through product performance,
                  trusted dealer relationships and meaningful
                  engagement with farmers at the field level.
                </p>

                <p>
                  Our approach is focused on understanding real
                  agricultural challenges and delivering
                  practical, result-oriented solutions that
                  farmers can trust.
                </p>

                <div className="about-highlight-box">

                  <i className="fa-solid fa-seedling">
                  </i>

                  <div>

                    <strong>
                      Research-driven agricultural thinking
                    </strong>

                    <span>
                      Focused on farmer needs, field challenges
                      and practical crop protection solutions.
                    </span>

                  </div>

                </div>

              </div>

              <div className="about-intro-image about-animate animate-right">

                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1100&q=80"
                  alt="Indian agriculture"
                  loading="lazy"
                />

                <div className="about-floating-card">

                  <i className="fa-solid fa-tractor">
                  </i>

                  <h3>
                    Farmer Focused
                  </h3>

                  <p>
                    Practical agricultural solutions developed
                    around real field requirements.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            WHO WE ARE
        ===================================== */}

        <section className="who-section">

          <div className="about-container">

            <div className="who-grid">

              <div className="who-image-wrapper about-animate animate-left">

                <img
                  className="who-image-main"
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1100&q=80"
                  alt="Farmer and agriculture field"
                  loading="lazy"
                />

                <img
                  className="who-mini-image"
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
                  alt="Agricultural field"
                  loading="lazy"
                />

              </div>

              <div className="who-content about-animate animate-right">

                <span className="about-section-label">
                  Who We Are
                </span>

                <h2>
                  Practical Solutions for Real Field Problems.
                </h2>

                <h3>
                  Understanding agriculture from the ground level.
                </h3>

                <p>
                  Indian agriculture is continuously evolving,
                  but farmers still face major challenges when
                  choosing the right products to protect,
                  nourish and support their crops.
                </p>

                <p>
                  Daiva Pesticides focuses on solving these
                  field-level challenges through practical
                  agricultural and crop protection solutions
                  developed around real farming conditions.
                </p>

                <p>
                  Our product thinking considers crop
                  requirements, field conditions, climate
                  challenges and farmer experiences. We believe
                  that direct communication with farmers and
                  dealer partners is essential for understanding
                  real problems and improving our approach.
                </p>

                <div className="core-points">

                  <div className="core-point">

                    <i className="fa-solid fa-magnifying-glass">
                    </i>

                    <strong>
                      Field Understanding
                    </strong>

                    <span>
                      Learning directly from real farming challenges.
                    </span>

                  </div>

                  <div className="core-point">

                    <i className="fa-solid fa-flask">
                    </i>

                    <strong>
                      Product Thinking
                    </strong>

                    <span>
                      Solutions focused on practical agricultural needs.
                    </span>

                  </div>

                  <div className="core-point">

                    <i className="fa-solid fa-users">
                    </i>

                    <strong>
                      Farmer Engagement
                    </strong>

                    <span>
                      Building relationships through direct communication.
                    </span>

                  </div>

                  <div className="core-point">

                    <i className="fa-solid fa-store">
                    </i>

                    <strong>
                      Dealer Network
                    </strong>

                    <span>
                      Creating stronger product accessibility and distribution.
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            VISION AND MISSION
        ===================================== */}

        <section className="vision-section">

          <div className="about-container">

            <div className="vision-content about-animate">

              <span className="about-section-label">
                Our Purpose
              </span>

              <h2>
                More Than Crop Protection.
              </h2>

              <p>
                Our larger purpose is to support farmers,
                strengthen agricultural distribution and make
                dependable farming solutions more accessible to
                communities across India.
              </p>

            </div>

            <div className="vision-grid">

              <div className="vision-card about-animate animate-left">

                <div className="vision-icon">

                  <i className="fa-solid fa-eye">
                  </i>

                </div>

                <h3>
                  Our Vision
                </h3>

                <p>
                  To build a trusted agricultural brand that
                  contributes to stronger farming communities
                  by making effective crop protection and
                  agricultural solutions accessible, dependable
                  and farmer focused.
                </p>

              </div>

              <div className="vision-card about-animate animate-right">

                <div className="vision-icon">

                  <i className="fa-solid fa-bullseye">
                  </i>

                </div>

                <h3>
                  Our Mission
                </h3>

                <p>
                  To understand real field challenges, support
                  farmers with practical solutions, build strong
                  dealer partnerships and continuously improve
                  our products through farmer feedback and
                  agricultural learning.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            VALUES
        ===================================== */}

        <section className="values-section">

          <div className="about-container">

            <div className="values-heading about-animate">

              <span className="about-section-label">
                Our Values
              </span>

              <h2>
                The Principles That Guide Us.
              </h2>

              <p>
                Everything we do is built around trust,
                performance, accessibility and long-term
                relationships with farmers and agricultural
                partners.
              </p>

            </div>

            <div className="values-grid">

              <div className="value-card about-animate">

                <i className="fa-solid fa-handshake">
                </i>

                <h3>
                  Trust
                </h3>

                <p>
                  Building lasting relationships through
                  dependable products and transparent
                  agricultural support.
                </p>

              </div>

              <div className="value-card about-animate">

                <i className="fa-solid fa-seedling">
                </i>

                <h3>
                  Farmer First
                </h3>

                <p>
                  Keeping farmer requirements and real
                  agricultural challenges at the centre
                  of our decisions.
                </p>

              </div>

              <div className="value-card about-animate">

                <i className="fa-solid fa-chart-line">
                </i>

                <h3>
                  Performance
                </h3>

                <p>
                  Focusing on practical agricultural solutions
                  designed to create meaningful field-level value.
                </p>

              </div>

              <div className="value-card about-animate">

                <i className="fa-solid fa-lightbulb">
                </i>

                <h3>
                  Innovation
                </h3>

                <p>
                  Continuously improving our product approach
                  through learning, feedback and evolving
                  agricultural needs.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            STATS
        ===================================== */}

        <section className="about-stats">

          <div className="about-container">

            <div className="about-stats-grid">

              <div className="about-stat about-animate">

                <i className="fa-solid fa-tractor">
                </i>

                <h3>
                  Farmers
                </h3>

                <p>
                  Our Core Focus
                </p>

              </div>

              <div className="about-stat about-animate">

                <i className="fa-solid fa-boxes-stacked">
                </i>

                <h3>
                  Products
                </h3>

                <p>
                  Practical Solutions
                </p>

              </div>

              <div className="about-stat about-animate">

                <i className="fa-solid fa-store">
                </i>

                <h3>
                  Dealers
                </h3>

                <p>
                  Strong Partnerships
                </p>

              </div>

              <div className="about-stat about-animate">

                <i className="fa-solid fa-arrow-trend-up">
                </i>

                <h3>
                  Growth
                </h3>

                <p>
                  Our Shared Journey
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            CTA
        ===================================== */}

        <section className="about-cta">

          <div className="about-cta-content about-animate">

            <span className="about-section-label">
              Grow With Daiva
            </span>

            <h2>
              Join the Daiva Growth Journey
            </h2>

            <p>
              Explore our agricultural products, connect with
              our team and become part of a growing journey
              focused on stronger farmers and better agriculture.
            </p>

            <div className="about-cta-buttons">

              <Link
                to="/products"
                className="about-primary-btn"
              >
                Explore Products

                <i className="fa-solid fa-arrow-right">
                </i>
              </Link>

              <Link
                to="/contact"
                className="about-secondary-btn"
              >
                <i className="fa-solid fa-phone">
                </i>

                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default About;