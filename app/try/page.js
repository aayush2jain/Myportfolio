"use client"
import Image from "next/image"
import React from "react"
import { useState ,useRef,useEffect} from "react";
import { Code, Sparkles, LineChart, Monitor } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import Stats from "../components/stats";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const heroImage = "/hero.png";
  const templateImage = "/template1.png";
  const faqs = [
  {
    question: "Do I need coding experience to use Portigo?",
    answer: "Not at all! Portigo is completely no-code.",
  },
  {
    question: "Can I change templates after publishing my site?",
    answer: "Yes, you can easily switch templates anytime without losing content.",
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes, Portigo offers a free plan to help you get started.",
  },
  {
    question: "How do I track who visits my portfolio?",
    answer:
      "Portigo includes built-in analytics so you can see visitor stats and engagement.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard security and encryption practices.",
  },
  {
    question: "Can I connect a custom domain?",
    answer: "Yes, you can easily connect your own domain with Portigo.",
  },
];

  const features = [
    {
      id: 1,
      title: "No Code",
      description:
        "You won't need any coding or web development experience to create your portfolio.",
      icon: <Code className="w-8 h-8 " />,
    },
    {
      id: 2,
      title: "Pro-Templates",
      description:
        "Our premium-grade templates come equipped with dynamic animations and smooth transitions, providing a seamless and engaging user experience.",
      icon: <Sparkles className="w-8 h-8 " />,
    },
    {
      id: 3,
      title: "Easy Analytics",
      description:
        "We provide tools like built-in views and a tracker to help you analyze portfolio engagement, offering insights to boost your impact.",
      icon: <LineChart className="w-8 h-8 " />,
    },
    {
      id: 4,
      title: "Instant Hosting",
      description:
        "Host your portfolio online for free to create a personalized webpage and get a sharable link to showcase your work.",
      icon: <Monitor className="w-8 h-8 " />,
    },
  ];
  const templates = [
  { id: 1, name: "Pro Creative 1", img: templateImage },
  { id: 2, name: "Pro Creative 2", img: templateImage },
  { id: 3, name: "Pro Creative 3", img: templateImage },
];
const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
     const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const appearRef = useRef(null);
    const topRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const ar = appearRef.current;
    const lr = leftRef.current;
    const tr = topRef.current;

    gsap.fromTo(
      tr,
      { opacity: 0, y: 150 }, // start
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tr,
          start: "top 90%", // when element enters viewport
          end: "top 50%",
          scrub: true, // smooth scroll effect
        },
      }
    );
    gsap.fromTo(
      lr,
      { opacity: 0, y: 150 }, // start
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lr,
          start: "top 90%", // when element enters viewport
          end: "top 30%",
          scrub: true, // smooth scroll effect
        },
      }
    );
    gsap.fromTo(
      ar,
      { opacity: 0, y: 50 }, // start
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        // scrollTrigger: {
        //   trigger: ar,
        //   start: "top 90%", // when element enters viewport
        //   end: "top 10%",
        //   scrub: true, // smooth scroll effect
        // },
      }
    );
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 }, // start
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    
  }, []);
   return (
    <div>
    <div className="relative w-full bg-black  h-[110vh]">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-black/10"></div>

      {/* Content */}
      <div className="absolute text-5xl z-10 max-w-3xl text-white top-[10vh]  px-6">
        <h1 className="tracking-widest font-medium">PORTIGO</h1>
      </div>
      <div  className="absolute z-10 max-w-3xl bottom-[30vh]  px-6">
        {/* Badge */}
        {/* <span className="inline-block border border-black text-gray-400 text-sm px-4 py-1 rounded-full mb-6">
          Portfolio Builder
        </span> */}

        {/* Heading */}
        <h1 ref={sectionRef} className="text-5xl md:text-6xl font-[400] text-white">
          <span className="font-serif">Bring your portfolio live</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 font-normal text-xl md:text-2xl text-gray-300">
          Beautiful templates, zero code, instant hosting.
        </p>

        {/* Buttons */}
        <div ref={appearRef} className="mt-8 opacity-0 flex flex-col sm:flex-row  gap-4">
          <a href="#templates"><button className="bg-[#2A2422] hover:bg-slate-800 hover:cursor-pointer border-2 border-white font-normal  text-white px-6 py-3 rounded-full transition">
            Get Started
          </button>
          </a>
          <a href="#getstarted"><button className="text-gray-200 border-2 hover:cursor-pointer border-white rounded-4xl hover:text-white px-6 py-3 font-medium">
            See how it works
          </button>
          </a>
        </div>
      </div>
    </div>
     {/* fetures */}
     <section className="bg-black text-white pb-12 pt-8">
      <div ref={leftRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Feature 1 */}
          <div className="relative pt-4 border-t border-gray-700">
            {/* <div className="flex justify-center mb-4">
              <span className="text-4xl">👆</span>
            </div> */}
            <h3 className="text-2xl font-bold mb-4">Select a templates</h3>
            <p className="text-gray-300">
              We offer an extensive selection of templates for portfolios, each
              specifically designed to suit a wide variety of professions. Whether
              you're an artist, a designer, a photographer, or a business
              professional, you'll find templates tailored to highlight your unique
              skills and achievements.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative pt-4 border-t border-gray-700">
            {/* <div className="flex justify-center mb-4">
              <span className="text-4xl">🚀</span>
            </div> */}
            <h3 className="text-2xl font-bold mb-4">Edit and Publish</h3>
            <p className="text-gray-300">
              Our platform offers a quick and easy way to edit templates. With a few
              clicks, you can customize templates for various professions. The
              intuitive interface helps you showcase your skills effortlessly. Once
              you're satisfied, you can host and publish your portfolio online for
              free.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative pt-4 border-t border-gray-700">
            {/* <div className="flex justify-center mb-4">
              <span className="text-4xl">🔗</span>
            </div> */}
            <h3 className="text-2xl font-bold mb-4">Share and connect</h3>
            <p className="text-gray-300">
              After publishing your portfolio, share it widely with personalized
              links. Track daily views with our views tracker. Customize your
              portfolio's look to match your style and brand. Engage with potential
              clients by adding contact forms or links to your social media. Gain
              insights with detailed analytics to see which sections attract the
              most attention.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="px-[2vw]">
      <div  className="flex md:flex-row flex-col-reverse items-center gap-[8vw]  max-w-7xl mx-auto px-6 py-16 ">
        {/* <div className="text-5xl font-serif ">
          <h1 className="font-bold w-auto">Make any template</h1>
          <h1 className="font-bold w-full">yours with ease.</h1>
        </div> */}
        <h1 className="text-5xl  font-serif font-bold leading-tight ">
          Make any template <br className="hidden md:block" />
          yours with ease.
        </h1>
        <h1 className="w-[40%] text-center">
          Weather you know coding and development or not, you can use
Portigo's customizable and responsive website templates to get
started
        </h1>
      </div>
      <section id="templates" className="">
      <div className="max-w-7xl mx-auto mb-[20vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white w-[30vw] rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-[30vh]">
              <Image
                src={template.img}
                alt={template.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex justify-evenly bg-slate-950 flex-row px-2.5 gap-5  items-center py-3">
              <h2 className="text-sm w-[20%] font-semibold text-gray-100">
               template1
              </h2>
              <div className="flex gap-1">
                <button className="border border-gray-700 text-gray-300 py-1 px-3 rounded-3xl font-medium transition">
                  Preview
                </button>
                <button className=" bg-amber-700 hover:bg-amber-600 py-1 text-gray-200 px-4 rounded-xl font-normal transition">
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    </section>
    <section id="getstarted" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">Why Portigo?</h2>

        {/* Features Grid */}
        <div ref={topRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center border-t border-gray-600 pt-6"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#2A2523] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Portfolio is Your First Impression
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            In a world of noise, your portfolio is your voice. It shows your
            work, your style, and your identity. Portigo makes that easy—even if
            you’re just starting.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={heroImage}
            alt="Portfolio Preview"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Elegant, Responsive, and Built to Impress
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our templates are not just pretty—they are optimized for clarity, engagement, and adaptability. Whether you are a designer, developer, or photographer, there's a style that speaks your language.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex  justify-center">
          <Image
            src={heroImage}
            alt="Portfolio Preview"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2  className="text-3xl md:text-4xl font-bold mb-6">
            Zero Code. Zero Hassle. Just Done
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Creating a personal site shouldn not feel like coding an app. With Portigo, it is as easy as filling a form. No confusing menus or tech setup
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={heroImage}
            alt="Portfolio Preview"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
      <Stats />
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Title */}
        <h2 className="text-4xl font-bold leading-tight">
          Frequently asked <br /> questions
        </h2>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  
    <section className="bg-black text-white py-20 px-6">
      <div  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Talk. We’d Love to <br /> Hear from You.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have a question, a custom template request, or just want to say hi? 
            Drop us a message—we usually reply within a few hours.
          </p>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name:"
            className="w-full p-3 rounded-lg bg-gray-200 text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address:"
            className="w-full p-3 rounded-lg bg-gray-200 text-black focus:outline-none"
          />
          <textarea
            placeholder="Your Message:"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-200 text-black focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-16"></div>
    </section>
    </div>
    
  );
}
