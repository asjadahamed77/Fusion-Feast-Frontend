import React from 'react';
import './Category.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Category = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      className={`category ${props.isActive ? 'active' : ''}`}
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -100 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="category-image">
        <img src={props.category_image} alt="" />
      </div>
      <div className="category-name">
        <h4>{props.item_category}</h4>
      </div>
    </motion.div>
  );
};

export default Category;
