import React from 'react';
import '../css/ProductCard.css'; // Update the path to point to the css directory
import { Link } from 'react-router-dom';

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

