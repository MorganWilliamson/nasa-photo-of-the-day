import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaImage from "./components/nasaImage";

function App() {
//Create a slice of state for the page.
const [nasaData, setNasaData] = useState([]); 

//Create a function (axios) that fetches the data from the NASA API.
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    setNasaData(res.data)
  })
  .catch(err => {
    debugger
  })

}, [])

//This section should be everything returning/appending to the DOM? 
  return (
    <div className="App">
      <NasaImage nasaData={nasaData} />
    </div>
  );
}

export default App;
