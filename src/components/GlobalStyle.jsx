
import { createGlobalStyle } from 'styled-components'

import React from 'react'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }
    
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border:  2px solid #23d997;
        background: transparent;
        color: white;
        outline: none;
        transition: all 0.3s ease;
        font-family: 'Inter', sans-serif;
        @media screen and (max-width: 1230px) {
            font-size : 0.9rem;
            padding: 0.5rem 1rem;
        }
        &:hover{
            background: #23d997;
            color: white;
        }
   
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        @media screen and (max-width: 1230px) {
            font-size : 3rem;
        }
        @media screen and (max-width: 982px) {
            font-size : 2.5rem;
        }
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
        @media screen and (max-width: 1230px) {
            font-size : 1rem;
        }
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1rem;
        @media screen and (max-width: 982px) {
            font-size : 0.8rem;
        }
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        @media screen and (max-width: 1230px) {
            padding: 3rem 0;
            font-size : 1rem;
        }
        @media screen and (max-width: 982px) {
            padding: 1rem 0;
            //font-size : 1rem;
        }
    }
`
export default GlobalStyle;