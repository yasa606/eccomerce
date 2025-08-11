import React, { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext(null);

const ADMIN_PASSWORD = "Yasser@0910";

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    if (adminToken === ADMIN_PASSWORD) {
      setIsAdmin(true);
    }
  }, [adminToken]);

  const loginAdmin = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setAdminToken(ADMIN_PASSWORD);
      localStorage.setItem('adminToken', ADMIN_PASSWORD);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setAdminToken(null);
    localStorage.removeItem('adminToken');
  };

  const value = {
    isAdmin,
    loginAdmin,
    logoutAdmin,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminProvider;