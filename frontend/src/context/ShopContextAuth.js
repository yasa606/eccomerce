import React, { createContext, useState, useContext, useEffect } from "react";
import all_product from '../components/Assets/all_product_affiliate';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    // Check authentication status
    const checkAuthStatus = () => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        return !!(token && user);
    };

    // Initialize authentication
    useEffect(() => {
        setIsAuthenticated(checkAuthStatus());
    }, []);

    const addToCart = (itemId) => {
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return false;
        }
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        return true;
    };

    const removefromCart = (itemId) => {
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return false;
        }
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        return true;
    };

    const login = (token, user) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(true);
        setShowLoginPrompt(false);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setCartItems(getDefaultCart());
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((Product) => Product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        getTotalItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removefromCart,
        isAuthenticated,
        login,
        logout,
        showLoginPrompt,
        setShowLoginPrompt
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
