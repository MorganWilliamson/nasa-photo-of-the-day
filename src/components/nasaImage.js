import React from "react";
import styled, { keyframes } from 'styled-components'

function NasaImage(props){
    //display array so we know what data we're working with
    console.log(props);
//build out the proper JSX for the page here
return <div className="NIContainer"> 
        <p className="NIDate">Date: {props.nasaData.date}</p>
            <h2 className="NITitle">Tite: {props.nasaData.title}</h2>
                <h2 className="NICopyright">Taken by: {props.nasaData.copyright}</h2>
            <img className="NIImage" src={props.nasaData.url} alt="Current APOD"/> 
        <p className="NIDescrip">Information: {props.nasaData.explanation}</p>
    </div>;
};

//maybe add a button so the information is hidden on load, but shows if they click a button

export default NasaImage;