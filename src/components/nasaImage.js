import React from "react";
import styled from 'styled-components'

//Styled Components go here
const StyledBody = styled.div`
    color: white;
    padding: 0 2%;

    img{
        max-width: 80%;
        max-height: 80%;
    };
`

function NasaImage(props){
    //display array so we know what data we're working with
    console.log(props);
//build out the proper JSX for the page here
return <StyledBody> 
        <p>Date: {props.nasaData.date}</p>
            <h2>{props.nasaData.title}</h2>
                <h3>Copyright: {props.nasaData.copyright}</h3>
            <img className="APOD" src={props.nasaData.url} alt="Current APOD"/> 
        <p>Information: {props.nasaData.explanation}</p>
    </StyledBody>;
};

//maybe add a button so the information is hidden on load, but shows if they click a button

export default NasaImage;