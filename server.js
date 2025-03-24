javascript
Copy
// server.js
const express = require("express");
const app = express();
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
    description: "Stay connected with this sleek and stylish smartwatch.",
  },
  // Add more products here
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});