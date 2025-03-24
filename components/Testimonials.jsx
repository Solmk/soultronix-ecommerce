"use client";

import { useRef } from "react"; // Import useRef
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      comment:
        "Soultronix has the best products and customer service! I highly recommend them to anyone looking for quality electronics.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      comment:
        "Amazing experience! Fast shipping and great prices. I'll definitely shop here again.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      comment:
        "The latest gadgets at unbeatable prices. Soultronix is my go-to store for all things tech!",
    },
    {
      id: 4,
      name: "Emily Brown",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      comment:
        "Incredible selection and excellent customer support. I'm a happy customer!",
    },
    {
      id: 5,
      name: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      comment:
        "Great store with a wide range of products. Highly recommended for tech enthusiasts!",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Customers Say
        </h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-10"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide"
          >
            <div className="flex space-x-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-10"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}