import React from "react";
import p1 from "../assets/images/alpha facts.png";
import p2 from "../assets/images/amino.png";
import p3 from "../assets/images/fido IR.png";
import p4 from "../assets/images/cognate IR.png";

export default function AssociatesSection() {
  const logos = [p1, p2, p3, p4];

  // Duplicate logos so that animation runs continuously
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#0470aa]">
          Industry Recognition
        </h2>

        {/* BADGE */}
        <div className="inline-block mb-10 px-3 py-1 bg-gradient-to-r from-[#0470aa] to-[#2d6715] rounded-full shadow-lg">
          <h3 className="text-white text-lg md:text-xl font-bold tracking-wide">
            ASSOCIATES
          </h3>
        </div>

        {/* TOP SCROLLING ROW (LEFT → RIGHT) */}
        <div className="overflow-hidden whitespace-nowrap mb-10">
          <div className="animate-scroll-left inline-flex gap-16 items-center">
            {loopLogos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="w-40 h-48 md:w-44 md:h-44 object-contain"
                alt="partner"
              />
            ))}
          </div>
        </div>

        {/* BOTTOM SCROLLING ROW (RIGHT → LEFT) */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-scroll-right inline-flex gap-16 items-center">
            {loopLogos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="w-40 h-48 md:w-44 md:h-44 object-contain"
                alt="partner"
              />
            ))}
          </div>
        </div>

      </div>

      {/* SCROLL ANIMATIONS */}
      <style>
        {`
          /* Left to right */
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Right to left */
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-scroll-left {
            animation: scrollLeft 20s linear infinite;
          }

          .animate-scroll-right {
            animation: scrollRight 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
