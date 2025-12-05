import React from "react";
import banner1 from "../assets/images/aboutbanner aviquest.png"

export default function AboutHero() {
  return (
    <section
      className="w-full h-[78vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center">

        {/* MAIN HEADING */}
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          About <span className="text-white-500">AviQuest</span>
        </h1>
        
        {/* TAGLINE */}
        <p className="text-white/100 text-lg md:text-xl tracking-wide mb-4">
          Premium Poultry Nutrition & Veterinary Solutions
        </p>

        

      </div>

    </section>
  );
}
