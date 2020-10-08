import React from "react";
import styled, { keyframes } from 'styled-components'


//Styled Components go here
const StyledHeader = styled.div`
    background: black;
    color: white;
    height: 8vh;

    a{
        color: white;
        text-decoration: none;
    };
    nav{
        padding-top: 2%;
        display: flex;
        justify-content: space-evenly;
    };
`
//Header component goes here
const NasaHeader = (props) => {
    return(
        <StyledHeader>
            <nav>
                <a href="./App.js">Home</a>
                <a href="https://apod.nasa.gov/apod/lib/about_apod.html" target="_blank">About</a>
                <a href="https://www.nasa.gov/" target="_blank">Main Page</a>
            </nav>
        </StyledHeader>
    );
};


export default NasaHeader;