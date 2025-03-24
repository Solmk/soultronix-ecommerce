"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore"; // Adjust the import path

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, cart } = useCartStore(); // Get cart and addToCart from Zustand store

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Products</h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-102 shadow-lg"
          >
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
            <p className="text-yellow-500 font-bold text-2xl">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex gap-2 mt-4">
              <Link
                href={`/products/${product.id}`}
                className="w-1/2 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition text-center"
              >
                View Details
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="w-1/2 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}