import React, { createContext, useState } from 'react';
import RiceItems from '../Assets/RiceItems';
import juiceItems from '../Assets/Juice';
import iceCreamItems from '../Assets/IceCream';
import kottuItems from '../Assets/Kottu';
import shawarmaItems from '../Assets/Shawarma';
import burgerItems from '../Assets/Burger';
import submarineItems from '../Assets/Submarine';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item_name, item_count) => {
    const key = `${item_name}`;
    setCartItems((prev) => ({ ...prev, [key]: (prev[key] || 0) + item_count }));
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      newCartItems[key] -= 1;
      if (newCartItems[key] <= 0) {
        delete newCartItems[key];
      }
      return newCartItems;
    });
  };

  const [menuItems] = useState([
    ...RiceItems,
    ...juiceItems,
    ...iceCreamItems,
    ...kottuItems,
    ...shawarmaItems,
    ...burgerItems,
    ...submarineItems,
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <StoreContext.Provider value={{ menuItems, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, addToCart, removeFromCart, cartItems }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
