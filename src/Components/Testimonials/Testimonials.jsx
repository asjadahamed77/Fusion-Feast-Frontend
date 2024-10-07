import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import reviews from '../../Assets/Testimonials';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

  useEffect(() => {
    const updateVisibleReviewsCount = () => {
      if (window.innerWidth <= 426) {
        setVisibleReviewsCount(3);
      } else if (window.innerWidth <= 769) {
        setVisibleReviewsCount(4);
      } else {
        setVisibleReviewsCount(3);
      }
    };

    window.addEventListener('resize', updateVisibleReviewsCount);
    updateVisibleReviewsCount();

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', updateVisibleReviewsCount);
      clearInterval(interval);
    };
  }, []);

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < visibleReviewsCount; i++) {
      visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visibleReviews;
  };

  return (
    <div className='testimonials' ref={ref}>
      <motion.div className="testimonials-text"
       initial={{ opacity: 0, y: 0 }}
       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
       exit={{ opacity: 0, y: 0 }}
       transition={{ duration: 1 }}
      >
        <p>testimonials</p>
        <h1>WHAT OUR CUSTOMERS ARE RAVING ABOUT!</h1>
      </motion.div>
      <motion.div className="testimonials-containers"
       initial={{ opacity: 0, y: 0 }}
       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
       exit={{ opacity: 0, y: 0 }}
       transition={{ duration: 1 }}
      >
        {getVisibleReviews().map((review, index) => (
          <div key={index} className={`testimonial ${index === Math.floor(visibleReviewsCount / 2) ? 'testimonial-scaled' : ''}`}>
            <div className="testimonial-image-name">
              <div className="testimonial-image">
                <img src={review.reviewer_image} alt={review.reviewer_name} />
              </div>
              <div className="testimonial-name">
                <h4>{review.reviewer_name}</h4>
                <p>{review.reviewer_city}</p>
              </div>
            </div>
            <div className="testimonial-review">
              <span>{review.review_about}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
