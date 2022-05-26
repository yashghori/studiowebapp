import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MovieState } from "../movieState"
//import animations 
import { motion } from 'framer-motion'
import { PageAnimation } from '../Animation'


const MovieDetail = () => {
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    const { url } = useParams()
    useEffect(() => {
        const currentMovie = movies.filter((movieState) => {
            return movieState.url === url
        })
        setMovie(currentMovie[0]);


    }, [url, movies])


    return (
        <>
            {movie && (
                <Details variants={PageAnimation} initial="hidden" animate="show" exit="exit" >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => {
                            return <Award key={award.title} title={award.title} description={award.description} />

                        })}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}
const Details = styled(motion.div)`
color: white;   
`
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translatey(-50%);
    }
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem;
  align-items: center;
  justify-content: space-around;
`

const StyledAward = styled.div`
padding: 5rem;
h3{
    font-size: 2rem;
}
.line{
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
}
`
const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`
//Award component
export const Award = ({ title, description }) => {
    return (
        <>
            <StyledAward>
                <h3>{title}</h3>
                <div className="line"></div>
                <p>{description}</p>

            </StyledAward>
        </>
    )
}
export default MovieDetail