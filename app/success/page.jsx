"use client";

import { useEffect } from "react";
import useCartStore from "@/store/useCartStore"; // Adjust the path if needed

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart(); // Empty the cart once this page is loaded
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">Payment Successful </h1>
      <p className="text-lg mb-8">
        Thank you for your purchase! Your order has been placed successfully.
      </p>
      <a
        href="/"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
}
