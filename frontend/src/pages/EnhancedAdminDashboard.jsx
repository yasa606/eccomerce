import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { ShopContext } from '../context/ShopContext';
import { generateProductJS, generateNewCollectionsJS, downloadFile } from '../utils/productGenerator';
import './CSS/Admin-Luxury-Complete.css';

const EnhancedAdminDashboard = () => {
  const { isAdmin, logoutAdmin } = useContext(AdminContext);
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);

  const [activeSection, setActiveSection] = useState('dashboard');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const ADMIN_PASSWORD = 'Yasser@0910';

  const handleSectionAccess = (section) => {
    setSelectedSection(section);
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setShowPasswordModal(false);
      setActiveSection(selectedSection);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  const handleAddProduct = (category) => {
    navigate('/admin/add-product', { state: { category } });
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

  const handleGenerateJSFile = (category) => {
    let products = [];
    let filename = '';
    
    switch(category) {
      case 'newCollections':
        products = all_product.filter(p => p.new === true);
        filename = 'NewCollections.js';
        const newCollectionsContent = generateNewCollectionsJS(products);
        downloadFile(newCollectionsContent, filename);
<path>frontend/src/pages/EnhancedAdminDashboard.jsx</path>
      case 'mens':
        products = all_product.filter(p => p.category === 'men');
        filename = 'MenProducts.js';
        const menContent = generateProductJS(products, 'men');
        downloadFile(menContent, filename);
        break;
      case 'womens':
        products = all_product.filter(p => p.category === 'women');
        filename = 'WomenProducts.js';
        const womenContent = generateProductJS(products, 'women');
        downloadFile(womenContent, filename);
        break;
      case 'kids':
        products = all_product.filter(p => p.category === 'kid');
        filename = 'KidsProducts.js';
        const kidsContent = generateProductJS(products, 'kids');
        downloadFile(kidsContent, filename);
        break;
      default:
        alert('Invalid category');
    }
  };

  const getProductsByCategory = (category) => {
    switch(category) {
      case 'newCollections':
        return all_product.filter(p => p.new === true);
      case 'mens':
        return all_product.filter(p => p.category === 'men');
      case 'womens':
        return all_product.filter(p => p.category === 'women');
      case 'kids':
        return all_product.filter(p => p.category === 'kid');
      default:
        return all_product;
    }
  };

  const renderSection = () => {
    const sections = {
      newCollections: 'New Collections',
      mens: 'Men\'s',
      womens: 'Women\'s',
      kids: 'Kids'
    };

    const currentProducts = getProductsByCategory(activeSection);
    const filteredProducts = currentProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="section-content">
        <div className="section-header">
          <h2>{sections[activeSection]} Management</h2>
          <div className="section-actions">
            <button 
              onClick={() => handleAddProduct(activeSection)}
              className="btn-add-product"
            >
              Add New Product
            </button>
            <button 
              onClick={() => handleGenerateJSFile(activeSection)}
              className="btn-generate-js"
            >
              Generate JS File
            </button>
            <button 
              onClick={() => setActiveSection('dashboard')}
              className="btn-back"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="section-search">
          <input
            type="text"
            placeholder={`Search ${sections[activeSection]} products...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found in {sections[activeSection]}</p>
              <button onClick={() => handleAddProduct(activeSection)}>
                Add First Product
              </button>
            </div>
          ) : (
            <div className="product-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
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
                      <td>{product.name}</td>
                      <td>${product.new_price}</td>
                      <td>{product.rating || 'N/A'}</td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            onClick={() => handleEditProduct(product.id)}
                            className="btn-edit"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteProduct(product.id)}
                            className="btn-delete"
                          >
                            Delete
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

  const renderDashboard = () => {
    const stats = {
      newCollections: all_product.filter(p => p.new === true).length,
      mens: all_product.filter(p => p.category === 'men').length,
      womens: all_product.filter(p => p.category === 'women').length,
      kids: all_product.filter(p => p.category === 'kid').length,
    };

    return (
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card" onClick={() => handleSectionAccess('newCollections')}>
            <h3>New Collections</h3>
            <p className="stat-number">{stats.newCollections}</p>
            <p className="stat-label">Products</p>
            <button className="access-btn">Access Section</button>
          </div>

          <div className="stat-card" onClick={() => handleSectionAccess('mens')}>
            <h3>Men's</h3>
            <p className="stat-number">{stats.mens}</p>
            <p className="stat-label">Products</p>
            <button className="access-btn">Access Section</button>
          </div>

          <div className="stat-card" onClick={() => handleSectionAccess('womens')}>
            <h3>Women's</h3>
            <p className="stat-number">{stats.womens}</p>
            <p className="stat-label">Products</p>
            <button className="access-btn">Access Section</button>
          </div>

          <div className="stat-card" onClick={() => handleSectionAccess('kids')}>
            <h3>Kids</h3>
            <p className="stat-number">{stats.kids}</p>
            <p className="stat-label">Products</p>
            <button className="access-btn">Access Section</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="enhanced-admin-dashboard">
      {showPasswordModal && (
        <div className="password-modal-overlay">
          <div className="password-modal">
            <h3>Enter Password</h3>
            <p>Accessing: {selectedSection}</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
            />
            {error && <p className="error-message">{error}</p>}
            <div className="modal-actions">
              <button onClick={handlePasswordSubmit} className="submit-btn">
                Submit
              </button>
              <button 
                onClick={() => {
                  setShowPasswordModal(false);
                  setPassword('');
                  setError('');
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'dashboard' ? renderDashboard() : renderSection()}
    </div>
  );
};

export default EnhancedAdminDashboard;
