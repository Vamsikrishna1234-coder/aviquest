import React from "react";
import Blog1 from "../assets/images/blog1 aviquest.png"
import Blog2 from "../assets/images/blog2 aviquest.png"
import Blog3 from "../assets/images/blog3 aviquest.png"

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "The Role of Nutrition in Poultry Health: Key Insights",
      img: Blog1,
    },
    {
      id: 2,
      title: "Latest Advances in Poultry Vaccines and Immunization",
      img: Blog2,
    },
    {
      id: 3,
      title: "Sustainable Practices in Modern Poultry Farming",
      img: Blog3,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-[#0470aa] uppercase bg-blue-100 px-4 py-2 rounded-full">
            Latest Updates
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900">
            Our <span className="bg-gradient-to-r from-[#0470aa] to-[#2d6715] bg-clip-text text-transparent">Blogs</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with expert insights on poultry nutrition, veterinary care, and sustainable poultry healthcare practices.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Blog Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#0470aa] transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-500 mt-3 text-sm">
                  Learn more about the latest developments and essential insights in poultry health management...
                </p>

                {/* Read More */}
                <button className="mt-5 inline-flex items-center gap-2 text-[#0470aa] font-semibold group/btn">
                  <span className="group-hover/btn:underline">Read More</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
