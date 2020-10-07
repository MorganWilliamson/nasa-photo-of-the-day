import React from "react";

function NasaImage(props){
    console.log(props);
//build out the proper JSX for the page here
return <div> 
    <p>{props.nasaData.date}</p>
    <h2>{props.nasaData.title}</h2>
    <h2>{props.nasaData.copyright}</h2>
    <img src={props.nasaData.url} alt="Current APOD"/> 
    <p>{props.nasaData.explanation}</p>
    </div>;
};



export default NasaImage;