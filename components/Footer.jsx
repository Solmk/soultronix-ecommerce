"use client";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top: Logo and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Soultronix</h2>
          {/* <div className="flex space-x-4 mt-4 md:mt-0 text-xl text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://github.com/Solmk" target="_blank" rel="noopener noreferrer">
              <FiGithub className="hover:text-yellow-400 transition" />
            </a>
          </div> */}
        </div>

        {/* Middle: Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="text-white mb-2 font-semibold">Shop</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Smartphones</Link></li>
              <li><Link href="#" className="hover:underline">Laptops</Link></li>
              <li><Link href="#" className="hover:underline">Audio</Link></li>
              <li><Link href="#" className="hover:underline">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2 font-semibold">Company</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2 font-semibold">Support</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Contact</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Shipping</Link></li>
              <li><Link href="#" className="hover:underline">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-2 font-semibold">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Cookies</Link></li>
              <li><Link href="#" className="hover:underline">Licensing</Link></li>
              <li><Link href="https://unsplash.com/" className="hover:underline">Images by unsplash</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-800">
          © {new Date().getFullYear()} Soul|Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
