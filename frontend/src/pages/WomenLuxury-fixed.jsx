import React, { useState, useEffect, useContext } from 'react';
import './CSS/WomenLuxury.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const WomenLuxury = () => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    new_price: '',
    old_price: '',
    category: 'women'
  });

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

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: products.length + 2000,
      new_price: parseFloat(newProduct.new_price),
      old_price: newProduct.old_price ? parseFloat(newProduct.old_price) : null
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', image: '', new_price: '', old_price: '', category: 'women' });
    setShowAddForm(false);
  };

  return (
    <div className="women-luxury">
      <div className="women-luxury-hero">
        <h1>Women's Luxury Collection</h1>
        <p>Indulge in our exquisite collection of women's luxury fashion and accessories</p>
        <button 
          className="add-product-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          Add New Product
        </button>
      </div>

      {showAddForm && (
        <div className="add-product-form">
          <h3>Add New Women's Product</h3>
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
