import React from "react";
import { 
  FaHeartbeat, 
  FaMicroscope, 
  FaEgg, 
  FaShieldAlt
} from "react-icons/fa";

import { GiChicken } from "react-icons/gi";


export default function ImpactSection() {
  const stats = [
    {
      id: 1,
      value: "1,00,000+",
      label: "Birds Treated",
      sub: "Through our veterinary health solutions",
      icon: <FaHeartbeat size={32} />,
    },
    {
      id: 2,
      value: "40+",
      label: "Scientific Formulations",
      sub: "Chick boosters, immunity enhancers & gut tonics",
      icon: <FaMicroscope size={32} />,
    },
    {
      id: 3,
      value: "85%",
      label: "Improved Egg Quality",
      sub: "Strength, shell integrity & nutrient absorption",
      icon: <FaEgg size={32} />,
    },
    {
      id: 4,
      value: "98%",
      label: "Disease Prevention Success",
      sub: "Stronger immunity in desi hens & broilers",
      icon: <FaShieldAlt size={32} />,
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #0470aa 0%, #2d6715 100%)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-14">

          {/* Main title */}
          <span className="text-sm font-bold tracking-widest text-white uppercase bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Our Impact
          </span>
          

          {/* Subtitle row with CHICK icon */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className="
                p-2 rounded-full 
                bg-gradient-to-r from-white to-gray-200 
                text-[#0470aa] shadow-lg
                transform hover:scale-110 transition
              "
            >
              <GiChicken size={22} /> {/* 🐥 Chick Icon */}
            </span>

            <p
              className="
                text-xl md:text-2xl font-bold 
                bg-gradient-to-r from-white to-gray-200 
                bg-clip-text text-transparent
              "
            >
              Transforming Poultry Health Through Veterinary Science
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
            At Aviquest Healthcare, we support poultry farmers with advanced,
            research-backed veterinary formulations that strengthen immunity,
            enhance growth, improve gut health, and boost egg productivity.
            Our solutions are crafted specifically for
            <em> desi hens, broilers, layers, and chicks </em>, ensuring healthier
            flocks and improved farm performance.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item) => (
            <div
              key={item.id}
              className="
                group relative bg-white p-8 rounded-2xl border border-gray-100 
                shadow-lg text-center transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:border-[#0470aa]/40
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  transition-all duration-500 blur-2xl
                  bg-gradient-to-br from-[#0470aa] to-[#2d6715]
                "
              ></div>

              {/* Card Content */}
              <div className="relative z-20">

                {/* Icon */}
                <div
                  className="
                    flex justify-center mb-4 text-[#0470aa]
                    group-hover:scale-125 transition-all duration-500
                    group-hover:rotate-6
                  "
                >
                  {item.icon}
                </div>

                {/* Value */}
                <h3
                  className="
                    text-4xl font-extrabold text-gray-800 
                    transition-all duration-500 group-hover:scale-110
                  "
                >
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-lg font-semibold text-[#2d6715] mt-2">
                  {item.label}
                </p>

                {/* Divider */}
                <div
                  className="
                    mx-auto mt-3 mb-3 h-1 w-10 bg-gradient-to-r 
                    from-[#0470aa] to-[#2d6715] rounded-full
                    transition-all duration-500 group-hover:w-20
                  "
                ></div>

                {/* Subtext */}
                <p className="text-gray-600 text-sm mt-2">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
