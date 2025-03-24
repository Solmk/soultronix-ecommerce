import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Optional
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soultronix",
  description: "Modern electronics e-commerce store by Solomon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main> {/* Pushes content below navbar */}
        <Footer />
      </body>
    </html>
  );
}
