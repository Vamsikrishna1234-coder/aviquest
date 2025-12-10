import { useParams } from "react-router-dom";
import { blogData } from "../data/BlogData";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="text-center py-24 text-2xl font-semibold">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 ">

      {/* 🔥 HERO BANNER (70vh) */}
      <div
        className="w-full h-[75vh] bg-cover bg-center mt-20 relative "
        style={{
          backgroundImage: `url(${blog.img})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-12 lg:px-24 py-16">
        
        {/* Full blog content */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border">
          <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
}
