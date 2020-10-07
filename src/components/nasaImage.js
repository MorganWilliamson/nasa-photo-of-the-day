import React from "react";

function NasaImage(props){
    console.log(props);
//build out the proper JSX for the page here
return <div> 
    {props.nasaData.url} 
    {props.nasaData.copyright} 
    {props.nasaData.date}
</div>;
};



export default NasaImage;