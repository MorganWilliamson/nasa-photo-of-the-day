import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaImage from "./components/nasaImage";

function App() {
//Create a slice of state for the page.
const [nasaData, setNasaData] = useState([]); 

//Create a function (axios) that fetches the data from the NASA API.

//Remember to un-comment this or the page won't work. 
// useEffect(() => {
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
//   .then(res => {
//     setNasaData(res.data)
//   })
//   .catch(err => {
//     console.log(err);
//   })

// }, [])

//This section should be everything returning/appending to the DOM? 
  return (
    <div className="App">
      <NasaImage nasaData={nasaData} />
    </div>
  );
}

export default App;


/* Ignore this. 
Base image URL: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
Image URL with 2012 date: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14'
*/