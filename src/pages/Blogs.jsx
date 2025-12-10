import React from "react";
import BlogsSection from "../components/BlogsSection";
import BlogsBanner from "../assets/images/blogs banner1.png"; 

function Blogs() {
  return (
    <>
      {/* 🔥 BLOGS HERO BANNER */}
      <div
        className="w-full h-[80vh] bg-cover bg-center relative pt-[90px]"
        style={{
          backgroundImage: `url(${BlogsBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-6xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Our Blogs
          </h1>
        </div>
      </div>


      {/* BLOG SECTION */}
      <BlogsSection />
    </>
  );
}

export default Blogs;
