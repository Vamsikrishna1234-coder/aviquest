import React from "react";
import banner1 from "../assets/images/aboutbanner aviquest.png";

export default function AboutHero() {
  return (
    <section
      className="
        w-full 
        h-[70vh]        /* small mobile */
        sm:h-[55vh]     /* large mobile */
        md:h-[75vh]     /* tablets */
        lg:h-[79vh]     /* desktop (original) */
        bg-no-repeat bg-cover 
        bg-center md:bg-[center_top] 
        relative flex items-center justify-center px-6
      "
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT (UNCHANGED) */}
      <div className="relative max-w-5xl mx-auto text-center">

        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          About <span className="text-white">AviQuest</span>
        </h1>

        <p className="text-white/100 text-lg md:text-xl tracking-wide mb-4">
          Premium Poultry Nutrition & Veterinary Solutions
        </p>

      </div>

    </section>
  );
}
