"use client";

import { useState } from "react"; // Import useState

export default function AboutPage() {
  const [email, setEmail] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for feedback message
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true); // Set loading state
    setMessage(""); // Clear previous messages

    try {
      // Simulate an API call (replace with your actual API endpoint)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear the input field
      } else {
        const data = await response.json();
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-500">
          About Us
        </h1>

        {/* Company Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to <span className="text-yellow-500 font-semibold">Soultronix</span>, your go-to destination for the latest in tech gadgets and innovation. We are passionate about bringing you cutting-edge technology that enhances your everyday life. From smart home devices to wearable tech, we curate the best products to keep you ahead of the curve.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-yellow-500 font-semibold">Soultronix</span>, our mission is to empower individuals and businesses with innovative technology solutions. We believe that technology should be accessible, intuitive, and transformative. Whether you're a tech enthusiast or a casual user, we're here to help you discover products that inspire and excite.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="mb-2">
              <span className="text-yellow-500 font-semibold">Innovation</span>: We stay ahead of the curve by embracing the latest advancements in technology.
            </li>
            <li className="mb-2">
              <span className="text-yellow-500 font-semibold">Quality</span>: We handpick products that meet the highest standards of performance and reliability.
            </li>
            <li className="mb-2">
              <span className="text-yellow-500 font-semibold">Customer Focus</span>: Your satisfaction is our top priority. We're here to support you every step of the way.
            </li>
            <li className="mb-2">
              <span className="text-yellow-500 font-semibold">Sustainability</span>: We are committed to promoting eco-friendly and sustainable tech solutions.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-gray-300 leading-relaxed">
            Behind <span className="text-yellow-500 font-semibold">Soultronix</span> is a team of passionate tech enthusiasts, designers, and engineers. We work tirelessly to bring you the best products and experiences. Get to know the people who make it all happen:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-400">Head of Product Development</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-400">Lead Designer</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join the Soultronix Community</h2>
          <p className="text-gray-300 mb-6">
            Stay updated with the latest tech trends, exclusive offers, and more. Sign up for our newsletter today!
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-r-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Sign Up Now"}
            </button>
          </form>
          {message && (
            <p className="text-center mt-4 text-yellow-500">{message}</p>
          )}
        </section>
      </div>
    </div>
  );
}