import Image from "next/image";
import { redirect } from "next/navigation";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
       {/* Navbar */}
       <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-600">Portfolio Generator</h1>
        
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <a href="/profile">Sign Up</a>
        </button>
      </nav>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold">Create Your Perfect Portfolio</h1>
        <p className="mt-4 text-lg">Build, customize, and publish your portfolio in minutes.</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Why Use Our Portfolio Generator?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <FeatureCard title="Easy Customization" desc="Edit text, images, and styles with a simple interface." />
          <FeatureCard title="Multiple Templates" desc="Choose from a variety of modern portfolio designs." />
          <FeatureCard title="Instant Publishing" desc="Deploy your portfolio instantly with a single click." />
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold">Choose Your Template</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <TemplateCard image="template1.png" title="Modern" link = 'https://soumyajit.vercel.app/' />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p>&copy; 2025 Portfolio Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="max-w-xs p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}
 function TemplateCard({ image, title,link }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg mb-2 font-semibold">{title}</h3>
        <a target="_blank" href={link} className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Preview
        </a><br></br>
        <div  className="mt-3 px-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <a target="_blank" className="px-3" href="https://portfolio-query.vercel.app/portfolio">Select Template</a>
        </div>
      </div>
    </div>
  );
}

