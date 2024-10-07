import React from 'react'
import './ReservationPage.css'
import Reservation from '../../Components/Reservation/Reservation'
import TraditionalSriLankanDishes from '../../Components/TraditionalSriLankanDishes/TraditionalSriLankanDishes'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
const ReservationPage = () => {
  
  return (
    <motion.div className='reservation-page' initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}>
      <TraditionalSriLankanDishes />
      <Reservation />
    </motion.div>
  )
}

export default ReservationPage
