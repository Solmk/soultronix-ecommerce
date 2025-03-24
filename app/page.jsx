"use client";

import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <Hero />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}