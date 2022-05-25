import React from 'react'
import home1 from "../img/home1.png"

// Importing styles
import { About, Description, Hide, Image } from '../Style'

const AboutSection = () => {
    return (
        <About >
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span>  </h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>contact us from any hotography and videography ideas that you have. We have professionals with amzing skills to help you achieve it </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>
    )
}

export default AboutSection