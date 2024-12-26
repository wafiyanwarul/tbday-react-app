import React from 'react'
import { motion } from 'framer-motion'
import './LandingPage.css'
import cakeImg from '../assets/birthday-cake.png'

const LandingPage = ({ onNext }) => {
  return (
    <motion.div
      className='landing-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Selamat Ulang Tahun!</h2>
      <motion.img
        src={cakeImg}
        alt='Birthday Cake'
        className="birthday-cake"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <button onClick={onNext} className='next-button'>
        Klik Tombol ini yaa 🎁
      </button>
    </motion.div>
  )
}

export default LandingPage
