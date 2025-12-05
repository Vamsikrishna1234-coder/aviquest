import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      {/* NAVBAR */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6">

          {/* LOGO WITH GRADIENT */}
          <Link
            to="/"
            className="
              inline-block
              text-4xl font-extrabold
              bg-gradient-to-r from-[#0470aa] to-[#2d6715]
              bg-clip-text !text-transparent
              tracking-wider !no-underline
            "
          >
            AVIQUEST
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-12 text-[18px] font-medium items-center whitespace-nowrap">
            {menuItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`
                    inline-block
                    bg-gradient-to-r from-[#0470aa] to-[#2d6715]
                    bg-clip-text !text-transparent
                    transition-all !no-underline
                    ${isActive(item.path) ? "font-bold" : ""}
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[3px] bg-[#0470aa] transition-all duration-300
                      ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              </li>
            ))}

            {/* WhatsApp */}
            <li className="flex items-center gap-2 text-[#2d6715] font-bold text-lg">
              <FaWhatsapp size={22} />
              +91 9876543210
            </li>
          </ul>

          {/* TOGGLE BUTTON */}
          <button
            className="lg:hidden text-3xl text-[#0470aa]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE & TABLET DROPDOWN WITH GRADIENT BACKGROUND */}
      {isOpen && (
        <div
          className="
            lg:hidden 
            w-full px-9 py-6 animate-dropdown
            bg-gradient-to-r from-[#0470aa] to-[#2d6715]
            text-white shadow-xl
          "
        >
          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-6 text-[20px] font-medium text-white">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`!no-underline ${
                    isActive(item.path) ? "font-bold text-white" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp */}
          <div className="mt-6 flex items-center gap-3 text-white text-xl font-bold">
            <FaWhatsapp size={26} />
            +91 9876543210
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes dropdownAnim {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-dropdown {
          animation: dropdownAnim 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
