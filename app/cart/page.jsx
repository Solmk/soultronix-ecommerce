"use client";

import useCartStore from "@/store/useCartStore"; // Adjust the import path as needed
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  // Calculate the total cost of all items in the cart
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-400">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <Link
              href="/products"
              className="mt-4 inline-block bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Item List */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-6 last:border-b-0 transition-all duration-300 hover:bg-gray-750 rounded-lg"
                >
                  {/* Product Image and Details */}
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg transition-all duration-300 hover:scale-105"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <p className="text-yellow-500 font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Selector and Remove Button */}
                  <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <div className="flex items-center space-x-4">
                      <label htmlFor={`quantity-${item.id}`} className="text-gray-400">
                        Qty:
                      </label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10) || 1; // Fallback to 1 if invalid
                          if (newQuantity > 0) {
                            updateQuantity(item.id, newQuantity, true); // true for cart
                          }
                        }}
                        className="w-20 bg-gray-700 text-white text-center rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                        min="1"
                      />
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="text-right text-2xl font-bold text-white">
              Total: <span className="text-yellow-500">${totalCost.toFixed(2)}</span>
            </div>

            {/* Checkout and Clear Cart Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout" // Replace with your checkout page route
                className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}