import React from 'react'
//import animations 
import { motion } from 'framer-motion'
import { PageAnimation } from '../Animation'

const ContactUs = () => {
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">ContactUs</motion.div>
  )
}

export default ContactUs