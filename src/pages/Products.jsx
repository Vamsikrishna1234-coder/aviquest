import React from "react";
import ProductsSection from "../components/ProductsSection";
import bannerImage from "../assets/images/aviquest hero3.png";

export default function ProductsPage() {
  return (
    <div className="pt-20">

      {/* IMAGE BANNER */}
      <section
        className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-xl">
            Our Products
          </h1>

          <p className="mt-3 text-white/100 text-lg md:text-xl max-w-2xl drop-shadow">
            Premium poultry nutrition, supplements & health solutions for modern poultry farming.
          </p>
        </div>
      </section>

      {/* INFO SECTION BELOW BANNER */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0470aa]">
            Trusted Nutrition for Every Stage of Poultry Growth
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            AviQuest Healthcare delivers a scientifically formulated range of poultry feed supplements 
            designed to boost immunity, enhance growth, improve gut health, and maximize farm productivity.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Our products are crafted with precision, ensuring the highest quality standards to support 
            sustainable and healthy poultry development.
          </p>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <ProductsSection showButton={false} />

    </div>
  );
}
