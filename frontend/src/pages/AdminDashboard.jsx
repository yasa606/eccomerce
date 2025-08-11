import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { ShopContext } from '../context/ShopContext';
import './CSS/AdminEnhanced-luxury.css';

const AdminDashboard = () => {
  const { isAdmin, logoutAdmin } = useContext(AdminContext);
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);
  
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  const handleAddProduct = () => {
    navigate('/admin/add-product');
  };

  const handleEditProduct = (productId) => {
    navigate(`/admin/edit-product/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // In a real app, this would call an API
      alert(`Product ${productId} would be deleted`);
    }
  };

  // Categorize products
  const categorizeProducts = () => {
    const categories = {
      all: all_product,
      newCollections: all_product.filter(p => p.new === true),
      top10: all_product.filter(p => p.rating >= 4.5).slice(0, 10),
      mens: all_product.filter(p => p.category === 'men'),
      womens: all_product.filter(p => p.category === 'women'),
      kids: all_product.filter(p => p.category === 'kid'),
      popular: all_product.filter(p => p.popular === true)
    };
    return categories;
  };

  const categories = categorizeProducts();
  const filteredProducts = categories[activeTab]?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const getCategoryStats = () => {
    return {
      all: all_product.length,
      newCollections: categories.newCollections.length,
      top10: categories.top10.length,
      mens: categories.mens.length,
      womens: categories.womens.length,
      kids: categories.kids.length,
      popular: categories.popular.length
    };
  };

  const stats = getCategoryStats();

  return (
    <div className="admin-dashboard-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-header-actions">
          <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
        </div>
      </div>

      <div className="admin-stats-grid">
        <div className="stat-card">
          <h3>All Products</h3>
          <p>{stats.all}</p>
        </div>
        <div className="stat-card">
          <h3>New Collections</h3>
          <p>{stats.newCollections}</p>
        </div>
        <div className="stat-card">
          <h3>Top 10</h3>
          <p>{stats.top10}</p>
        </div>
        <div className="stat-card">
          <h3>Men's</h3>
          <p>{stats.mens}</p>
        </div>
        <div className="stat-card">
          <h3>Women's</h3>
          <p>{stats.womens}</p>
        </div>
        <div className="stat-card">
          <h3>Kids</h3>
          <p>{stats.kids}</p>
        </div>
      </div>

      <div className="admin-controls">
        <button onClick={handleAddProduct} className="admin-action-btn primary">
          <i className="fas fa-plus"></i> Add New Product
        </button>
        
        <div className="admin-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-search-input"
          />
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="admin-category-tabs">
        {Object.keys(stats).map(category => (
          <button
            key={category}
            className={`category-tab ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
            <span className="category-count">{stats[category]}</span>
          </button>
        ))}
      </div>

      <div className="admin-product-grid">
        <h2>
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/([A-Z])/g, ' $1')} Products
          <span className="product-count">({filteredProducts.length})</span>
        </h2>
        
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found in this category.</p>
            <button onClick={handleAddProduct} className="add-first-product">
              Add First Product
            </button>
          </div>
        ) : (
          <div className="product-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="admin-product-image"
                      />
                    </td>
                    <td>
                      <div className="product-info">
                        <strong>{product.name}</strong>
                        <small>{product.description?.substring(0, 50)}...</small>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">{product.category}</span>
                    </td>
                    <td>${product.new_price}</td>
                    <td>
                      <div className="rating">
                        <span className="stars">{'★'.repeat(Math.floor(product.rating || 0))}</span>
                        <span>{product.rating || 'N/A'}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${product.new ? 'new' : ''}`}>
                        {product.new ? 'New' : 'Regular'}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          onClick={() => handleEditProduct(product.id)} 
                          className="admin-edit-btn"
                          title="Edit Product"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)} 
                          className="admin-delete-btn"
                          title="Delete Product"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
