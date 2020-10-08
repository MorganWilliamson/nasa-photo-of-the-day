import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaHeader from "./components/header";
import NasaImage from "./components/nasaImage";
import NasaFooter from "./components/footer"

function App() {
//Create a slice of state for the page.
const [nasaData, setNasaData] = useState([]); 

//Create a function (axios) that fetches the data from the NASA API.

//Remember to un-comment this or the page won't work. 
useEffect(() => {
  axios.get('url')
  .then(res => {
    setNasaData(res.data)
  })
  .catch(err => {
    console.log(err);
  })

}, [])

//This section puts the Header, Body (NasaImage), and Footer components together.
  return (
    <div className="App">
      <NasaHeader />
      <NasaImage nasaData={nasaData} />
      <NasaFooter />
    </div>
  );
}

export default App;


/* Ignore this. 
Base image URL: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
Image URL with 2012 date: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14'
*/