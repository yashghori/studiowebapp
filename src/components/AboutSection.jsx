import React from 'react'
import home1 from "../img/home1.png"

// Importing styles
import styled from "styled-components"

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

const About = styled.div`
    display: flex;
    /* max-height: 100vh; */
    min-height: 80vh;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
`
const Description = styled.div`
    font-weight: lighter;
    padding-right: 5rem;
    flex: 1;
    h2{
        font-weight: lighter;
    }
`
const Image = styled.div`
    overflow: hidden;
    flex: 1;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;

    }
`
const Hide = styled.div`
 overflow: hidden;
`
export default AboutSection