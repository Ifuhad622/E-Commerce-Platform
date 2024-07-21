import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Ensure this path is correct

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;

