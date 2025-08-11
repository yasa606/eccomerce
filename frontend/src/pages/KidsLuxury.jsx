import React, { useState, useEffect, useContext } from 'react';
import './CSS/KidsLuxury.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const KidsLuxury = () => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (all_product && all_product.length > 0) {
      const kidsProducts = all_product.filter(product => 
        product && product.category && product.category === "kids"
      );
      console.log('Kids products found:', kidsProducts.length, kidsProducts);
      setProducts(kidsProducts);
    } else {
      console.log('No products found in all_product');
      setProducts([]);
    }
  }, [all_product]);

  // Get kids products with deals
  const dealProducts = products.filter(product => 
    product.old_price && product.new_price < product.old_price
  );

  return (
    <div className="kids-luxury">
      <div className="kids-luxury-hero">
        <h1>Big Deals for Little Ones</h1>
        <p>Exclusive luxury deals on premium children's fashion and accessories</p>
      </div>
      
      <div className="kids-deals-banner">
        <h2>Up to 50% OFF</h2>
        <p>Limited time luxury deals for kids</p>
      </div>
      
      <div className="kids-luxury-grid">
        {dealProducts.map((item) => {
          const discount = Math.round(((item.old_price - item.new_price) / item.old_price) * 100);
          return (
            <div key={item.id} className="kids-deal-item">
              <span className="discount-badge">-{discount}%</span>
              <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KidsLuxury;
