// app/api/products/route.js
export async function GET() {
    const products = [
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
        
      ];
  
    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  }