import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/aviquest discover1.png";  
import Img2 from "../assets/images/aviquest discover1.png";  

export default function WelcomeSection() {
  const images = [Img1, Img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swap every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">

      {/* MOBILE + TABLET = 1 COLUMN  
          DESKTOP = 2 COLUMNS 
          (ONLY change made: md:grid-cols-1)
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight text-center md:text-center lg:text-left">
            Welcome to{" "}
            <span className="text-[#0470aa]">Aviquest Healthcare</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-6 text-justify">
            At Aviquest Healthcare, we are redefining excellence in poultry health and nutrition. 
            As a leading healthcare company specializing in the development and marketing of premium 
            poultry feed supplements, our journey is fueled by a commitment to innovation, 
            sustainability, and the welfare of poultry and farmers alike.
            Founded with the vision to transform the poultry industry, Aviquest Healthcare stands at 
            the forefront of research-driven solutions. We harness advanced scientific knowledge and 
            cutting-edge technology to formulate products that enhance poultry health, optimize performance, 
            and support sustainable farming practices. Our unwavering dedication to quality ensures that 
            every product we deliver meets the highest standards, earning the trust of farmers and 
            stakeholders across the globe.
          </p>

          <div className="flex justify-center md:justify-center lg:justify-start">
            <Link
              to="/about"
              className="mt-8 inline-block px-10 py-3 bg-[#0470aa] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#036099] transition !no-underline"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — AUTO SWAPPING IMAGE */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[currentIndex]}
              alt="Aviquest"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
