import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { ShopContext } from '../context/ShopContext';
import './CSS/AdminEnhanced-luxury.css';

const DebugAdminDashboard = () => {
  const { isAdmin, logoutAdmin } = useContext(AdminContext);
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // Debug information
    const info = {
      isAdmin,
      productsCount: all_product?.length || 0,
      products: all_product || [],
      localStorage: {
        adminToken: localStorage.getItem('adminToken'),
        isAdmin: localStorage.getItem('isAdmin')
      }
    };
    
    setDebugInfo(info);
    setLoading(false);
    
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, all_product, navigate]);

  if (loading) {
    return (
      <div className="admin-dashboard-container">
        <div className="loading-container">
          <h2>Loading Admin Dashboard...</h2>
          <p>Please wait while we load your admin data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      <div className="admin-header">
        <h1>Debug Admin Dashboard</h1>
        <button onClick={() => logoutAdmin()} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="debug-info">
        <h2>Debug Information</h2>
        <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
      </div>

      <div className="products-section">
        <h2>All Products ({all_product?.length || 0})</h2>
        {all_product && all_product.length > 0 ? (
          <div className="products-grid">
            {all_product.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.new_price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Please check your product data source.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugAdminDashboard;
