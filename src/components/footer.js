import React from "react";
import styled from 'styled-components'

//Styled Components go here
const StyledFooter = styled.div`
    text-align: center;
    background: black;
    color: white;
    height: 20vh;

    img{
        padding-top: 3%;
        max-height: 40%;
        max-width: 40%;
    };
`
//Footer component goes here
const NasaFooter = (props) => {
    return(
        <StyledFooter>
            <img src="https://lh3.googleusercontent.com/proxy/sWviIUZzi70rrMpPasTe4WhggN3Kt6dw1MoypyQDsioIVkZt6jSp1lhYmrKA3vdyJGeuR2c4Y9SCI9L5Fq3ORL13ZosA1rI2PJf3C5KFDK6LS6RXk7Pq6i2TX6KZPzrCaD4" alt="NASA logo"/>
            <p>National Aeronautics and Space Administration</p>
        </StyledFooter>
    );
}


export default NasaFooter;