"use client";

import { useState } from "react";
import useCartStore from "@/store/useCartStore";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(shippingInfo).some((field) => !field)) {
      setError("Please fill out all shipping information fields.");
      return;
    }

    try {
      setLoading(true);
      const stripe = await stripePromise;

      const lineItems = cart.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      }));

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems }),
      });

      if (!response.ok) throw new Error("Checkout failed");

      const { id: sessionId } = await response.json();

      await stripe.redirectToCheckout({ sessionId });
      clearCart();
    } catch (err) {
      console.error("Checkout Error:", err);
      setError("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Checkout</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                    <p className="text-yellow-500 font-bold">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-white">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-2xl font-bold text-white text-right">
                Total: ${totalCost.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white">Shipping Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "address", "city", "state", "zip", "country"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={shippingInfo[field]}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, [field]: e.target.value })
                  }
                  className="w-full bg-gray-700 text-white p-3 rounded-lg"
                  required
                />
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
