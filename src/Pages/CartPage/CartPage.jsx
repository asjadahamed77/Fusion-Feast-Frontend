import React,{useEffect} from 'react'
import './CartPage.css'
import CartItems from '../../Components/Carttems/CartItems';
import {motion} from 'framer-motion'
const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <motion.div className='cart-page' initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}> 
      <CartItems />
    </motion.div>
  )
}

export default CartPage
