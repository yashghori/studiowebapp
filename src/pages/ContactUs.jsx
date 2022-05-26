import React from 'react'
//import animations 
import { motion } from 'framer-motion'
import { PageAnimation, TitleAnim } from '../Animation'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'

const ContactUs = () => {
  return (
    <Contact variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <Title>
        <Hide>
          <motion.h2 variants={TitleAnim} >Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </Contact>
  )
}
const Contact = styled(motion.div)` 
  padding : 5rem;
  color : grey;
  min-height: 90vh;
  width: 100%;
  @media screen and (max-width: 500px){
    padding: 2rem;
  }
`
const Title = styled.div`
  margin-bottom: 5rem;
  color: grey;
  @media screen and (max-width: 500px){
    margin-bottom: 2rem;

  }
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media screen and (max-width: 660px){
    width: 1.5rem;
  height: 1.5rem;
  }
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
  }
  @media screen and (max-width: 660px){
    h2{
    margin: 1.5rem;
    font-size: 1rem;
  }
  }
`

export default ContactUs;