"use client";

import Link from "next/link";

export default function Hero() {
  // Function to handle scroll to the ProductShowcase section
  const scrollToProductShowcase = () => {
    const productShowcaseSection = document.getElementById("product-showcase");
    if (productShowcaseSection) {
      productShowcaseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-6">Welcome to Soultronix</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore the best electronics with unbeatable prices. From cutting-edge
          gadgets to premium accessories, we’ve got it all.
        </p>
        <Link href="/products" passHref>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Shop Now
          </button>
        </Link>
      </div>

      {/* Scroll Down Indicator */}
      <div
         className="absolute bottom-4 mb-20 cursor-pointer animate-bounce"
        onClick={scrollToProductShowcase} // Scroll to ProductShowcase on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}