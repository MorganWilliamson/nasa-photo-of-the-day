import React from "react";
import styled from 'styled-components'


//Styled Components go here
const StyledHeader = styled.div`
    background-image: url("https://ak.picdn.net/shutterstock/videos/9651863/thumb/1.jpg");
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