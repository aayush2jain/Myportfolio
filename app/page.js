import FeatureCard from "./components/cards/feature_card";
import TypingEffect from "./components/typing/typingeffect";
import ResponsiveParticleCanvas from "./components/particle/responsive_window";
import BlogCard from "./components/cards/card";
export default function LandingPage() {
  return (
    <div className=" relative min-h-screen bg-gradient-to-r from-blue-200 to-gray-500">
      {/* Navbar */}
      <nav className="fixed w-full top-0 flex justify-center items-center overflow-visible z-50 h-15 bg-[linear-gradient(to_bottom,_black,_#2e2e2e,_#666666)] opacity-60 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-wider text-white">
          CREATIFY
        </h1>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-10 mx-5 bg-indigo-600 text-white text-md rounded-full hover:bg-indigo-700">
          <a href="/profile">PROFILE</a>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-5 top-0 text-center bg-transparent h-[100vh] overflow-hidden">
        <div className="absolute w-full z-10 overflow-visible inset-0 pointer-events-none">
          <ResponsiveParticleCanvas />
        </div>
        <div className="absolute -top-125 w-250 h-250 -left-125 rounded-full bg-red-500 left-1/2 transform -translate-x-1/2 overflow-visible z-3"></div>
        {/* <div className="absolute -top-62 w-125 h-125 -left-62 rounded-full bg-red-500 left-1/2 transform -translate-x-1/2 overflow-visible z-35"></div> */}

        {/* <div className="w-150 absolute h-150 -bottom-30 z-2 -right-30 bg-black rounded-full items-center overflow-visible ">kjhgfd</div> */}
        <div className="absolute inset-0 z-50 flex flex-col justify-center">
          <div className="text-5xl sm:text-7xl tracking-widest font-extrabold md:font-thin md:text-9xl text-black">
            CREATIFY
          </div>

          <div className=" w-5/6 mx-auto p-6 ">
            <h1 className="text-5xl font-bold tracking-wider text-white">
              Create Your Perfect Portfolio
            </h1>
            <div className="h-5 mt-4">
              <TypingEffect
                texts={[
                  "Build, customize, and publish your portfolio in minutes.",
                  "Stand out with beautiful designs tailored to you.",
                  "Launch your dream career with a stunning online presence.",
                  "Create. Showcase. Inspire.",
                  "No code, no hassle — just pure creativity.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white w-5/6 my-10 mx-auto rounded-full border-2 " />

      {/* Features Section */}
      <section className="pb-16 text-center">
        <h2 className="text-5xl mb-10 font-semibold">
          Why Choose{" "}
          <span className="text-red-400 tracking-wide">CREATIFY</span>?
        </h2>
        <div className="mt-8 flex flex-wrap gap-10 justify-center w-5/6 mx-auto">
          <FeatureCard
            title="Easy Customization"
            desc="Tailor every aspect of your portfolio — colors, fonts, images, layouts — all with a simple, intuitive editor."
          />
          <FeatureCard
            title="Multiple Templates"
            desc="Select from a curated gallery of modern, responsive templates designed for every profession and passion."
          />
          <FeatureCard
            title="Instant Publishing"
            desc="Go live in seconds! Share your portfolio with recruiters, clients, and the world with a single click."
          />
          <FeatureCard
            title="SEO Optimized"
            desc="Built-in SEO tools to help your portfolio rank higher and reach a wider audience organically."
          />
          <FeatureCard
            title="Mobile Friendly"
            desc="Your portfolio will look stunning on all devices — mobiles, tablets, and desktops."
          />
          <FeatureCard
            title="Free Hosting"
            desc="No hidden costs. Host your portfolio for free on our reliable and secure servers."
          />
        </div>
      </section>
      <hr className="border-white w-5/6 my-10 mx-auto rounded-full border-2 " />

      {/* Templates Preview Section */}
      <section className="py-16 border-3 border-black mx-2 md:mx-20 my-20 flex flex-col gap-30 bg-transparent justify-center">
        <h2 className="text-5xl mx-auto text-black ">Explore Our Templates</h2>
        <div className="flex flex-row flex-wrap justify-center gap-10 w-5/6 mx-auto ">
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="A sleek and minimal design perfect for creatives, freelancers, and designers aiming for a strong first impression."
            title="Minimalist Vibes"
            link="https://soumyajit.vercel.app/"
          />
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="A modern and elegant template crafted for tech enthusiasts, developers, and startups."
            title="Tech Pulse"
            link="https://soumyajit.vercel.app/"
          />
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="A bold, vibrant template for artists, photographers, and visual storytellers who want to captivate audiences."
            title="Creative Burst"
            link="https://soumyajit.vercel.app/"
          />
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="A bold, vibrant template for artists, photographers, and visual storytellers who want to captivate audiences."
            title="Creative Burst"
            link="https://soumyajit.vercel.app/"
          />
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="A clean and corporate style suited for consultants, entrepreneurs, and professionals."
            title="Business Elite"
            link="https://soumyajit.vercel.app/"
          />
          <BlogCard
            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
            description="An artistic portfolio template combining simplicity and sophistication for personal brands."
            title="Elegant Bloom"
            link="https://soumyajit.vercel.app/"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p>&copy; 2025 CREATIFY. All rights reserved.</p>
      </footer>
    </div>
  );
}
