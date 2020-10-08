import React from "react";
import styled, { keyframes } from 'styled-components'


//Styled Components go here

//Header component goes here
const NasaHeader = (props) => {
    return(
        <div>
            <nav>
                <a href="./App.js">Home</a>
                <a href="https://apod.nasa.gov/apod/lib/about_apod.html" target="_blank">About</a>
                <a href="https://www.nasa.gov/" target="_blank">Main Page</a>
            </nav>
        </div>
    );
};


export default NasaHeader;