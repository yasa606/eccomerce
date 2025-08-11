import React, { useState, useEffect, useContext } from 'react';
import './CSS/MenLuxury.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const MenLuxury = () => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (all_product && all_product.length > 0) {
      const menProducts = all_product.filter(product => 
        product && product.category && product.category === "men"
      );
      console.log('Men products found:', menProducts.length, menProducts);
      setProducts(menProducts);
    } else {
      console.log('No products found in all_product');
      setProducts([]);
    }
  }, [all_product]);

  // Check if user is admin
  useEffect(() => {
    const adminCheck = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminCheck);
  }, []);

  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    new_price: '',
    old_price: '',
    category: 'men'
  });



  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: products.length + 1000,
      new_price: parseFloat(newProduct.new_price),
      old_price: newProduct.old_price ? parseFloat(newProduct.old_price) : null
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', image: '', new_price: '', old_price: '', category: 'men' });
    setShowAddForm(false);
  };

  return (
    <div className="men-luxury">
      <div className="men-luxury-hero">
        <h1>TOP 10 </h1>
        <p>Discover our curated selection of premium men's fashion and accessories</p>
        {isAdmin && (
          <button 
            className="add-product-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            Add New Product
          </button>
        )}
      </div>

      {showAddForm && (
        <div className="add-product-form">
          <h3>Add New Men's Product</h3>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.new_price}
              onChange={(e) => setNewProduct({...newProduct, new_price: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Old Price (optional)"
              value={newProduct.old_price}
              onChange={(e) => setNewProduct({...newProduct, old_price: e.target.value})}
            />
            <button type="submit">Add Product</button>
            <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
          </form>
        </div>
      )}
      
      <div className="men-luxury-grid">
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div key={item.id} className="men-luxury-item">
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
            <h3>No men's products found</h3>
            <p>There are currently no products in the men's category.</p>
            <p>Debug: Total products loaded: {all_product ? all_product.length : 0}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenLuxury;
