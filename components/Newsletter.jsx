"use client";

import { useState } from "react"; // Import useState

export default function Newsletter() {
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
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Get the latest updates on new products and exclusive offers.
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
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-yellow-500">{message}</p>
        )}
      </div>
    </section>
  );
}