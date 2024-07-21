import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'; // Ensure this is correctly exported
import Header from '../components/Header'; // Ensure this component exists
import Footer from '../components/Footer'; // Ensure this component exists
import ProductCard from '../components/ProductCard'; // Ensure this component exists
import './HomePage.css'; // Ensure this CSS file exists

const HomePage = () => {
  const dispatch = useDispatch();

  // Retrieve product list from the Redux store
  const productList = useSelector((state) => state.productList || {});
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // Fetch products when component mounts
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className="home-page">
        <h1>Welcome to MelHad Investment</h1>
        <section className="featured-products">
          <h2>Featured Products</h2>
          {loading ? (
            <div>Loading...</div> // Display loading message
          ) : error ? (
            <div>{error}</div> // Display error message
          ) : (
            <div className="product-list">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} /> // Render each product card
                ))
              ) : (
                <div>No products available.</div> // Display message if no products
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

