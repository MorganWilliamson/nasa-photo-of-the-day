import React from "react";
import styled, { keyframes } from 'styled-components'

//Styled Components go here
const StyledFooter = styled.div`
    text-align: center;
    background: black;
    color: white;
    height: 20vh;
`
//Footer component goes here
const NasaFooter = (props) => {
    return(
        <StyledFooter>
            <p>Footer</p>
        </StyledFooter>
    );
}


export default NasaFooter;