import React, { useContext } from "react";
import "./SearchContainer.css";
import search_icon from "../../Assets/Icons/search.png";
import { StoreContext } from "../../Context/Context";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SearchContainer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const { searchTerm, setSearchTerm } = useContext(StoreContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container" ref={ref}>
      <motion.div className="search-input"
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="What food are you craving? "
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={search_icon} alt="Search" />
      </motion.div>
    </div>
  );
};

export default SearchContainer;
