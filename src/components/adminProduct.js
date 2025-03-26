import React from "react";

const AdminProduct = ({ product, onDelete }) => {
  return (
    <div>
      <h3>{product.name} - {product.price}</h3>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default AdminProduct;
