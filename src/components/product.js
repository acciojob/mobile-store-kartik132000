import React from "react";
import { useParams } from "react-router-dom";

const products = {
  1: { name: "iPhone 15", description: "Latest iPhone model", price: "$999" },
  2: { name: "Samsung S23", description: "Latest Samsung model", price: "$899" }
};

const Product = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
