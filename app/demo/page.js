"use client"
import React, { useState } from 'react';
// import './App.css'; // Assuming Tailwind CSS is imported in a separate CSS file

export default function demo() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">PORTIGO</h1>
          <nav className="space-x-4">
            <a href="#templates" className="text-gray-600 hover:text-blue-600">Templates</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#login" className="text-gray-600 hover:text-blue-600">Login/Sign up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bring your portfolio live</h2>
          <p className="text-lg mb-6">Portigo lets you create a professional personal website with zero hassle.</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100">
            Get Started
          </button>
          <a href="#templates" className="block mt-4 text-white underline">start exploring free templates</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Select a template</h3>
              <p className="text-gray-600">
                We offer an extensive selection of templates for portfolios, each specifically designed to suit a wide variety of professions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Edit and Publish</h3>
              <p className="text-gray-600">
                Our platform offers a quick and easy way to edit templates. With a few clicks, you can customize templates for various professions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Share and connect</h3>
              <p className="text-gray-600">
                After publishing your portfolio, share it widely with personalized links. Track daily views with our views tracker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Portigo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Portigo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">No Code</h3>
              <p className="text-gray-600">You won't need any coding or web development experience to create your portfolio.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Pro-Templates</h3>
              <p className="text-gray-600">Our premium-grade templates come equipped with dynamic animations and smooth transitions.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Easy Analytics</h3>
              <p className="text-gray-600">We provide tools like built-in views and a tracker to help you analyze portfolio engagement.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Instant Hosting</h3>
              <p className="text-gray-600">Host your portfolio online for free to create a personalized webpage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Elegant, Responsive, and Built to Impress</h2>
          <p className="text-gray-600 mb-6">
            Our templates aren’t just pretty—they’re optimized for clarity, engagement, and adaptability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-gray-300 h-48 mb-4"></div> {/* Placeholder for template preview */}
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Preview</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2 hover:bg-gray-300">Use Template</button>
            </div>
            {/* Repeat for more template previews */}
          </div>
          <a href="#more" className="block mt-8 text-blue-600 underline">Show more templates →</a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Your Portfolio. Live in Minutes. Beautiful for Years.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Templates</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Portfolios created</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">5-star testimonials</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Showcased projects and experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Let’s Talk. We’d Love to Hear from You.</h2>
          <div className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
            ></textarea>
            <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Submit</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Do I need coding experience to use Portigo?</h3>
              <p className="text-gray-600">Not at all! Portigo is completely no-code.</p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PORTIGO</h3>
              <p className="text-gray-400">
                Portigo helps you build and launch your personal portfolio in minutes—no code needed.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#templates" className="text-gray-400 hover:text-white">Templates</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#login" className="text-gray-400 hover:text-white">Login/Sign up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#help" className="text-gray-400 hover:text-white">Help Center / FAQ</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">Designed with ❤</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
