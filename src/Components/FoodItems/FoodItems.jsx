import React, { useState, useContext } from 'react';
import './FoodItems.css';
import { StoreContext } from '../../Context/Context';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FoodItems = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const { addToCart } = useContext(StoreContext);
  const [showCountItems, setShowCountItems] = useState(false);
  const [count, setCount] = useState(1);

  const handleToggleCountItems = () => {
    setShowCountItems(true);
    addToCart(props.item_name, 1);
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
    addToCart(props.item_name, 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setShowCountItems(false);
      setCount(1);
    }
  };

  return (
    <motion.div className='food-items' ref={ref}
    initial={{ opacity: 0, y: 0 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -50 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 1 }}
    >
      <div className="food-items-image">
        <img src={props.item_image} alt={props.item_name} />
      </div>
      <div className="food-items-bottom">
        <div className="food-items-bottom-name-price">
          <h4>{props.item_name}</h4>
          <p>Rs. {props.item_price}</p>
        </div>
        <div className="food-items-bottom-count">
          {!showCountItems && <button onClick={handleToggleCountItems}>+</button>}
          {showCountItems && (
            <div className="food-items-count-items">
              <div className="food-items-count-items-decrease" onClick={handleDecreaseCount}>-</div>
              <div className="food-items-count-items-count">{count}</div>
              <div className="food-items-count-items-increase" onClick={handleIncreaseCount}>+</div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItems;
