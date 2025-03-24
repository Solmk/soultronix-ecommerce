"use client";

import { FaShippingFast, FaShieldAlt, FaHeadset, FaMobileAlt } from "react-icons/fa"; // Import icons from react-icons

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="w-12 h-12 mb-4 text-yellow-500" />,
      title: "Fast Shipping",
      description:
        "Get your favorite gadgets delivered to your doorstep in record time. We offer express shipping options for all orders.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="w-12 h-12 mb-4 text-yellow-500" />,
      title: "Secure Payments",
      description:
        "Shop with confidence! We use advanced encryption to ensure your payment details are always safe and secure.",
    },
    {
      id: 3,
      icon: <FaHeadset className="w-12 h-12 mb-4 text-yellow-500" />,
      title: "24/7 Support",
      description:
        "Our expert support team is available 24/7 to assist you with any questions or issues. We're here to help!",
    },
    {
      id: 4,
      icon: <FaMobileAlt className="w-12 h-12 mb-4 text-yellow-500" />,
      title: "Latest Tech",
      description:
        "Stay ahead of the curve with our curated selection of the latest electronics and cutting-edge gadgets.",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Choose Soultronix?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
            >
              <div className="text-center">
                {feature.icon} {/* Icon */}
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}