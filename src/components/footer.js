import React from "react";
import styled from 'styled-components'

//Styled Components go here
const StyledFooter = styled.div`
    text-align: center;
    background: black;
    color: white;
    height: 20vh;
    padding-bottom: 2%;

    img{
        max-height: 80%;
        max-width: 80%;
    };
`
//Footer component goes here
const NasaFooter = (props) => {
    return(
        <StyledFooter>
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA logo"/>
            <p>© 2020 National Aeronautics and Space Administration</p>
        </StyledFooter>
    );
}


export default NasaFooter;