"use client";
import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Payment Cancelled</h1>
      <p className="text-lg text-gray-300 mb-4">
        Your payment was not completed. You can try again or return to the shop.
      </p>

      <div className="flex gap-4 mt-6">
        <Link
          href="/checkout"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
