"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import useCartStore from "@/store/useCartStore"; // ✅ make sure this path is correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false); // ✅ for hydration fix
  const cart = useCartStore((state) => state.cart);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // ✅ Mark client ready
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          Soultronix
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-6 md:p-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            {[
              "Home",
              "Products",
              "About Us",
              "Contact",           
              "Preorders",
            ].map((label) => (
              <Link
                key={label}
                href={`/${
                  label === "Home"
                    ? ""
                    : label === "About Us"
                    ? "about" // Map "About Us" to "/about"
                    : label.toLowerCase().replace(/\s+/g, "")
                }`}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Search and Cart */}
          <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <FaSearch className="text-gray-400 hover:text-yellow-500 transition-colors" />
              </button>
            </form>

            {/* Cart Icon with count */}
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="relative"
            >
              <FaShoppingCart className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors" />
              {isClient && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
