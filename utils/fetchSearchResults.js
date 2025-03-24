// utils/fetchSearchResults.js
export async function fetchSearchResults(query) {
    if (!query) {
      return []; // Return an empty array if no query is provided
    }
  
    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    // Mock search results with images and prices
    const mockData = [
      {
        id: 1,
        title: "Wireless Earbuds",
        description: "High-quality wireless earbuds with noise cancellation.",
        image: "/earbuds.jpg",
        price: 49.99,
      },
      {
        id: 2,
        title: "Smartwatch",
        description: "Stay connected with this sleek and stylish smartwatch.",
        image: "/smartwatch.jpg",
        price: 129.99,
      },
      {
        id: 3,
        title: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and crisp sound.",
        image: "/speaker.jpg",
        price: 39.99,
      },
    ];
  
    // Filter results based on the query
    return mockData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }