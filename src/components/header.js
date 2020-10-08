import React from "react";
import styled from 'styled-components'


//Styled Components go here
const StyledHeader = styled.div`
    background-image: url("https://ak.picdn.net/shutterstock/videos/9651863/thumb/1.jpg");
    color: white;
    height: 7vh;
    padding-top: 2%;

    a{
        color: white;
        text-decoration: none;

        &:hover{
            text-shadow: 8px 8px 10px dodgerblue;
        }
    };
    nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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