import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Herobanner1 from "../assets/images/aviquest hero2.png";
import Herobanner2 from "../assets/images/aviquest hero1.jpg";
import Herobanner3 from "../assets/images/aviquest hero3.png";

export default function HeroSection() {
  
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
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-[100vh] relative overflow-hidden bg-black">

      {/* SLIDES (Smooth Fade + Slight Slide) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-[900ms]
            ${index === current 
              ? "opacity-110 translate-x-0" 
              : "opacity-0 translate-x-5"}`
          }
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt="slide"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
      ))}

      {/* PREV BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 
        text-[#0470aa] p-2 rounded-full shadow-md transition z-20"
      >
        <FaChevronLeft size={22} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 
        text-[#0470aa] p-2 rounded-full shadow-md transition z-20"
      >
        <FaChevronRight size={22} />
      </button>

      {/* TEXT CONTENT (Lowered) */}
      <div className="absolute inset-0 flex items-end pb-32 z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-3xl mb-4">
            {slides[current].title}
          </h1>

          <p className="text-white text-xl md:text-2xl max-w-2xl opacity-100">
            {slides[current].subtitle}
        </p>


          <div className="mt-8 flex gap-5">
            <button className="px-8 py-3 text-lg font-semibold bg-[#0470aa] text-white rounded-full shadow-lg hover:bg-[#036099] transition">
              Explore Products
            </button>

            <button className="px-8 py-3 text-lg font-semibold border border-white text-white rounded-full hover:bg-[#0470aa] hover:text-[#0470aa] transition">
              Contact Us
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
