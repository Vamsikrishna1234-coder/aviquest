import { useParams } from "react-router-dom";
import { useState } from "react";
import { productData } from "../data/productData";
import Productsbanner from "../assets/images/aviquest hero1.jpg";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData[id.toLowerCase()];

  const [activeTab, setActiveTab] = useState("benefits");

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-16">            {/* 🔥 FIX: padding-top instead of margin */}

      {/* 🔥 FULL-WIDTH 70vh BANNER */}
      <div
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: `url(${Productsbanner})`,
        }}
      >
        <div className="bg-black/25 w-full h-full flex items-center justify-center">

          {/* 🔥 Product name in green color #2d6715 */}
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            {product.name}
          </h1>

        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-12 lg:px-24 py-16">

        {/* IMAGE LEFT + DESCRIPTION RIGHT */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-[350px] md:w-[420px] object-contain drop-shadow-xl"
            />
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-5xl font-bold !text-[#0470aa] text-poppins">
              {product.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

        </div>

        {/* ------------------ TABS --------------------- */}
        <div>
          <div className="flex flex-wrap gap-4 border-b pb-4">

            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-4 py-2 rounded-full font-medium transition 
              ${activeTab === "benefits"
                ? "bg-[#0470aa] text-white shadow"
                : "bg-white text-gray-700 border"
              }`}
            >
              Benefits
            </button>

            {product.modeOfAction && (
              <button
                onClick={() => setActiveTab("modeOfAction")}
                className={`px-4 py-2 rounded-full font-medium transition 
                ${activeTab === "modeOfAction"
                  ? "bg-[#0470aa] text-white shadow"
                  : "bg-white text-gray-700 border"
                }`}
              >
                Mode of Action
              </button>
            )}

            <button
              onClick={() => setActiveTab("administration")}
              className={`px-4 py-2 rounded-full font-medium transition 
              ${activeTab === "administration"
                ? "bg-[#0470aa] text-white shadow"
                : "bg-white text-gray-700 border"
              }`}
            >
              Administration
            </button>

            <button
              onClick={() => setActiveTab("presentation")}
              className={`px-4 py-2 rounded-full font-medium transition 
              ${activeTab === "presentation"
                ? "bg-[#0470aa] text-white shadow"
                : "bg-white text-gray-700 border"
              }`}
            >
              Presentation
            </button>

            <button
              onClick={() => setActiveTab("instructions")}
              className={`px-4 py-2 rounded-full font-medium transition 
              ${activeTab === "instructions"
                ? "bg-[#0470aa] text-white shadow"
                : "bg-white text-gray-700 border"
              }`}
            >
              Instructions
            </button>
          </div>

          {/* TAB CONTENT */}
          <div
            className="mt-8 p-6 rounded-xl shadow-md 
            bg-gradient-to-br from-[#2d6715]/30 to-[#0470aa]/30 border-l-4 border-[#0470aa]"
          >

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0470aa]">
                  Benefits
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "modeOfAction" && product.modeOfAction && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0470aa]">
                  Mode of Action
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.modeOfAction}
                </p>
              </div>
            )}

            {activeTab === "administration" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0470aa]">
                  Administration
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.administration}
                </p>
              </div>
            )}

            {activeTab === "presentation" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0470aa]">
                  Presentation
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.presentation}
                </p>
              </div>
            )}

            {activeTab === "instructions" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0470aa]">
                  Instructions
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.instructions}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
