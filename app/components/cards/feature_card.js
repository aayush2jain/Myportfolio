import React from 'react';

export default function FeatureCard({ title, desc }) {
  return (
    <div className="relative max-w-xs p-6 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Inner decorative border */}
      <div className="absolute inset-0 m-2 rounded-xl border-4 border-black pointer-events-none"></div>

      <h3 className="relative text-xl font-semibold">
        {title}
      </h3>
      <p className="relative mt-2 text-gray-700 text-md">
        {desc}
      </p>
    </div>
  );
}
