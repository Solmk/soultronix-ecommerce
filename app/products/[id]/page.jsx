// app/products/[id]/page.jsx
import Link from "next/link";
export default async function ProductPage({ params }) {
    const { id } = params; // Access the product ID from the URL
  
    // Simulate fetching product details (replace with your actual logic)
    const product = await fetchProductDetails(id);
  
    if (!product) {
      return <div className="min-h-screen bg-black text-white p-8">Product not found.</div>;
    }
  
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="h-96 bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-yellow-500 font-bold text-2xl mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-400 mb-6">{product.description}</p>
              <Link
          href="/products"
          className="mt-4 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Back to Products
        </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Simulate fetching product details (replace with your actual logic)
  async function fetchProductDetails(id) {
    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    // Mock product data
    const mockData = [
      {
        id: 1,
        name: "Wireless Earbuds",
        price: 49.99,
        image: "/earbuds.jpg",
        description: "High-quality wireless earbuds with noise cancellation.",
      },
      {
        id: 2,
        name: "Smartwatch",
        price: 129.99,
        image: "/smartwatch.jpg",
        description: "A sleek smartwatch with fitness tracking and heart rate monitoring.",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "/speaker.jpg",
        description: "Portable Bluetooth speaker with 20-hour battery life.",
      },
      {
        id: 4,
        name: "Gaming Keyboard",
        price: 89.99,
        image: "/keyboard.jpg",
        description: "Mechanical gaming keyboard with RGB lighting.",
      },
      {
        id: 5,
        name: "Noise-Cancelling Headphones",
        price: 199.99,
        image: "/headphones.jpg",
        description: "Premium over-ear headphones with active noise cancellation.",
      },
      {
        id: 6,
        name: "Wireless Mouse",
        price: 29.99,
        image: "/gaming-mouse.jpg",
        description: "Ergonomic wireless mouse with customizable buttons.",
      },
      {
        id: 7,
        name: "External Hard Drive",
        price: 89.99,
        image: "/harddrive.jpg",
        description: "1TB external hard drive for extra storage.",
      },
      {
        id: 8,
        name: "4K Monitor",
        price: 299.99,
        image: "/monitor.jpg",
        description: "27-inch 4K monitor with HDR support.",
      },
      {
        id: 9,
        name: "Gaming Chair",
        price: 249.99,
        image: "/chair.jpg",
        description: "Comfortable gaming chair with lumbar support.",
      },
      {
        id: 10,
        name: "USB-C Hub",
        price: 39.99,
        image: "/usb-hub.jpg",
        description: "6-in-1 USB-C hub with HDMI and SD card slots.",
      },
      {
        id: 11,
        name: "4K Monitor",
        price: 299.99,
        image: "/monitor.jpg",
        description: "27-inch 4K monitor with HDR support.",
      },
      {
        id: 12,
        name: "Gaming Chair",
        price: 249.99,
        image: "/chair.jpg",
        description: "Comfortable gaming chair with lumbar support.",
      },
    ];
  
    // Find the product by ID
    return mockData.find((item) => item.id === parseInt(id));
  }