import React from "react";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer
      className="text-white pt-16 pb-8 border-t border-white/20"
      style={{
        background: "linear-gradient(135deg, #0470aa 0%, #2d6715 100%)",
      }}
    >
      {/* FIXED GRID BREAKPOINTS 
          sm: 1 column
          md: 2 columns
          lg: 4 columns
      */}
      <div className="
        container mx-auto px-6 md:px-12 lg:px-20
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        gap-14
      ">

        {/* ---------- LOGO & DESCRIPTION ---------- */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            AviQuest
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            Leading the future of poultry healthcare with innovation,
            science-driven solutions, and commitment to farmer success.
            Empowering farms with reliable nutrition and advanced veterinary care.
            Building healthier flocks for a stronger, more sustainable poultry industry.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white/40 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white/40 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white/40 transition">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white/40 transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* ---------- EXPLORE LINKS ---------- */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Explore</h3>

          <ul className="space-y-3 text-white/80 leading-relaxed pl-0 list-none">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* ---------- OUR SERVICES ---------- */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>

          <ul className="space-y-3 text-white/80 leading-relaxed pl-0 list-none">
            <li className="hover:text-white cursor-pointer">Veterinary Support</li>
            <li className="hover:text-white cursor-pointer">Chick Health Programs</li>
            <li className="hover:text-white cursor-pointer">Farm Management Guidance</li>
            <li className="hover:text-white cursor-pointer">Poultry Nutrition Solutions</li>
            <li className="hover:text-white cursor-pointer">Custom Formulations</li>
          </ul>
        </div>

        {/* ---------- CONTACT INFO ---------- */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>

          <ul className="space-y-4 text-white/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1" />
              <span>5919 Trussville Crossings Pkwy, Birmingham</span>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="text-white mt-1" />
              <span>info@validtheme.com</span>
            </li>

            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-white mt-1" />
              <span>+91 0000000000</span>
            </li>
          </ul>
        </div>

      </div>

      {/* -------- BOTTOM COPYRIGHT BAR -------- */}
      <div className="
        mt-16 pt-6 border-t border-white/30 
        text-center text-white/80 text-sm 
        flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6
      ">
        <span>© 2025. All Rights Reserved by 
          <span className="font-semibold text-white"> AviQuest Healthcare</span>
        </span>

        {/* FORCE THIS LINE TO ALWAYS BE SINGLE LINE */}
        <span className="whitespace-nowrap">
          Designed by 
          <a 
            href="https://brick2tech.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-yellow-300 hover:text-white transition !no-underline"
          >
            {" "}Brick2Tech
          </a>
        </span>
      </div>

    </footer>
  );
}
