import React from 'react'
import home1 from "../img/home1.png"
import Wave from './Wave'
// Importing styles
import { About, Description, Hide, Image } from '../Style'
// framer motion
import { motion } from 'framer-motion'
import { TitleAnim, Fade, PhotoAnim } from '../Animation'

const AboutSection = () => {
    return (
        <About >
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={TitleAnim}  >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim} >your <span>dreams</span>  </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim} >come true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={Fade} >contact us from any hotography and videography ideas that you have. We have professionals with amzing skills to help you achieve it </motion.p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <motion.img variants={PhotoAnim} initial="hidden" animate="show" src={home1} alt="" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection