import React, { useState } from "react";
import { Link } from "react-router-dom";

import Prod1 from "../assets/images/products/calcipro.png";
import Prod2 from "../assets/images/products/bioshield.png";
import Prod3 from "../assets/images/products/shellguard.png";
import Prod4 from "../assets/images/products/mintreat.png";
import Prod5 from "../assets/images/products/enzyplus.png";
import Prod6 from "../assets/images/products/aqsan.png";
import Prod7 from "../assets/images/products/phytacare.png";
import Prod8 from "../assets/images/products/aqmix.png";

export default function ProductsSection({ showButton = true }) {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: "calcipro", name: "CalciPro", img: Prod1, category: "Nutrition" },
    { id: "bioshield-x", name: "BioShield-X", img: Prod2, category: "Nutrition" },
    { id: "shellguard", name: "ShellGuard", img: Prod3, category: "Nutrition" },
    { id: "mintreat", name: "MinTreat", img: Prod4, category: "Supplements" },
    { id: "enzyplus-p", name: "EnzyPlus", img: Prod5, category: "Supplements" },
    { id: "aq-san", name: "Aq San", img: Prod6, category: "Veterinary" },
    { id: "phytacare", name: "PhytaCare", img: Prod7, category: "Supplements" },
    { id: "aq-mix", name: "Aq Mix", img: Prod8, category: "Nutrition" },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0470aa 0%, #2d6715 100%)",
      }}
    >
      {/* Background Animation */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-white uppercase bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Our Collection
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Premium{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Cutting-edge veterinary & nutritional solutions engineered
            for optimal poultry health and performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="no-underline hover:no-underline"
              style={{ textDecoration: "none" }}
            >
              <div
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 p-3 cursor-pointer
                  ${
                    hoveredId === product.id
                      ? "shadow-[0_8px_30px_rgba(0,0,0,0.25)] scale-[1.04]"
                      : "shadow-xl"
                  }
                `}
              >
                {/* Image Section */}
                <div className="relative h-35 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className={`object-contain transition-all duration-700 ${
                      hoveredId === product.id
                        ? "scale-110 brightness-90"
                        : "scale-100"
                    }`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
                      hoveredId === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Category Badge */}
                  <span
                    className="
                      absolute top-0 left-0 px-3 py-1.5 text-xs font-bold text-white
                      rounded-full shadow-lg
                      bg-gradient-to-r from-[#2d6715] to-[#0470aa]
                      border border-white/50 animate-pulse
                    "
                  >
                    {product.category}
                  </span>

                  {/* Quick View Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredId === product.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <button className="px-3 py-3 bg-[#0470aa] text-white font-bold rounded-full shadow-xl hover:scale-90 transition">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 mt-3">
                  

                  <div className="mt-3 flex items-center gap-2 text-[#0470aa] font-semibold text-xl !no-underline">
                    <span className="no-underline group-hover:no-underline">Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {showButton && (
          <div className="text-center mt-16">
            <Link to="/products">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0470aa] to-teal-500 text-white font-bold rounded-full shadow-xl hover:scale-105 transition">
                View All Products
              </button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
