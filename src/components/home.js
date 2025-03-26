import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", price: "$999" },
  { id: 2, name: "Samsung S23", price: "$899" }
];

const Home = () => {
  return (
    <div>
      <h2>Available Mobiles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} - {product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
