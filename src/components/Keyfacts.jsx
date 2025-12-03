import React, { useEffect, useState } from "react";
import { FaLeaf, FaUsers, FaBox, FaEgg, FaFlask, FaHandshake } from "react-icons/fa";

export default function KeyFactsCountUp() {
  const stats = [
    { label: "Growth Tons of Harvest", value: 250, suffix: "M", icon: <FaLeaf size={40} /> },
    { label: "Happy Clients", value: 98, suffix: "%", icon: <FaUsers size={40} /> },
    { label: "Sales of our Products", value: 688, suffix: "K", icon: <FaBox size={40} /> },
    { label: "Premium Formulations", value: 120, suffix: "+", icon: <FaFlask size={40} /> },
    { label: "Years of Expertise", value: 10, suffix: "+", icon: <FaHandshake size={40} /> },
    { label: "Healthy Chicks Supported", value: 50, suffix: "M", icon: <FaEgg size={40} /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // COUNT-UP ANIMATION
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = stats[i].value;
          const step = Math.ceil(target / 40);
          return count < target ? count + step : target;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#0470aa] to-[#2d6715]">
      <div className="max-w-7xl mx-auto text-center">

        {/* BADGE HEADING */}
        <div className="inline-block mb-6 px-5 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full shadow-lg">
          <h2 className="text-md md:text-xl font-bold text-white tracking-wide">
            KEY FACTS
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed mb-10 px-4">
          At AviQuest Healthcare, we focus on transforming poultry health and productivity.
          Our commitment to quality, innovation, and farmer success has helped us build
          a trusted presence across the poultry industry.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                group p-8 rounded-2xl 
                bg-white shadow-xl 
                border border-transparent
                hover:shadow-2xl hover:scale-[1.05]
                hover:-translate-y-2 hover:rotate-1
                transition-all duration-300
                relative
                card-inset
              "
            >
              {/* ICON */}
              <div className="flex justify-center mb-4 text-[#0470aa] group-hover:text-[#2d6715] transition">
                {stat.icon}
              </div>

              {/* COUNT-UP NUMBER */}
              <h3 className="
                text-5xl md:text-6xl font-extrabold
                bg-gradient-to-r from-[#0470aa] to-[#2d6715]
                text-transparent bg-clip-text drop-shadow-sm
              ">
                {counts[i]}
                {stat.suffix}
              </h3>

              {/* LABEL */}
              <p className="text-gray-700 text-lg mt-3 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM CSS FOR INSET GRADIENT SHADOW */}
      <style>
        {`
          .card-inset {
            box-shadow:
              inset 0 0 8px rgba(4, 112, 170, 0.66),
              inset 0 0 12px rgba(46, 103, 21, 0.62);
          }

          .card-inset:hover {
            box-shadow:
              inset 0 0 12px rgba(4,112,170,0.6),
              inset 0 0 20px rgba(45,103,21,0.5),
              0 8px 20px rgba(0,0,0,0.25);
          }
        `}
      </style>
    </section>
  );
}
