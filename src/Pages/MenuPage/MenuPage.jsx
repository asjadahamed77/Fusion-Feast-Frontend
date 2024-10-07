import React, { useContext, useEffect } from 'react';
import "./MenuPage.css";
import SearchContainer from "../../Components/SearchContainer/SearchContainer";
import CategoriesDisplay from "../../Components/CategoriesDisplay/CategoriesDisplay";
import { StoreContext } from '../../Context/Context';
import MenuRice from "../../Components/MenuRice/MenuRice";
import MenuJuice from "../../Components/MenuJuice/MenuJuice";
import MenuIceCream from "../../Components/MenuIceCream/MenuIceCream";
import MenuKottu from "../../Components/MenuKottu/MenuKottu";
import ShawarmaMenu from "../../Components/ShawarmaAndSubmarine/ShawarmaAndSubmarine";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import SubmarineMenu from "../../Components/SubmarineMenu/SubmarineMenu";
import { motion } from 'framer-motion';

const MenuPage = () => {
  const { selectedCategory, searchTerm } = useContext(StoreContext);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  const renderMenuSection = (Component, title) => (
    <Component title={title} searchTerm={searchTerm} />
  );

  const renderAllCategories = () => (
    <>
      {renderMenuSection(MenuRice, 'Rice Menu')}
      {renderMenuSection(MenuKottu, 'Kottu Menu')}
      {renderMenuSection(ShawarmaMenu, 'Shawarma Menu')}
      {renderMenuSection(BurgerMenu, 'Burger Menu')}
      {renderMenuSection(SubmarineMenu, 'Submarine Menu')}
      {renderMenuSection(MenuJuice, 'Juice Menu')}
      {renderMenuSection(MenuIceCream, 'Ice Cream Menu')}
    </>
  );

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case 'rice':
        return renderMenuSection(MenuRice, 'Rice Menu');
      case 'kottu':
        return renderMenuSection(MenuKottu, 'Kottu Menu');
      case 'shawarma':
        return renderMenuSection(ShawarmaMenu, 'Shawarma Menu');
      case 'burger':
        return renderMenuSection(BurgerMenu, 'Burger Menu');
      case 'submarine':
        return renderMenuSection(SubmarineMenu, 'Submarine Menu');
      case 'juice':
        return renderMenuSection(MenuJuice, 'Juice Menu');
      case 'icecream':
        return renderMenuSection(MenuIceCream, 'Ice Cream Menu');
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="menu-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <SearchContainer />
      <CategoriesDisplay />
      {selectedCategory === 'all' ? renderAllCategories() : renderSelectedCategory()}
    </motion.div>
  );
};

export default MenuPage;
