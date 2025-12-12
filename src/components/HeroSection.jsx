import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Herobanner1 from "../assets/images/aviquest hero2.1.png";
import Herobanner2 from "../assets/images/aviquest hero1.jpg";
import Herobanner3 from "../assets/images/aviquest hero3.png";

export default function HeroSection() {
  const navigate = useNavigate();

  const slides = [
    {
      image: Herobanner1,
      title: "Premium Nutrition for Better Growth",
      subtitle: "High-quality formulations crafted with advanced scientific precision.",
    },
    {
      image: Herobanner2,
      title: "Global Export Standards Delivered",
      subtitle: "Trusted by clients worldwide for consistent quality and performance.",
    },
    {
      image: Herobanner3,
      title: "Enhancing Productivity & Efficiency",
      subtitle: "Innovative solutions designed for maximum yield and safety.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="w-full h-[90vh] md:h-[100vh] relative overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[900ms] pointer-events-none
            ${index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
          `}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt="slide" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
        bg-white/30 hover:bg-white/70 text-[#0470aa] 
        p-1.5 md:p-2 rounded-full shadow-md transition z-30 pointer-events-auto"
      >
        <FaChevronLeft size={18} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
        bg-white/30 hover:bg-white/70 text-[#0470aa] 
        p-1.5 md:p-2 rounded-full shadow-md transition z-30 pointer-events-auto"
      >
        <FaChevronRight size={18} />
      </button>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-end pb-20 sm:pb-28 md:pb-32 z-20 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

          {/* Title */}
          <h1
            className="
              text-white 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold leading-tight drop-shadow-lg 
              max-w-xl sm:max-w-2xl md:max-w-3xl mb-3 sm:mb-4
            "
          >
            {slides[current].title}
          </h1>

          {/* Subtitle */}
          <p
            className="
              text-white 
              text-base sm:text-lg md:text-2xl 
              max-w-md sm:max-w-xl md:max-w-2xl 
              opacity-100
            "
          >
            {slides[current].subtitle}
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-5 pointer-events-auto">

            {/* EXPLORE PRODUCTS */}
            <button
              onClick={() => navigate("/products")}
              className="
                px-4 py-1.5 
                text-xs 
                sm:px-8 sm:py-3 sm:text-lg 
                font-semibold 
                bg-[#0470aa] text-white 
                rounded-full shadow-lg 
                hover:bg-[#036099] transition
              "
            >
              Explore Products
            </button>

            {/* CONTACT US */}
            <button
              onClick={() => navigate("/contact")}
              className="
                px-4 py-1.5 
                text-xs 
                sm:px-8 sm:py-3 sm:text-lg 
                font-semibold 
                border border-white text-white 
                rounded-full 
                hover:bg-[#0470aa] hover:text-[#0470aa] 
                transition
              "
            >
              Contact Us
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
