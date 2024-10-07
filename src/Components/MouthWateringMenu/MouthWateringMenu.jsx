import React from "react";
import "./MouthWateringMenu.css";
import RiceItems from "../../Assets/RiceItems";
import FoodItems from "../FoodItems/FoodItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const MouthWateringMenu = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <motion.div className="mouth-watering-menu" ref={ref}>
      <motion.div
        className="mouth-watering-menu-text"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>discover our</p>
        <h1>MOUTH WATERING MENU</h1>
      </motion.div>
      <motion.div
        className="mouth-watering-menu-items"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {RiceItems.map((item, index) => {
          return (
            <div key={index}>
              <FoodItems
                key={index}
                item_image={item.item_image}
                item_name={item.item_name}
                item_price={item.item_price}
              />
            </div>
          );
        })}
      </motion.div>
      <Link to="menu">
        <motion.div
          className="check-full-menu"
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -200 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Check Full Menu
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MouthWateringMenu;
