"use client";

import { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore"; // Adjust the import path as needed

export default function ProductShowcase() {
  const [products, setProducts] = useState([]);
  const { addToPreorders } = useCartStore(); // Use the preorder function

  useEffect(() => {
    // Fetch product data from your backend API
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        console.log("Fetched Products:", data); // Debugging line
        setProducts(data.slice(0, 3)); // Only take the first 3 products
      } catch (error) {
        console.error("Error fetching products:", error); // Debugging line
      }
    };

    fetchProducts();
  }, []);

  const handlePreorder = (product) => {
    // Add the product to preorders
    addToPreorders(product);
    alert(`${product.name} has been added to your preorders!`);
  };

  return (
    <section id="product-showcase" className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full min-h-[400px]"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-yellow-500 font-bold mb-2">${product.price.toFixed(2)}</p>
                <p className="text-gray-400 mb-4">{product.description}</p>
              </div>

              {/* Preorder Button */}
              <button
                onClick={() => handlePreorder(product)}
                className="w-full bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Preorder
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}