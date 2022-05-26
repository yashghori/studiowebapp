import React from 'react'
// Styled comonent
import styled from 'styled-components'
// Images
import athlete from "../img/athlete-small.png"
import goodtimes from "../img/goodtimes-small.png"
import theracer from "../img/theracer-small.png"
import { Link } from 'react-router-dom'
//import animations 
import { motion } from 'framer-motion'
import { PageAnimation, Fade, PhotoAnim, LineAnim, FrameAnim, ContainerFrameAnim } from '../Animation'
import UseScroll from '../components/UseScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
  const [element, controls] = UseScroll()
  const [element2, controls2] = UseScroll()
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit" >
      <motion.div variants={ContainerFrameAnim} >
        <Frame1 variants={FrameAnim} ></Frame1>
        <Frame2 variants={FrameAnim} ></Frame2>
        <Frame3 variants={FrameAnim} ></Frame3>
        <Frame4 variants={FrameAnim} ></Frame4>
      </motion.div>
      <Work>
        <Movie>
          <motion.h2 variants={Fade} >The Athlete</motion.h2>
          <motion.div variants={LineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete" > <HideOverflow><motion.img variants={PhotoAnim} src={athlete} alt="" /> </HideOverflow> </Link>
        </Movie>
        <Movie ref={element} variants={Fade} animate={controls} initial="hidden" >
          <motion.h2 variants={Fade} >The Racer</motion.h2>
          <motion.div variants={LineAnim} className="line"></motion.div>
          <Link to="/work/the-racer" ><HideOverflow> <motion.img variants={PhotoAnim} src={theracer} alt="" /></HideOverflow> </Link>
        </Movie>
        <Movie ref={element2} variants={Fade} animate={controls2} initial="hidden">
          <motion.h2 variants={Fade} >Good Times</motion.h2>
          <motion.div variants={LineAnim} className="line"></motion.div>
          <Link to="/work/good-times" > <HideOverflow> <motion.img PhotoAnim={PhotoAnim} src={goodtimes} alt="" /> </HideOverflow> </Link>
        </Movie>
      </Work>
      <ScrollTop />
    </motion.div>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;
  @media screen and (max-width: 862px){
    padding: 2rem;

  }
  h2{
    padding: 1rem 0;
    color : grey
  }
`
const HideOverflow = styled.div`
  overflow: hidden;
`

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  @media screen and (max-width: 862px){
    padding-bottom: 5rem;
  }
  .line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Frame1 = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 0;
  background: #fffebf ;
  z-index: 2;
  width: 100%;
  height: 100vh;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb ;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff ;
`
const Frame4 = styled(Frame1)`
  background: #8effa0 ;
`
export default OurWork