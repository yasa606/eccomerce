import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import './CSS/Admin-luxury.css';

const AdminAddProduct = () => {
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: 'men',
    old_price: '',
    new_price: '',
    image: ''
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to backend
    alert('Product would be added: ' + JSON.stringify(product));
    navigate('/admin/dashboard');
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="admin-add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="admin-product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="men">Men</option>
            <option value="womens">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="form-group">
          <label>Old Price</label>
          <input
            type="number"
            name="old_price"
            value={product.old_price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label>New Price</label>
          <input
            type="number"
            name="new_price"
            value={product.new_price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image path or URL"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="admin-save-btn">Add Product</button>
          <button type="button" onClick={handleCancel} className="admin-cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
