"use client";

import { motion } from "framer-motion";

export default function BlogCard({
  image,
  title,
  description,
  showActions = true,
  link,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex flex-col items-center p-5 pt-24 bg-[#EAE4DD] border-t-4 border-r-4 border-b-4 border-l-0 border-black rounded-xl shadow-xl w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] mb-12 hover:shadow-2xl overflow-visible"
    >
      {/* Left accent borders */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-500 rounded-tl-xl rounded-bl-xl"></div>
      <div className="absolute top-1 left-2 bottom-1 w-1 bg-red-300"></div>

      {/* Image: one third width, overflow above */}
      <img
        alt={title}
        src={image}
        className="absolute -top-12 w-5/6 object-cover border-4 p-1 bg-white border-[#27405E] rounded-lg shadow-md"
      />

      {/* Text & Actions: two thirds width */}
      <div className="mt-16 flex flex-col items-center justify-end text-center w-full">
        <h1 className="text-xl font-bold line-clamp-2 w-full">
          {title}
        </h1>
        <p className="mt-2 text-sm line-clamp-4 w-full">
          {description}
        </p>

        {showActions && (
          <div className="flex flex-row justify-center gap-4 mt-4 w-full">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2"
            >
              <button className="w-full h-10 text-md rounded-full overflow-hidden bg-white text-black tracking-wide group transition-colors duration-500 border border-black group-hover:border-white relative">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative group-hover:text-white font-bold transition-colors duration-500">
                  PREVIEW
                </span>
              </button>
            </a>

            <a
              href="https://portfolio-query.vercel.app/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2"
            >
              <button className="w-full h-10 text-md rounded-full overflow-hidden bg-red-500 text-white tracking-wide group transition-all duration-500 relative">
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative group-hover:text-red-500 font-bold transition-colors duration-500">
                  SELECT
                </span>
              </button>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}