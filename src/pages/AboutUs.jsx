import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
//import animations 
import { motion } from 'framer-motion'
import { PageAnimation } from '../Animation'


const AboutUs = () => {
    return (
        <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit" >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs