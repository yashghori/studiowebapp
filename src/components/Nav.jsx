import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <StyledNav>
                <h1><a id='logo' href="#" >Capture </a></h1>
                <UL>
                    <li><NavLink to="/">1. About US</NavLink></li>
                    <li><NavLink to="/work">2. Our Work</NavLink></li>
                    <li><NavLink to="/contact">3. Contact US</NavLink></li>
                </UL>
            </StyledNav>
        </div>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    background-color: #282828;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    a{
        color: white;
        text-decoration: none;
    }
    #logo{
        font-family: "Lobster", "cursive";
        font-size: 1.5rem;
        font-weight: lighter;
    }
`
const UL = styled.nav`
    display: flex;
    align-items: center;
    list-style: none;
    li{
        padding-left: 2rem;
        position: relative;
    }


`

export default Nav