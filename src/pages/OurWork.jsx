import React from 'react'
// Styled comonent
import styled from 'styled-components'
// Images
import athlete from "../img/athlete-small.png"
import goodtimes from "../img/goodtimes-small.png"
import theracer from "../img/theracer-small.png"
import { Link } from 'react-router-dom'

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h1>The Athlete</h1>
        <div className="line"></div>
        <Link to="/work/the-athlete" > <img src={athlete} alt="" /> </Link>
      </Movie>
      <Movie>
        <h1>The Racer</h1>
        <div className="line"></div>
        <Link to="/work/the-racer" > <img src={theracer} alt="" /> </Link>
      </Movie>
      <Movie>
        <h1>Good Times</h1>
        <div className="line"></div>
        <Link to="/work/good-times" > <img src={goodtimes} alt="" /> </Link>
      </Movie>
    </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;
  h2{
    padding: 1rem 0;
  }
`

const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
export default OurWork