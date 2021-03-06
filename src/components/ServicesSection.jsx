import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from "../img/home2.png"
// Import styles
import styled from 'styled-components'
import { About, Description, Image } from '../Style'

// import animation
import { motion } from 'framer-motion'
import { PhotoAnim, Fade } from '../Animation'
import UseScroll from './UseScroll'

const ServicesSection = () => {
    const [element, controls] = UseScroll()
    return (
        <Services variants={Fade} animate={controls} initial="hidden" ref={element} >
            <ServiceDescription>
                <h2>High <span>quality</span> services </h2>
                <Cards className="cards">
                    <Card className="card">
                        <div className="icon">
                            <motion.img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </ServiceDescription>
            <Image>
                <motion.img variants={PhotoAnim} src={home2} alt="" />
            </Image>
        </Services>
    )
}



const Services = styled(About)`
        background: royalblue;
        @media screen and (max-width: 862px){
        background: #222736;

    }
    @media screen and (max-width: 862px) {
            img{
                /* display : none; */
            }
            
        }
   
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const ServiceDescription = styled(Description)`
        order: 2;
        padding-left: 5rem;
        padding-right: 0;
        @media screen and (max-width: 862px) {
            padding: 2rem;
            z-index : 3
            
        }
    `
const Cards = styled.div`
        display: flex;
        flex-wrap: wrap;
`
const Card = styled.div`
        padding: 10px;
        @media screen and (max-width: 580px){
            width : 45%
        }
        @media screen and (max-width: 450px){
            width : 100%
        }
        p{
            padding: 1rem 0;
            font-size: 1.2rem;
            @media screen and (max-width: 580px){
                font-size: 1rem;
            }
        };
        .icon{
            display: flex;
            align-items: center;
            img{
                width : 2rem;
            }
            h3{
                padding: 0.7rem;
                margin-left: 1rem;
                background: white;
                color: #131313;
                border-radius: 3px;
                @media screen and (max-width: 580px){
                    padding: 0.4rem;
                    font-size: 1rem;
                    background: #23d997;
                }
            }
          

        }
`
export default ServicesSection