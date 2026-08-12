import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const products = [
    // WATER SOLUBLE FERTILIZERS
    {
      id: 1,
      name: "NPK 00:52:34",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro1.png",
      description:
        "A high-quality water soluble fertilizer designed to support flowering, fruit development and stronger crop performance.",
    },
    {
      id: 2,
      name: "NPK 00:00:50",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro2.png",
      description:
        "A potassium-rich water soluble fertilizer formulated to support crop quality, maturity and better plant strength.",
    },
    {
      id: 3,
      name: "Nitro Cal + B",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro3.png",
      description:
        "A calcium and boron based formulation designed to support plant development, fruit quality and stronger crop growth.",
    },
    {
      id: 4,
      name: "Nitro Cal",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro4.png",
      description:
        "A crop nutrition solution developed to support calcium requirements and encourage healthier plant development.",
    },
    {
      id: 5,
      name: "NPK 00:37:37+ TE",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro5.png",
      description:
        "A mycorrhizal bio fertilizer designed to support root development, nutrient uptake and healthier crop establishment.",
    },
    {
      id: 6,
      name: "NPK 13:00:45",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro6.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 7,
      name: "NPK 13:14:13",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro7.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 8,
      name: "NPK 19:19:19",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro8.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 9,
      name: "NPK 20:20:20",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro9.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 10,
      name: "Microly",
      type: "100% Water Soluble Nutrient Granules(20kg)",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro10.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 11,
      name: "Grade-|",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro11.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 12,
      name: "Grade-||",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro12.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    {
      id: 13,
      name: "K-Set",
      type: "100% Water Soluble Fertilizer",
      category: "Fertilizers",
      subCategory: "Water Soluble Fertilizers",
      image: "/assets/pro13.png",
      description:
        "A balanced plant nutrition solution developed to support crop vitality, plant development and productive growth.",
    },
    // HERBICIDES
    {
      id: 14,
      name: "QuiZon 10",
      type: "Quizalofop Ethyl 10% EC Herbicide",
      category: "Herbicides",
      subCategory: null,
      image: "/assets/pro14.png",
      description:
        "A selective herbicide for effective control of annual and perennial grasses in broadleaf crops.",
    },
    {
      id: 15,
      name: "ATRAX",
      type: "Atrazine 50% W.P Herbicide",
      category: "Herbicides",
      subCategory: null,
      image: "/assets/pro15.png",
      description:
        "A broad-spectrum herbicide for pre and post-emergence control of weeds in maize and sugarcane crops.",
    },
    // FUNGICIDES
    {
      id: 16,
      name: "TEBSUL",
      type: "Tebuconazole 10% + Sulphur 65% WG",
      category: "Fungicides",
      subCategory: null,
      image: "/assets/pro16.png",
      description:
        "A systemic fungicide with contact action for broad-spectrum disease control in various crops.",
    },
  ];

  // Get unique categories
  const categories = ["All", "Fertilizers", "Water Soluble Fertilizers", "Herbicides", "Fungicides", "Insecticides", "Bio-logicals"];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : selectedCategory === "Water Soluble Fertilizers"
    ? products.filter(product => product.subCategory === "Water Soluble Fertilizers")
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("product-show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".product-animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [filteredProducts]);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .products-page {
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

        .products-container {
          width: 90%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* ==========================================
           ANIMATIONS
        ========================================== */

        .product-animate {
          opacity: 0;
          transform: translateY(50px) scale(0.96);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .product-animate.product-show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes growLine {
          from { width: 0; opacity: 0; }
          to { width: 40px; opacity: 1; }
        }

        .hero-anim {
          opacity: 0;
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .hero-delay-1 { animation-delay: 0.2s; }
        .hero-delay-2 { animation-delay: 0.4s; }
        .hero-delay-3 { animation-delay: 0.6s; }

        /* ==========================================
           HERO
        ========================================== */

        .products-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image:
            linear-gradient(
              90deg,
              rgba(5, 31, 76, 0.96),
              rgba(5, 31, 76, 0.77),
              rgba(5, 31, 76, 0.25)
            ),
            url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80");
        }

        @media screen and (max-width: 768px) {
          .products-hero {
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image:
              linear-gradient(
                90deg,
                rgba(5, 31, 76, 0.92),
                rgba(5, 31, 76, 0.6)
              ),
              url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80");
          }
        }

        .products-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .products-small-title {
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

        .products-small-line {
          height: 3px;
          background: #fbb515;
          border-radius: 20px;
          animation: growLine 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
          width: 0;
        }

        .products-hero h1 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(50px, 7vw, 82px);
          font-weight: 850;
          line-height: 1.03;
          letter-spacing: -3px;
        }

        .products-hero h1 span {
          display: block;
          color: #72c453;
        }

        .products-hero p {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.85;
        }

        /* ==========================================
           INTRO
        ========================================== */

        .products-intro {
          padding: 95px 0 45px;
          background: #ffffff;
        }

        .products-heading {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .products-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #5db747;
          font-size: 13px;
          font-weight: 850;
          letter-spacing: 2.2px;
          text-transform: uppercase;
        }

        .products-heading h2 {
          margin: 0 0 18px;
          color: #092b68;
          font-size: clamp(35px, 5vw, 52px);
          font-weight: 850;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .products-heading p {
          margin: 0;
          color: #697b8f;
          font-size: 16px;
          line-height: 1.85;
        }

        /* ==========================================
           CATEGORY FILTER
        ========================================== */

        .category-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin: 40px 0 50px;
        }

        .category-btn {
          padding: 10px 24px;
          background: #f0f4f0;
          color: #092b68;
          border: 2px solid transparent;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          font-family: inherit;
        }

        .category-btn:hover {
          background: #e4ece4;
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: #092b68;
          color: #ffffff;
          border-color: #092b68;
          box-shadow: 0 8px 20px rgba(9, 43, 104, 0.25);
        }

        .category-btn.active:hover {
          background: #0d3a82;
        }

        @media screen and (max-width: 650px) {
          .category-filter {
            gap: 8px;
            margin: 25px 0 30px;
          }

          .category-btn {
            padding: 8px 16px;
            font-size: 12px;
          }
        }

        /* ==========================================
           PRODUCTS GRID
        ========================================== */

        .products-section {
          padding: 20px 0 110px;
          background: #ffffff;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .product-card {
          position: relative;
          min-width: 0;
          background: #ffffff;
          border: 1px solid rgba(9, 43, 104, 0.08);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(9, 43, 104, 0.06);
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .product-card:hover {
          transform: translateY(-12px);
          border-color: rgba(93, 183, 71, 0.28);
          box-shadow: 0 25px 55px rgba(9, 43, 104, 0.13);
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0; 
          overflow: hidden;
          background: #eef3ee;
        }

        .product-image {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover; 
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.08) translateY(-3px);
        }

        .product-category-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 4;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.95);
          color: #16832b;
          border: 1px solid rgba(93, 183, 71, 0.18);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .product-content {
          padding: 27px 26px 30px;
        }

        .product-content h3 {
          margin: 0 0 8px;
          color: #092b68;
          font-size: 24px;
          font-weight: 850;
          line-height: 1.25;
        }

        .product-type {
          display: block;
          margin-bottom: 0;
          color: #5db747;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 22px;
          padding-top: 20px;
          border-top: 1px solid rgba(9, 43, 104, 0.08);
        }

        .product-quality {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #536679;
          font-size: 12px;
          font-weight: 700;
        }

        .product-quality i {
          color: #5db747;
        }

        .product-enquiry {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(9, 43, 104, 0.07);
          color: #092b68;
          border-radius: 50%;
          text-decoration: none;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .product-enquiry:hover {
          background: #5db747;
          color: #ffffff;
          transform: translateX(3px);
        }

        /* ==========================================
           SUPPORT
        ========================================== */

        .product-support {
          padding: 95px 0;
          background: #f7faf6;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .support-card {
          padding: 30px 24px;
          text-align: center;
          background: #ffffff;
          border-radius: 17px;
          border: 1px solid rgba(9, 43, 104, 0.06);
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .support-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 16px 40px rgba(9, 43, 104, 0.08);
        }

        .support-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          background: rgba(93, 183, 71, 0.1);
          color: #5db747;
          border-radius: 15px;
          font-size: 23px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .support-card:hover .support-icon {
          transform: scale(1.1);
        }

        .support-card h3 {
          margin: 0 0 9px;
          color: #092b68;
          font-size: 17px;
          font-weight: 800;
        }

        .support-card p {
          margin: 0;
          color: #748397;
          font-size: 12px;
          line-height: 1.7;
        }

        /* ==========================================
           CTA
        ========================================== */
        
        @keyframes floatCTA {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .products-cta {
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(135deg, #061f4d, #092b68);
        }

        .products-cta-content {
          max-width: 760px;
          margin: 0 auto;
        }

        .products-cta .products-label {
          color: #fbb515;
        }

        .products-cta h2 {
          margin: 0 0 17px;
          color: #ffffff;
          font-size: clamp(35px, 5vw, 53px);
          font-weight: 850;
          line-height: 1.12;
        }

        .products-cta p {
          max-width: 650px;
          margin: 0 auto 28px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.85;
        }

        .products-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 27px;
          background: #5db747;
          color: #ffffff;
          text-decoration: none;
          border-radius: 9px;
          font-size: 15px;
          font-weight: 800;
          animation: floatCTA 3.5s ease-in-out infinite;
          transition:
            background 0.3s ease,
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease;
        }

        .products-cta-btn:hover {
          animation: none;
          background: #4da23a;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(93, 183, 71, 0.4);
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media screen and (max-width: 1000px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media screen and (max-width: 650px) {
          .products-container {
            width: calc(100% - 30px);
          }

          .products-hero {
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image:
              linear-gradient(
                90deg,
                rgba(5, 31, 76, 0.92),
                rgba(5, 31, 76, 0.6)
              ),
              url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80");
          }

          .products-hero h1 {
            font-size: 46px;
          }

          .products-hero p {
            font-size: 15px;
          }

          .products-intro {
            padding: 70px 0 35px;
          }

          .products-section {
            padding: 20px 0 75px;
          }

          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 11px;
          }

          .product-card {
            border-radius: 15px;
          }

          .product-image-wrapper {
            height: 210px;
            padding: 0; 
            background: #eef3ee;
          }

          .product-category-badge {
            display: none;
          }

          .product-content {
            padding: 18px 13px 20px;
          }

          .product-content h3 {
            font-size: 17px;
            line-height: 1.25;
          }

          .product-type {
            font-size: 9px;
            line-height: 1.5;
          }

          .product-bottom {
            margin-top: 15px;
            padding-top: 14px;
          }

          .product-quality {
            font-size: 9px;
          }

          .product-enquiry {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            font-size: 12px;
          }

          .product-support {
            padding: 70px 0;
          }

          .support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .support-card {
            padding: 23px 12px;
          }

          .support-icon {
            width: 48px;
            height: 48px;
            font-size: 19px;
          }

          .support-card h3 {
            font-size: 14px;
          }

          .support-card p {
            font-size: 10.5px;
          }

          .products-cta {
            padding: 75px 20px;
          }
        }

        /* ==========================================
           EXTRA SMALL MOBILE
        ========================================== */

        @media screen and (max-width: 380px) {
          .products-grid {
            gap: 8px;
          }

          .product-image-wrapper {
            height: 180px;
          }

          .product-content {
            padding: 15px 10px 17px;
          }

          .product-content h3 {
            font-size: 15px;
          }

          .product-type {
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-animate,
          .hero-anim,
          .products-cta-btn {
            opacity: 1;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
        }

      `}</style>

      <main className="products-page">
        {/* HERO */}
        <section className="products-hero">
          <div className="products-container">
            <div className="products-hero-content">
              <div className="products-small-title hero-anim hero-delay-1">
                <span className="products-small-line"></span>
                Our Products
              </div>
              <h1 className="hero-anim hero-delay-2">
                Better Nutrition.
                <span>Stronger Crops.</span>
              </h1>
              <p className="hero-anim hero-delay-3">
                Explore Daiva Pesticides agricultural products developed to support
                crop nutrition, plant development and better farming performance.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="products-intro">
          <div className="products-container">
            <div className="products-heading product-animate">
              <span className="products-label">Product Portfolio</span>
              <h2>Solutions Designed for Better Crop Performance.</h2>
              <p>
                Our product portfolio includes water soluble fertilizers, plant
                nutrition solutions and bio fertilizers developed around practical
                agricultural needs and better crop development.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS WITH CATEGORY FILTER */}
        <section className="products-section">
          <div className="products-container">
            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <article
                    className="product-card product-animate"
                    key={product.id}
                    style={{ transitionDelay: `${(index % 6) * 0.1}s` }}
                  >
                    <div className="product-image-wrapper">
                      <div className="product-category-badge">
                        {product.subCategory || product.category}
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="product-content">
                      <h3>{product.name}</h3>
                      <span className="product-type">{product.type}</span>
                      <div className="product-bottom">
                        <div className="product-quality">
                          <i className="fa-solid fa-circle-check"></i>
                          Quality Focused
                        </div>
                        <Link
                          to="/contact"
                          className="product-enquiry"
                          aria-label={`Enquire about ${product.name}`}
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div style={{ 
                  gridColumn: "1 / -1", 
                  textAlign: "center", 
                  padding: "60px 20px",
                  color: "#697b8f",
                  fontSize: "18px"
                }}>
                  <i className="fa-solid fa-box-open" style={{ fontSize: "40px", display: "block", marginBottom: "15px", color: "#5db747" }}></i>
                  No products found in this category.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <section className="product-support">
          <div className="products-container">
            <div className="support-grid">
              <div className="support-card product-animate" style={{ transitionDelay: "0s" }}>
                <div className="support-icon">
                  <i className="fa-solid fa-droplet"></i>
                </div>
                <h3>Water Soluble</h3>
                <p>
                  Product solutions designed for convenient nutrient application.
                </p>
              </div>
              <div className="support-card product-animate" style={{ transitionDelay: "0.15s" }}>
                <div className="support-icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h3>Crop Nutrition</h3>
                <p>Supporting plant development and productive crop growth.</p>
              </div>
              <div className="support-card product-animate" style={{ transitionDelay: "0.3s" }}>
                <div className="support-icon">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <h3>Quality Focus</h3>
                <p>
                  Agricultural solutions developed around practical crop
                  requirements.
                </p>
              </div>
              <div className="support-card product-animate" style={{ transitionDelay: "0.45s" }}>
                <div className="support-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3>Farmer Support</h3>
                <p>
                  Building trusted relationships with farmers and agricultural
                  partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="products-cta">
          <div className="products-cta-content product-animate">
            <span className="products-label">Product Enquiries</span>
            <h2>Looking for the Right Crop Nutrition Solution?</h2>
            <p>
              Connect with Daiva Pesticides to learn more about our products and
              find the right agricultural solutions for your requirements.
            </p>
            <Link to="/contact" className="products-cta-btn">
              Contact Our Team
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;