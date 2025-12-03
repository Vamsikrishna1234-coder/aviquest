import React, { useState, useEffect } from "react";


import Before1 from "../assets/images/ind chickb.jpg"; 
import After1 from "../assets/images/ind chicka.png";

import Before2 from "../assets/images/small chickb.jpg";
import After2 from "../assets/images/small chicka.png";

import Before3 from "../assets/images/white chickb.png";
import After3 from "../assets/images/white chicka.png";

const ImageCompare = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const [smoothPos, setSmoothPos] = useState(50);

  // SMOOTH ANIMATION using requestAnimationFrame
  useEffect(() => {
    let animFrame;
    const smooth = () => {
      setSmoothPos((prev) => prev + (position - prev) * 0.15); // smoothing factor
      animFrame = requestAnimationFrame(smooth);
    };
    animFrame = requestAnimationFrame(smooth);

    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;

    if (x < 0) x = 0;
    if (x > 100) x = 100;

    setPosition(x);
  };

  return (
    <div
  className="relative w-full h-90 md:h-[450px] overflow-hidden select-none"
  onMouseMove={handleMove}
  onTouchMove={(e) =>
    handleMove({
      clientX: e.touches[0].clientX,
      currentTarget: e.currentTarget,
    })
  }
>
  {/* AFTER Image */}
  <img
    src={after}
    className="absolute top-0 left-0 w-full h-full object-cover"
    alt="after"
  />

  {/* BEFORE Image */}
  <div
    className="absolute top-0 left-0 h-full overflow-hidden"
    style={{
      width: `${smoothPos}%`,
      transition: "none",
    }}
  >
    <img
      src={before}
      className="w-full h-full object-cover"
      alt="before"
    />
  </div>
      {/* SLIDER LINE */}
      <div
        className="absolute top-0 h-full bg-white"
        style={{ left: `${smoothPos}%`, width: "3px" }}
      ></div>

      {/* SLIDER KNOB */}
      <div
        className="absolute top-1/2 -translate-y-1/2 bg-white text-[#0470aa] border border-gray-300 shadow-xl rounded-full p-2 cursor-pointer"
        style={{
          left: `${smoothPos}%`,
          transform: "translate(-50%, -50%)",
          transition: "box-shadow 0.2s",
        }}
      >
        ⟷
      </div>

      {/* BEFORE LABEL */}
      <div
        className="absolute top-5 left-5 bg-black/70 text-white px-4 py-1 rounded-full text-sm"
        style={{ opacity: smoothPos > 12 ? 1 : 0 }}
      >
        BEFORE
      </div>

      {/* AFTER LABEL */}
      <div
        className="absolute top-5 right-5 bg-black/70 text-white px-4 py-1 rounded-full text-sm"
        style={{ opacity: smoothPos < 88 ? 1 : 0 }}
      >
        AFTER
      </div>
    </div>
  );
};


export default function GrowthSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#0470aa]">
            Growth
          </h2>

          <p className="text-[#0470aa] text-xl mt-3 font-semibold">
            🐥 Veterinary-Guided Growth Enhancement for Desi Chicks
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            Experience the visible difference—watch how desi chicks transform 
            from weak to strong with our nutrition and healthcare solutions.
          </p>
        </div>

        {/* 3 Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImageCompare before={Before1} after={After1} />
          <ImageCompare before={Before2} after={After2} />
          <ImageCompare before={Before3} after={After3} />
        </div>

      </div>
    </section>
  );
}
