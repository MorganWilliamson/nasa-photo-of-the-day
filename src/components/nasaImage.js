import React from "react";
import styled from 'styled-components'

//Styled Components go here
const StyledBody = styled.div`
    color: white;
    padding: 0 2%;

    img{
        box-shadow: 10px, 10px, 5px, #f4f4f4;
    };
`

function NasaImage(props){
    //display array so we know what data we're working with
    console.log(props);
//build out the proper JSX for the page here
return <StyledBody> 
        <p>Date: {props.nasaData.date}</p>
            <h2>Title: {props.nasaData.title}</h2>
                <h2>Copyright: {props.nasaData.copyright}</h2>
            <img src={props.nasaData.url} alt="Current APOD"/> 
        <p>Information: {props.nasaData.explanation}</p>
    </StyledBody>;
};

//maybe add a button so the information is hidden on load, but shows if they click a button

export default NasaImage;