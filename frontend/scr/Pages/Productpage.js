import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductPage.css'; // Assuming you have a CSS file for styling

const ProductPage = () => {
  const dispatch = useDispatch();
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className="product-page">
        <h1>Products</h1>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="product-list">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                </Link>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

