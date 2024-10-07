import React from 'react'
import './WhyFusion.css'
import myFusionImage from '../../Assets/WhyFusion/WhyFusionImage.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const WhyFusion = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });
  return (
    <div className='why-fusion' ref={ref}>
      <motion.div className="why-fusion-left" 
       initial={{ opacity: 0, x: 0 }}
       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: -200 }}
       exit={{ opacity: 0, x: 0 }}
       transition={{ duration: 1.5 }}
      >
        <p>Two simple reasons. One simple Answer.</p>
        <h2>Why FUSION FEAST?</h2>
        <span>Designed to be the culinary epicenter, we uphold the traditions of the local household while showcasing the rich flavors of Sri Lanka using a bounty of fresh, seasonal ingredients. We take extra care to deliver fresh farm produce, transforming it into a classy local table cuisine with an emphasis on seasonal, locally sourced ingredients and the freshest seafood.</span>
        <button>Learn more</button>
      </motion.div>
      <motion.div className="why-fusion-right"
      initial={{ opacity: 0, x: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, x: 200 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 1.5 }}
      >
        <img src={myFusionImage} alt="" />
      </motion.div>
    </div>
  )
}

export default WhyFusion
