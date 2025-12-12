import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactbanner from "../assets/images/aboutbanner aviquest.png"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {

  // AOS initialization inside component (VALID)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[80vh] w-full overflow-hidden">
        <img
          src={Contactbanner}
          alt="Contact Us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Have Questions?
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 font-medium max-w-3xl">
            Send us a Message
             • Get in Touch
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Form */}
          <div
            className="relative order-1 md:order-none h-full"
            data-aos="fade-right"
          >
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-green-300/20 to-emerald-500/20 blur-2xl rounded-3xl"></div>

            {/* Glass Form */}
            <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl rounded-[28px] p-8 md:p-10 h-full flex flex-col justify-between">

              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-600 to-emerald-700 rounded-full"></div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="text-gray-700 font-semibold text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-white/40 border border-gray-300/40 
                      focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gray-700 font-semibold text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-white/40 border border-gray-300/40 
                      focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-gray-700 font-semibold text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-white/40 border border-gray-300/40 
                      focus:border-green-600 focus:ring-2 focus:ring-green-200 text-sm outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-700 font-semibold text-sm">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-white/40 border border-gray-300/40 
                      focus:border-green-600 focus:ring-2 focus:ring-green-200 resize-none text-sm outline-none"
                    ></textarea>
                  </div>
                </form>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white 
                font-semibold text-base rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </div>
          </div>

          {/* RIGHT: Info Boxes */}
          <div className="space-y-6">

            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We’re here to support your growth. Reach out anytime.
              </p>
            </div>

            {/* Box 1 */}
            <div
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-5"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="p-4 bg-green-100 rounded-xl text-green-700">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-700 mt-1">+91 0000000000</p>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-5"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="p-4 bg-blue-100 rounded-xl text-blue-700">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                <p className="text-gray-700 mt-1">
                  55 Main Street, The Grand Avenue <br />
                  2nd Block, NYC
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-5"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="p-4 bg-purple-100 rounded-xl text-purple-700">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-700 mt-1">info@agrul.com</p>
              </div>
            </div>

            {/* Box 4 */}
            <div
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex items-start gap-5"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="p-4 bg-orange-100 rounded-xl text-orange-700">
                <FaClock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-700 mt-1">
                  Mon–Sat: 9:00 AM – 6:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
