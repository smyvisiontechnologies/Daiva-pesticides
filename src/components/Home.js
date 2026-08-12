import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSources, setImageSources] = useState([]);

  const slides = [
    {
      localImage: "/assets/desk.png",
      mobileImage: "/assets/mob.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80",

      title: "Protecting Crops,",
      highlight: "Enriching Lives.",

      description:
        "Innovative crop protection and agricultural solutions for a sustainable and better tomorrow.",

      firstSlide: true,
    },

    {
      localImage: "/assets/min1.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",

      smallTitle: "BETTER FARMING SOLUTIONS",

      title: "Healthy Crops.",
      highlight: "Better Harvests.",

      description:
        "Dependable crop protection and agricultural solutions created to support healthier fields, stronger plants and productive farming.",

      buttonText: "Our Products",
      buttonLink: "/products",
    },

    {
      localImage: "/assets/min2.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",

      smallTitle: "TRUSTED CROP PROTECTION",

      title: "Growing Together.",
      highlight: "Harvesting Success.",

      description:
        "Working alongside farmers with practical agricultural solutions built around real crop requirements and field conditions.",

      buttonText: "Know About Us",
      buttonLink: "/about",
    },

    {
      localImage: "/assets/min3.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",

      smallTitle: "FARMING WITH CONFIDENCE",

      title: "Strong Protection.",
      highlight: "Stronger Fields.",

      description:
        "Helping farmers respond to crop challenges with dependable solutions focused on protection, plant health and productive agriculture.",

      buttonText: "View Solutions",
      buttonLink: "/products",
    },

    {
      localImage: "/assets/min4.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1920&q=80",

      smallTitle: "COMMITTED TO AGRICULTURE",

      title: "Supporting Farmers.",
      highlight: "Growing Futures.",

      description:
        "Our commitment is to build stronger agricultural relationships through quality solutions, trusted service and farmer-focused support.",

      buttonText: "Learn More",
      buttonLink: "/about",
    },

    {
      localImage: "/assets/min5.png",

      fallbackImage:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=80",

      smallTitle: "DAIVA PESTICIDES",

      title: "Your Fields.",
      highlight: "Our Responsibility.",

      description:
        "Building a stronger agricultural future through dependable crop protection, practical thinking and long-term farmer relationships.",

      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  useEffect(() => {
    setImageSources(
      slides.map((slide) => slide.localImage)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* AUTO CAROUSEL */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1
          ? 0
          : previous + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  /* PRELOAD FALLBACK IMAGES */

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();

      image.src = slide.fallbackImage;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* SCROLL ANIMATIONS */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "home-show"
            );
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements =
      document.querySelectorAll(
        ".home-animate"
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleImageError = (index) => {
    setImageSources((previousImages) => {
      const updatedImages = [
        ...previousImages,
      ];

      updatedImages[index] =
        slides[index].fallbackImage;

      return updatedImages;
    });
  };

  const activeSlide =
    slides[currentSlide];

  return (
    <>
      {/* ==========================================
          SEO STRUCTURED DATA - ORGANIZATION
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Daiva Pesticides",
          "url": "https://www.daivapesticides.com/",
          "logo": "https://www.daivapesticides.com/assets/desk.png",
          "description": "Daiva Pesticides is a leading agricultural solutions company in Karnataka, India providing innovative crop protection products, pesticides, insecticides, fungicides and farming solutions for sustainable agriculture.",
          "slogan": "Protecting Crops, Enriching Lives",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Karnataka",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8277650250",
            "contactType": "customer service",
            "availableLanguage": ["English", "Kannada", "Hindi"],
            "areaServed": "Karnataka"
          },
          "sameAs": [
            "https://www.facebook.com/share/18Eoe3afBa/",
            "https://www.instagram.com/daiva_pesticides?igsh=bnZqaHFjNHk2ZTE3",
            "https://youtube.com/@daivapesticides?si=Hjp0mSGb50kDIlde"
          ]
        })}
      </script>

      {/* ==========================================
          SEO STRUCTURED DATA - LOCAL BUSINESS GEO
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Daiva Pesticides",
          "url": "https://www.daivapesticides.com/",
          "image": "https://www.daivapesticides.com/assets/desk.png",
          "description": "Daiva Pesticides provides crop protection solutions, agricultural pesticides, insecticides, fungicides and farming products for farmers across Karnataka, India. Trusted agricultural partner for better harvests.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Karnataka",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "15.3173",
            "longitude": "75.7139"
          },
          "telephone": "+91-8277650250",
          "openingHours": "Mo-Sa 09:00-18:00",
          "priceRange": "$$",
          "areaServed": "Karnataka",
          "sameAs": [
            "https://www.facebook.com/share/18Eoe3afBa/",
            "https://www.instagram.com/daiva_pesticides?igsh=bnZqaHFjNHk2ZTE3",
            "https://youtube.com/@daivapesticides?si=Hjp0mSGb50kDIlde"
          ]
        })}
      </script>

      {/* ==========================================
          SEO STRUCTURED DATA - WEBSITE
      ========================================== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Daiva Pesticides",
          "url": "https://www.daivapesticides.com/",
          "description": "Innovative crop protection and agricultural solutions for farmers in Karnataka, India. Quality pesticides, insecticides, fungicides and farming products.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.daivapesticides.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
        <h2>Daiva Pesticides - Crop Protection Solutions in Karnataka</h2>
        <h3>Agricultural Pesticides, Insecticides and Fungicides</h3>
        <p>
          Daiva Pesticides is a trusted provider of agricultural solutions in Karnataka, India. 
          We offer high-quality crop protection products, pesticides, insecticides, fungicides, 
          herbicides and plant growth regulators for farmers across Karnataka.
        </p>
        <p>
          Our agricultural solutions help farmers protect crops from pests, diseases and weeds, 
          ensuring healthier plants and better harvests. We serve agricultural communities in 
          Bangalore, Mysore, Hubli, Belgaum, Mangalore, Shimoga, Davangere, Bellary, Tumkur, 
          Hassan, Mandya, Raichur, Gulbarga, Bidar, Bijapur and all districts of Karnataka.
        </p>
        <p>
          Contact Daiva Pesticides at +91-8277650250 for crop protection products, agricultural 
          pesticides, farming solutions and dealer opportunities in Karnataka.
        </p>
        <ul>
          <li>Crop Protection Products in Karnataka</li>
          <li>Agricultural Pesticides Suppliers</li>
          <li>Insecticides for Farmers</li>
          <li>Fungicides for Crop Protection</li>
          <li>Herbicides and Weed Control</li>
          <li>Plant Growth Regulators</li>
          <li>Farming Solutions in Karnataka</li>
          <li>Agricultural Products Distributor</li>
          <li>Pesticide Dealer Opportunities</li>
          <li>Best Agricultural Company in Karnataka</li>
        </ul>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        .home-page {
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

        .home-container {
          width: 90%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* ==========================================
           SCROLL ANIMATIONS
        ========================================== */

        .home-animate {
          opacity: 0;

          transform:
            translateY(45px);

          transition:
            opacity 0.75s ease,
            transform 0.75s ease;
        }

        .home-animate.home-show {
          opacity: 1;

          transform:
            translateY(0);
        }

        .home-animate-left {
          transform:
            translateX(-55px);
        }

        .home-animate-right {
          transform:
            translateX(55px);
        }

        .home-animate-left.home-show,
        .home-animate-right.home-show {
          transform:
            translateX(0);
        }

        /* ==========================================
           HERO
        ========================================== */

        .hero-section {
          width: 100%;

          height:
            calc(100vh - 105px);

          min-height: 600px;
          max-height: 850px;

          position: relative;

          display: flex;
          align-items: center;

          overflow: hidden;

          background: #eef5eb;
        }

        .hero-slide {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          opacity: 0;
          visibility: hidden;

          transform: scale(1.05);

          transition:
            opacity 1s ease,
            transform 6s ease,
            visibility 1s ease;
        }

        .hero-slide.active {
          opacity: 1;
          visibility: visible;

          transform: scale(1);
        }

        .hero-slide img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;
        }

        /* ==========================================
           FIRST SLIDE RESPONSIVE IMAGE
        ========================================== */

        .hero-first-picture {
          display: block;

          width: 100%;
          height: 100%;
        }

        .hero-first-picture img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;
        }

        /* ==========================================
           STANDARD SLIDE OVERLAY
        ========================================== */

        .hero-overlay {
          position: absolute;
          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              90deg,
              rgba(4, 30, 75, 0.93),
              rgba(4, 30, 75, 0.75),
              rgba(4, 30, 75, 0.2)
            );

          pointer-events: none;

          transition:
            opacity 0.4s ease;
        }

        /*
          First designed image is already bright.
          Use no dark overlay.
        */

        .hero-section.first-slide-active
        .hero-overlay {
          opacity: 0;
        }

        /* ==========================================
           HERO CONTENT
        ========================================== */

        .hero-content-wrapper {
          position: relative;

          z-index: 4;

          width: 90%;
          max-width: 1250px;

          margin: 0 auto;

          pointer-events: none;
        }

        .hero-content {
          max-width: 730px;

          pointer-events: auto;
        }

        /* ==========================================
           NORMAL SLIDE CONTENT
        ========================================== */

        .hero-small-title {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 18px;

          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 2.5px;

          animation:
            heroFadeUp
            0.7s ease
            forwards;
        }

        .hero-small-line {
          width: 38px;
          height: 3px;

          background: #fbb515;

          border-radius: 20px;
        }

        .hero-title {
          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              45px,
              5.5vw,
              78px
            );

          line-height: 1.05;

          font-weight: 850;

          letter-spacing: -2px;

          animation:
            heroFadeUp
            0.8s ease
            forwards;
        }

        .hero-highlight {
          display: block;

          margin-top: 5px;

          color: #77c650;
        }

        .hero-description {
          max-width: 650px;

          margin:
            24px
            0
            32px;

          color:
            rgba(
              255,
              255,
              255,
              0.87
            );

          font-size: 17px;

          line-height: 1.8;

          animation:
            heroFadeUp
            1s ease
            forwards;
        }

        .hero-buttons {
          display: flex;

          align-items: center;

          gap: 15px;

          animation:
            heroFadeUp
            1.1s ease
            forwards;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          padding:
            15px
            27px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          transition:
            all
            0.3s ease;
        }

        .hero-primary-btn {
          background: #5db747;

          color: #ffffff;
        }

        .hero-secondary-btn {
          color: #ffffff;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.45
            );

          background:
            rgba(
              255,
              255,
              255,
              0.05
            );
        }

        /* ==========================================
           FIRST SLIDE TEXT
        ========================================== */

        .first-hero-content {
          max-width: 590px;
        }

        .first-hero-title {
          margin: 0;

          color: #092b68;

          font-size:
            clamp(
              48px,
              5vw,
              74px
            );

          line-height: 1.05;

          font-weight: 900;

          letter-spacing: -2.5px;

          animation:
            heroFadeUp
            0.8s ease
            forwards;
        }

        .first-hero-title span {
          display: block;

          margin-top: 5px;

          color: #16832b;
        }

        .first-title-line {
          width: 100px;
          height: 4px;

          margin:
            25px
            0;

          position: relative;

          background: #092b68;
        }

        .first-title-line::after {
          content: "";

          position: absolute;

          left: 62%;
          top: 0;

          width: 38%;
          height: 100%;

          background: #16832b;
        }

        .first-hero-description {
          max-width: 500px;

          margin:
            0
            0
            32px;

          color: #202934;

          font-size: 18px;

          line-height: 1.75;

          animation:
            heroFadeUp
            1s ease
            forwards;
        }

        .first-hero-buttons {
          display: flex;

          align-items: center;

          gap: 15px;

          animation:
            heroFadeUp
            1.1s ease
            forwards;
        }

        .first-products-btn,
        .dealer-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 52px;

          padding:
            13px
            27px;

          border-radius: 30px;

          text-decoration: none;

          font-size: 15px;
          font-weight: 750;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .first-products-btn {
          background: #16832b;

          color: #ffffff;

          border:
            1px solid #16832b;
        }

        .first-products-btn:hover {
          background: #0d6d20;

          transform:
            translateY(-3px);

          box-shadow:
            0 12px 28px
            rgba(
              22,
              131,
              43,
              0.25
            );
        }

        .dealer-btn {
          background: #ffffff;

          color: #092b68;

          border:
            2px solid #092b68;
        }

        .dealer-btn:hover {
          background: #092b68;

          color: #ffffff;

          transform:
            translateY(-3px);
        }

        @keyframes heroFadeUp {

          from {
            opacity: 0;

            transform:
              translateY(25px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }

        /* ==========================================
           HERO DOTS
        ========================================== */

        .hero-dots {
          position: absolute;

          z-index: 7;

          left: 50%;
          bottom: 28px;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;

          gap: 9px;
        }

        .hero-dot {
          width: 9px;
          height: 9px;

          padding: 0;

          border:
            2px solid
            rgba(
              255,
              255,
              255,
              0.9
            );

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.55
            );

          cursor: pointer;

          transition:
            all
            0.35s ease;
        }

        .hero-dot.active {
          width: 30px;

          border-radius: 20px;

          background: #5db747;

          border-color: #ffffff;
        }

        /* ==========================================
           FEATURES
        ========================================== */

        .features-section {
          position: relative;

          z-index: 10;

          padding:
            95px
            0;

          background: #ffffff;
        }

        .features-heading {
          max-width: 730px;

          margin:
            0 auto
            50px;

          text-align: center;
        }

        .section-label {
          display: inline-block;

          margin-bottom: 10px;

          color: #5db747;

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .features-heading h2,
        .section-heading h2 {
          margin: 0;

          color: #092b68;

          font-size:
            clamp(
              32px,
              4vw,
              48px
            );

          font-weight: 850;

          line-height: 1.18;

          letter-spacing: -1.5px;
        }

        .features-heading p,
        .section-heading p {
          max-width: 680px;

          margin:
            17px
            auto
            0;

          color: #6c7d90;

          font-size: 16px;

          line-height: 1.85;
        }

        .features-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          gap: 22px;
        }

        .feature-card {
          position: relative;

          min-width: 0;

          padding:
            34px
            26px;

          background: #ffffff;

          border:
            1px solid
            rgba(
              9,
              43,
              104,
              0.08
            );

          border-radius: 18px;

          box-shadow:
            0 10px 35px
            rgba(
              10,
              45,
              110,
              0.06
            );

          overflow: hidden;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .feature-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 20px 45px
            rgba(
              10,
              45,
              110,
              0.11
            );
        }

        .feature-icon {
          width: 58px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 22px;

          background:
            rgba(
              93,
              183,
              71,
              0.1
            );

          color: #5db747;

          font-size: 23px;

          border-radius: 14px;
        }

        .feature-card h3 {
          margin:
            0
            0
            11px;

          color: #092b68;

          font-size: 19px;
          font-weight: 800;
        }

        .feature-card p {
          margin: 0;

          color: #63758a;

          font-size: 14px;

          line-height: 1.8;
        }

        /* ==========================================
           ABOUT
        ========================================== */

        .home-about {
          padding:
            100px
            0;

          background: #f7faf6;
        }

        .about-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          align-items: center;

          gap: 70px;
        }

        .about-image-wrapper {
          position: relative;
        }

        .about-image {
          width: 100%;
          height: 520px;

          display: block;

          object-fit: cover;

          border-radius: 24px;
        }

        .about-experience {
          position: absolute;

          right: -25px;
          bottom: 35px;

          width: 180px;

          padding:
            26px
            20px;

          text-align: center;

          background: #092b68;

          color: #ffffff;

          border-radius: 18px;
        }

        .about-experience i {
          margin-bottom: 10px;

          color: #fbb515;

          font-size: 27px;
        }

        .about-experience strong {
          display: block;

          font-size: 21px;
        }

        .about-experience span {
          display: block;

          margin-top: 5px;

          color:
            rgba(
              255,
              255,
              255,
              0.75
            );

          font-size: 12px;
        }

        .about-content h2 {
          margin:
            0
            0
            20px;

          color: #092b68;

          font-size:
            clamp(
              31px,
              4vw,
              46px
            );

          font-weight: 850;

          line-height: 1.2;
        }

        .about-content > p {
          margin:
            0
            0
            20px;

          color: #627489;

          font-size: 16px;

          line-height: 1.85;
        }

        .about-points {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap: 14px;

          margin:
            28px
            0
            30px;
        }

        .about-point {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #263f5c;

          font-size: 14px;

          font-weight: 700;
        }

        .about-point i {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            rgba(
              93,
              183,
              71,
              0.12
            );

          color: #5db747;

          border-radius: 50%;

          font-size: 11px;
        }

        .learn-more-btn {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding:
            14px
            24px;

          background: #092b68;

          color: #ffffff;

          text-decoration: none;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 700;
        }

        /* ==========================================
           FARMER FOCUS
        ========================================== */

        .farmer-focus-section {
          padding:
            100px
            0;

          background: #ffffff;
        }

        .farmer-focus-grid {
          display: grid;

          grid-template-columns:
            0.9fr
            1.1fr;

          align-items: center;

          gap: 75px;
        }

        .farmer-focus-content h2 {
          margin:
            0
            0
            22px;

          color: #092b68;

          font-size:
            clamp(
              34px,
              4.5vw,
              52px
            );

          font-weight: 850;

          line-height: 1.14;
        }

        .farmer-focus-content > p {
          margin:
            0
            0
            18px;

          color: #65778b;

          font-size: 16px;

          line-height: 1.9;
        }

        .focus-list {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap: 14px;

          margin-top: 30px;
        }

        .focus-list-item {
          display: flex;

          align-items: flex-start;

          gap: 12px;

          padding:
            16px
            15px;

          background: #f7faf6;

          border-radius: 13px;
        }

        .focus-list-item i {
          color: #5db747;
        }

        .focus-list-item strong {
          display: block;

          margin-bottom: 4px;

          color: #092b68;

          font-size: 14px;
        }

        .focus-list-item span {
          color: #738397;

          font-size: 12px;

          line-height: 1.55;
        }

        .farmer-focus-image {
          position: relative;
        }

        .farmer-focus-image img {
          width: 100%;
          height: 560px;

          display: block;

          object-fit: cover;

          border-radius: 26px;
        }

        .focus-badge {
          position: absolute;

          left: 25px;
          bottom: 25px;

          max-width: 260px;

          padding:
            22px
            20px;

          background:
            rgba(
              9,
              43,
              104,
              0.94
            );

          color: #ffffff;

          border-radius: 16px;
        }

        .focus-badge i {
          margin-bottom: 10px;

          color: #fbb515;

          font-size: 24px;
        }

        .focus-badge strong {
          display: block;

          margin-bottom: 5px;
        }

        .focus-badge span {
          color:
            rgba(
              255,
              255,
              255,
              0.72
            );

          font-size: 12px;
        }

        /* ==========================================
           CATEGORIES
        ========================================== */

        .categories-section {
          padding:
            100px
            0;

          background: #f7faf6;
        }

        .section-heading {
          max-width: 720px;

          margin:
            0 auto
            50px;

          text-align: center;
        }

        .categories-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 25px;
        }

        .category-card {
          position: relative;

          min-height: 370px;

          overflow: hidden;

          border-radius: 20px;
        }

        .category-card img {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.6s ease;
        }

        .category-card:hover img {
          transform: scale(1.08);
        }

        .category-overlay {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: flex-end;

          padding: 28px;

          background:
            linear-gradient(
              to top,
              rgba(
                4,
                28,
                70,
                0.94
              ),
              rgba(
                4,
                28,
                70,
                0.12
              )
            );
        }

        .category-content {
          position: relative;

          z-index: 2;
        }

        .category-content i {
          margin-bottom: 12px;

          color: #fbb515;

          font-size: 25px;
        }

        .category-content h3 {
          margin:
            0
            0
            8px;

          color: #ffffff;

          font-size: 23px;
        }

        .category-content p {
          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.75
            );

          font-size: 14px;

          line-height: 1.7;
        }

        /* ==========================================
           STATS
        ========================================== */

        .stats-section {
          padding:
            70px
            0;

          background: #092b68;
        }

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          gap: 25px;
        }

        .stat-item {
          text-align: center;

          color: #ffffff;
        }

        .stat-item i {
          margin-bottom: 14px;

          color: #fbb515;

          font-size: 26px;
        }

        .stat-item h3 {
          margin: 0;

          font-size: 34px;
        }

        .stat-item p {
          color:
            rgba(
              255,
              255,
              255,
              0.7
            );

          font-size: 13px;
        }

        /* ==========================================
           CTA
        ========================================== */

        .home-cta {
          padding:
            105px
            20px;

          text-align: center;

          background:
            linear-gradient(
              135deg,
              #eef8eb,
              #fff9e8
            );
        }

        .home-cta-content {
          max-width: 780px;

          margin: 0 auto;
        }

        .home-cta h2 {
          margin:
            0
            0
            15px;

          color: #092b68;

          font-size:
            clamp(
              32px,
              4vw,
              47px
            );

          font-weight: 850;
        }

        .home-cta p {
          max-width: 680px;

          margin:
            0 auto
            28px;

          color: #64758a;

          font-size: 16px;

          line-height: 1.85;
        }

        .cta-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding:
            15px
            27px;

          background: #5db747;

          color: #ffffff;

          text-decoration: none;

          border-radius: 8px;

          font-weight: 700;
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media screen and
        (max-width: 1000px) {

          .features-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .about-grid,
          .farmer-focus-grid {
            gap: 45px;
          }

        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media screen and
        (max-width: 768px) {

          .hero-section {
            height:
              calc(
                100vh - 85px
              );

            min-height: 650px;

            max-height: 820px;
          }

          .hero-first-picture img {
            object-fit: cover;

            object-position:
              top center;
          }

          /*
            Mobile first slide text matches
            your reference positioning.
          */

          .hero-section.first-slide-active
          .hero-content-wrapper {
            width:
              calc(
                100% - 46px
              );

            margin-top: -70px;
          }

          .first-hero-content {
            max-width: 330px;
          }

          .first-hero-title {
            font-size:
              clamp(
                39px,
                10vw,
                52px
              );

            line-height: 1.05;

            letter-spacing: -1.5px;
          }

          .first-title-line {
            width: 80px;

            margin:
              18px
              0;
          }

          .first-hero-description {
            max-width: 300px;

            margin-bottom: 25px;

            font-size: 16px;

            line-height: 1.65;
          }

          .first-hero-buttons {
            flex-direction: column;

            align-items:
              flex-start;

            gap: 12px;
          }

          .first-products-btn,
          .dealer-btn {
            min-width: 230px;
          }

          .hero-content-wrapper {
            width:
              calc(
                100% - 40px
              );
          }

          .hero-title {
            font-size:
              clamp(
                40px,
                10vw,
                58px
              );
          }

          .features-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 14px;
          }

          .feature-card {
            padding:
              23px
              18px;
          }

          .feature-card h3 {
            font-size: 16px;
          }

          .feature-card p {
            font-size: 12.5px;
          }

          .about-grid,
          .farmer-focus-grid {
            grid-template-columns:
              1fr;
          }

          .farmer-focus-image {
            order: -1;
          }

          .categories-grid {
            grid-template-columns:
              1fr;
          }

          .stats-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media screen and
        (max-width: 480px) {

          .home-container {
            width:
              calc(
                100% - 30px
              );
          }

          .hero-section {
            height:
              calc(
                100vh - 78px
              );

            min-height: 650px;
          }

          .hero-section.first-slide-active
          .hero-content-wrapper {
            width:
              calc(
                100% - 36px
              );

            margin-top: -60px;
          }

          .first-hero-title {
            font-size: 39px;
          }

          .first-hero-description {
            font-size: 15px;
          }

          .first-products-btn,
          .dealer-btn {
            min-width: 220px;

            padding:
              12px
              22px;
          }

          .features-section,
          .home-about,
          .farmer-focus-section,
          .categories-section {
            padding:
              70px
              0;
          }

          .features-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 10px;
          }

          .feature-card {
            padding:
              19px
              12px;
          }

          .feature-icon {
            width: 41px;
            height: 41px;

            font-size: 16px;
          }

          .feature-card h3 {
            font-size: 13px;
          }

          .feature-card p {
            font-size: 11px;
          }

          .about-image {
            height: 350px;
          }

          .about-points,
          .focus-list {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 10px;
          }

          .farmer-focus-image img {
            height: 360px;
          }

          .category-card {
            min-height: 330px;
          }

          .stats-grid {
            gap: 20px;
          }

          .home-cta {
            padding:
              75px
              20px;
          }

        }

      `}</style>

      <main className="home-page">

        {/* ==========================================
            HERO
        ========================================== */}

        <section
          className={`hero-section ${
            currentSlide === 0
              ? "first-slide-active"
              : ""
          }`}
        >

          {/* IMAGES */}

          {slides.map(
            (slide, index) => (

              <div
                key={index}
                className={`hero-slide ${
                  currentSlide === index
                    ? "active"
                    : ""
                }`}
              >

                {index === 0 ? (

                  <picture
                    className="hero-first-picture"
                  >

                    <source
                      media="(max-width: 768px)"
                      srcSet="/assets/mob.png"
                    />

                    <img
                      src={
                        imageSources[index] ||
                        "/assets/desk.png"
                      }
                      alt="Daiva Pesticides"
                      loading="eager"
                      fetchPriority="high"
                      onError={() =>
                        handleImageError(
                          index
                        )
                      }
                    />

                  </picture>

                ) : (

                  <img
                    src={
                      imageSources[index] ||
                      slide.localImage
                    }
                    alt={slide.title}
                    loading="lazy"
                    onError={() =>
                      handleImageError(
                        index
                      )
                    }
                  />

                )}

              </div>

            )
          )}

          {/* STANDARD OVERLAY */}

          <div className="hero-overlay">
          </div>

          {/* ==========================================
              CHANGING CONTENT
          ========================================== */}

          <div
            className="hero-content-wrapper"
            key={currentSlide}
          >

            {currentSlide === 0 ? (

              /* ====================================
                 FIRST SLIDE
              ==================================== */

              <div className="first-hero-content">

                <h1 className="first-hero-title">

                  Protecting Crops,

                  <span>
                    Enriching Lives.
                  </span>

                </h1>

                <div className="first-title-line">
                </div>

                <p className="first-hero-description">

                  Innovative crop protection
                  and agricultural solutions
                  for a sustainable and better
                  tomorrow.

                </p>

                <div className="first-hero-buttons">

                  <Link
                    to="/products"
                    className="first-products-btn"
                  >

                    <i className="fa-solid fa-leaf">
                    </i>

                    Our Products

                  </Link>

                  <Link
                    to="/contact"
                    className="dealer-btn"
                  >

                    <i className="fa-solid fa-user-group">
                    </i>

                    Become a Dealer

                  </Link>

                </div>

              </div>

            ) : (

              /* ====================================
                 OTHER SLIDES
              ==================================== */

              <div className="hero-content">

                <div className="hero-small-title">

                  <span className="hero-small-line">
                  </span>

                  {
                    activeSlide.smallTitle
                  }

                </div>

                <h1 className="hero-title">

                  {activeSlide.title}

                  <span className="hero-highlight">

                    {
                      activeSlide.highlight
                    }

                  </span>

                </h1>

                <p className="hero-description">

                  {
                    activeSlide.description
                  }

                </p>

                <div className="hero-buttons">

                  <Link
                    to={
                      activeSlide.buttonLink
                    }
                    className="hero-primary-btn"
                  >

                    {
                      activeSlide.buttonText
                    }

                    <i className="fa-solid fa-arrow-right">
                    </i>

                  </Link>

                  <Link
                    to="/contact"
                    className="hero-secondary-btn"
                  >

                    <i className="fa-solid fa-phone">
                    </i>

                    Contact Us

                  </Link>

                </div>

              </div>

            )}

          </div>

          {/* DOTS */}

          <div className="hero-dots">

            {slides.map(
              (_, index) => (

                <button
                  key={index}
                  type="button"
                  className={`hero-dot ${
                    currentSlide === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentSlide(
                      index
                    )
                  }
                  aria-label={`Go to slide ${
                    index + 1
                  }`}
                >
                </button>

              )
            )}

          </div>

        </section>

        {/* ==========================================
            FEATURES
        ========================================== */}

        <section className="features-section">

          <div className="home-container">

            <div className="features-heading home-animate">

              <span className="section-label">

                Why Daiva Pesticides

              </span>

              <h2>

                Built Around Farmers,
                Fields and Better Results.

              </h2>

              <p>

                Our approach combines dependable
                crop protection, farmer-focused
                thinking, product quality and
                long-term support to help
                agricultural communities move
                forward with greater confidence.

              </p>

            </div>

            <div className="features-grid">

              <div className="feature-card home-animate">

                <div className="feature-icon">

                  <i className="fa-solid fa-shield-halved">
                  </i>

                </div>

                <h3>
                  Crop Protection
                </h3>

                <p>

                  Dependable agricultural solutions
                  designed to help protect crops from
                  field challenges while supporting
                  healthier growth and stronger crop
                  performance.

                </p>

              </div>

              <div className="feature-card home-animate">

                <div className="feature-icon">

                  <i className="fa-solid fa-leaf">
                  </i>

                </div>

                <h3>
                  Quality Products
                </h3>

                <p>

                  Agricultural products developed
                  with a focus on quality,
                  reliability and practical field
                  requirements so farmers can choose
                  solutions with greater confidence.

                </p>

              </div>

              <div className="feature-card home-animate">

                <div className="feature-icon">

                  <i className="fa-solid fa-user-group">
                  </i>

                </div>

                <h3>
                  Farmer Focused
                </h3>

                <p>

                  We keep farmer requirements at the
                  centre of our thinking and focus on
                  solutions that support productivity,
                  crop health and practical
                  agricultural needs.

                </p>

              </div>

              <div className="feature-card home-animate">

                <div className="feature-icon">

                  <i className="fa-solid fa-handshake">
                  </i>

                </div>

                <h3>
                  Trusted Support
                </h3>

                <p>

                  We aim to build lasting relationships
                  with farmers and dealer partners
                  through dependable service, clear
                  communication and continued
                  agricultural support.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            ABOUT
        ========================================== */}

        <section className="home-about">

          <div className="home-container">

            <div className="about-grid">

              <div
                className="
                  about-image-wrapper
                  home-animate
                  home-animate-left
                "
              >

                <img
                  className="about-image"
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80"
                  alt="Agriculture field"
                  loading="lazy"
                />

                <div className="about-experience">

                  <i className="fa-solid fa-handshake">
                  </i>

                  <strong>
                    Trusted Care
                  </strong>

                  <span>
                    For Better Agriculture
                  </span>

                </div>

              </div>

              <div
                className="
                  about-content
                  home-animate
                  home-animate-right
                "
              >

                <span className="section-label">

                  About Daiva Pesticides

                </span>

                <h2>

                  Working Together for
                  Better Agriculture

                </h2>

                <p>

                  At Daiva Pesticides, we are
                  committed to supporting farming
                  communities with dependable crop
                  protection and agricultural
                  solutions built around practical
                  field requirements.

                </p>

                <p>

                  Our goal is not limited to product
                  supply. We aim to understand the
                  challenges farmers face, strengthen
                  agricultural relationships and
                  contribute to healthier crops and
                  more productive farming.

                </p>

                <div className="about-points">

                  <div className="about-point">

                    <i className="fa-solid fa-check">
                    </i>

                    Reliable Solutions

                  </div>

                  <div className="about-point">

                    <i className="fa-solid fa-check">
                    </i>

                    Farmer Focused

                  </div>

                  <div className="about-point">

                    <i className="fa-solid fa-check">
                    </i>

                    Quality Products

                  </div>

                  <div className="about-point">

                    <i className="fa-solid fa-check">
                    </i>

                    Dedicated Support

                  </div>

                </div>

                <Link
                  to="/about"
                  className="learn-more-btn"
                >

                  Discover Our Story

                  <i className="fa-solid fa-arrow-right">
                  </i>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            FARMER FOCUS
        ========================================== */}

        <section className="farmer-focus-section">

          <div className="home-container">

            <div className="farmer-focus-grid">

              <div
                className="
                  farmer-focus-content
                  home-animate
                  home-animate-left
                "
              >

                <span className="section-label">

                  From Field to Farmer

                </span>

                <h2>

                  Understanding Real
                  Agricultural Challenges.

                </h2>

                <p>

                  Agriculture changes from crop to
                  crop, field to field and season
                  to season. That is why we believe
                  better agricultural solutions begin
                  with understanding real farming
                  conditions.

                </p>

                <p>

                  Through farmer interaction, dealer
                  relationships and continuous field
                  learning, Daiva Pesticides aims to
                  develop a practical approach that
                  supports stronger decision-making
                  and better farming outcomes.

                </p>

                <div className="focus-list">

                  <div className="focus-list-item">

                    <i className="fa-solid fa-check">
                    </i>

                    <div>

                      <strong>
                        Field Understanding
                      </strong>

                      <span>
                        Learning from real crop
                        conditions.
                      </span>

                    </div>

                  </div>

                  <div className="focus-list-item">

                    <i className="fa-solid fa-check">
                    </i>

                    <div>

                      <strong>
                        Farmer Feedback
                      </strong>

                      <span>
                        Listening to practical farming
                        experiences.
                      </span>

                    </div>

                  </div>

                  <div className="focus-list-item">

                    <i className="fa-solid fa-check">
                    </i>

                    <div>

                      <strong>
                        Dealer Partnerships
                      </strong>

                      <span>
                        Building stronger distribution
                        relationships.
                      </span>

                    </div>

                  </div>

                  <div className="focus-list-item">

                    <i className="fa-solid fa-check">
                    </i>

                    <div>

                      <strong>
                        Better Accessibility
                      </strong>

                      <span>
                        Bringing dependable solutions
                        closer to farmers.
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              <div
                className="
                  farmer-focus-image
                  home-animate
                  home-animate-right
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1100&q=80"
                  alt="Farmer focused agriculture"
                  loading="lazy"
                />

                <div className="focus-badge">

                  <i className="fa-solid fa-seedling">
                  </i>

                  <strong>

                    Growing Through Understanding

                  </strong>

                  <span>

                    Better agricultural thinking
                    starts with listening to farmers
                    and learning from the field.

                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            CATEGORIES
        ========================================== */}

        <section className="categories-section">

          <div className="home-container">

            <div className="section-heading home-animate">

              <span className="section-label">

                Our Solutions

              </span>

              <h2>

                Solutions for Healthier Crops

              </h2>

              <p>

                Explore agricultural solutions
                designed around crop protection,
                plant care and practical farming
                requirements.

              </p>

            </div>

            <div className="categories-grid">

              <div className="category-card home-animate">

                <img
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80"
                  alt="Crop protection"
                  loading="lazy"
                />

                <div className="category-overlay">

                  <div className="category-content">

                    <i className="fa-solid fa-shield-halved">
                    </i>

                    <h3>
                      Crop Protection
                    </h3>

                    <p>

                      Practical solutions designed
                      to help safeguard crops and
                      support healthier, stronger
                      fields.

                    </p>

                  </div>

                </div>

              </div>

              <div className="category-card home-animate">

                <img
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80"
                  alt="Plant care"
                  loading="lazy"
                />

                <div className="category-overlay">

                  <div className="category-content">

                    <i className="fa-solid fa-leaf">
                    </i>

                    <h3>
                      Plant Care
                    </h3>

                    <p>

                      Agricultural solutions focused
                      on supporting healthier plant
                      development and crop growth.

                    </p>

                  </div>

                </div>

              </div>

              <div className="category-card home-animate">

                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
                  alt="Agriculture solutions"
                  loading="lazy"
                />

                <div className="category-overlay">

                  <div className="category-content">

                    <i className="fa-solid fa-wheat-awn">
                    </i>

                    <h3>
                      Farming Solutions
                    </h3>

                    <p>

                      Supporting productive farming
                      through dependable products and
                      practical agricultural thinking.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            STATS
        ========================================== */}

        <section className="stats-section">

          <div className="home-container">

            <div className="stats-grid">

              <div className="stat-item home-animate">

                <i className="fa-solid fa-seedling">
                </i>

                <h3>
                  Quality
                </h3>

                <p>
                  Agricultural Solutions
                </p>

              </div>

              <div className="stat-item home-animate">

                <i className="fa-solid fa-handshake">
                </i>

                <h3>
                  Trust
                </h3>

                <p>
                  Strong Relationships
                </p>

              </div>

              <div className="stat-item home-animate">

                <i className="fa-solid fa-tractor">
                </i>

                <h3>
                  Farmers
                </h3>

                <p>
                  Our Main Focus
                </p>

              </div>

              <div className="stat-item home-animate">

                <i className="fa-solid fa-leaf">
                </i>

                <h3>
                  Growth
                </h3>

                <p>
                  Better Agriculture
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            CTA
        ========================================== */}

        <section className="home-cta">

          <div className="home-cta-content home-animate">

            <span className="section-label">

              Let's Grow Together

            </span>

            <h2>

              Looking for the Right
              Agricultural Solution?

            </h2>

            <p>

              Connect with Daiva Pesticides and
              discover dependable agricultural
              solutions focused on crop protection,
              farmer needs and productive farming.

            </p>

            <Link
              to="/contact"
              className="cta-button"
            >

              Get In Touch

              <i className="fa-solid fa-arrow-right">
              </i>

            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;