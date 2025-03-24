// app/order-success/page.jsx
"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <section className="w-full py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Order Placed Successfully!</h2>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <Link
          href="/products"
          className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}