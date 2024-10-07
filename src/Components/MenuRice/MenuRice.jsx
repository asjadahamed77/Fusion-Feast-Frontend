import React, { useContext } from "react";
import "./MenuRice.css";
import FoodItems from "../FoodItems/FoodItems";
import { StoreContext } from "../../Context/Context";

const MenuRice = ({ title }) => {
  const { menuItems, searchTerm } = useContext(StoreContext);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.item_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = item.item_category === "rice";
    return matchesSearch && matchesCategory;
  });

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="menu-page-title">
        <h1>{title}</h1>
        <hr />
      </div>
      <div className="mouth-watering-menu-items">
        {filteredItems.map((item, index) => (
          <div key={index}>
            <FoodItems
              item_image={item.item_image}
              item_name={item.item_name}
              item_price={item.item_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuRice;
