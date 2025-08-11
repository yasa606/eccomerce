import React, { useState, useEffect, useContext } from 'react';
import './CSS/WomenLuxury.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const WomenLuxury = () => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    if (all_product && all_product.length > 0) {
      const womenProducts = all_product.filter(product => 
        product && product.category && product.category === "womens"
      );
      console.log('Women products found:', womenProducts.length, womenProducts);
      setProducts(womenProducts);
    } else {
      console.log('No products found in all_product');
      setProducts([]);
    }
  }, [all_product]);


  return (
    <div className="women-luxury">
      <div className="women-luxury-hero">
        <h1>Our Complete Collection</h1>
        <p>Explore our full range of handpicked products, curated for quality, style, and value—all in one place.</p>
        
      </div>


      
      <div className="women-luxury-grid">
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div key={item.id} className="women-luxury-item">
              <span className="rank-badge">#{index + 1}</span>
              <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <h3>No women's products found</h3>
            <p>There are currently no products in the women's category.</p>
            <p>Debug: Total products loaded: {all_product ? all_product.length : 0}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WomenLuxury;
