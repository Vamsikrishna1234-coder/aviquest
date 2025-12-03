import React, { useEffect, useState } from "react";
import img2 from "../assets/images/aviquest discover1.png";

export default function AboutCircleSection() {
  const images = [img2];
  const [current, setCurrent] = useState(0);

  // Auto-change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      {/* IMPORTANT CHANGE → lg:grid-cols-2 (tablet stays 1 column) */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - ROTATING TEXT + IMAGE */}
        <div className="relative flex items-center justify-center">

          {/* Rotating Circular Text */}
          <div
            className="
              absolute
              w-[320px] h-[320px]         /* Mobile */
              md:w-[350px] md:h-[350px]   /* Tablet (same style as mobile) */
              lg:w-[620px] lg:h-[660px]   /* Desktop */
              animate-spin-slow
            "
          >
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 150,150
                    m -122,0
                    a 122,122 0 1,1 244,0
                    a 122,122 0 1,1 -244,0
                  "
                />

                {/* Gradient Text */}
                <linearGradient id="textGradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#2d6715" />
                  <stop offset="100%" stopColor="#0470aa" />
                </linearGradient>
              </defs>

              <text fill="url(#textGradient)" fontSize="15" fontWeight="500">
                <textPath href="#circlePath" startOffset="0%">
                  AviQuest • Poultry Nutrition • Veterinary Care • Immunity Boosters • Growth Enhancers • Healthy Flocks • AviQuest
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Image */}
          <div
            className="
              w-[240px] h-[240px]         /* Mobile */
              md:w-[270px] md:h-[280px]   /* Tablet (same style as mobile) */
              lg:w-[450px] lg:h-[470px]   /* Desktop */
              rounded-full overflow-hidden
              shadow-lg relative z-10
              border-[5px] border-[#0470aa]/20
            "
          >
            <img
              src={images[current]}
              className="w-full h-full object-cover"
              alt="AviQuest Poultry"
            />
          </div>
        </div>

        {/* RIGHT TEXT SIDE */}
        <div className="mt-10 lg:mt-0">
          <h2
            className="
              text-4xl md:text-5xl font-extrabold leading-tight
              bg-gradient-to-r from-[#0470aa] to-[#2d6715]
              bg-clip-text !text-transparent
            "
          >
            Pioneering Tomorrow’s Poultry
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-1 text-justify">
            At AviQuest Healthcare, we are redefining excellence in poultry health and
            nutrition. As a leading healthcare company specializing in the development
            and marketing of premium poultry feed supplements, our journey is fueled by
            a commitment to innovation, sustainability, and the welfare of poultry and
            farmers alike.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-1 text-justify">
            Founded with the vision to transform the poultry industry, AviQuest Healthcare
            stands at the forefront of research-driven solutions. We harness advanced
            scientific knowledge and cutting-edge technology to formulate products that
            enhance poultry health, optimize performance, and support sustainable farming
            practices.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-1 text-justify">
            Our portfolio of feed supplements addresses a wide range of nutritional and
            health challenges faced by poultry farmers. By focusing on solutions that
            improve growth, boost immunity, and enhance overall productivity, we empower
            farmers to achieve their goals while contributing to a healthier and more
            sustainable poultry industry. At AviQuest Healthcare, we believe that the
            success of farmers and the health of poultry go hand in hand.
          </p>
        </div>
      </div>

      {/* Rotation Animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 25s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}
