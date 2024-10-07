import React, { useContext, useState } from "react";
import "./CategoriesDisplay.css";
import categories from "../../Assets/Category";
import Category from "../Category/Category";
import { StoreContext } from "../../Context/Context";

const CategoriesDisplay = () => {
  const { setSelectedCategory } = useContext(StoreContext);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="categories-display">
      <div
        className={`all-categories ${activeCategory === "all" ? "active" : ""}`}
        onClick={() => handleCategoryClick("all")}
      >
        ALL CATEGORIES
      </div>
      <div className="categories-display-container">
        {categories.map((categoryItem, index) => (
          <div key={index} onClick={() => handleCategoryClick(categoryItem.item_category)}>
            <Category
              item_category={categoryItem.item_category}
              category_image={categoryItem.category_image}
              isActive={activeCategory === categoryItem.item_category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDisplay;
