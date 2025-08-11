import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import './AdminButton-luxury.css';

const AdminButton = () => {
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin/login');
    }
  };

  return (
    <div className="admin-button-container">
      <button 
        className="admin-access-btn"
        onClick={handleAdminClick}
        title={isAdmin ? "Go to Admin Dashboard" : "Admin Login"}
        type="button"
      >
        <i className="fas fa-cog"></i>
        <span>Admin</span>
      </button>
    </div>
  );
};

export default AdminButton;
