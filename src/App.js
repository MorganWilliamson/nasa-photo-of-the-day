import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaImage from "./components/nasaImage";

function App() {
//Create "slices of state" for each component that we're using.
const [nasaData, setNasaData] = useState([]); 

//Create a function (axios) that actually fetches the data from the NASA API?
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    setNasaData(res.data)
    debugger
  })
  .catch(err => {
    debugger
  })

}, [])

//Declare what the individual states/components are doing, through an appropriate function (or functions?)?


//This section should be everything returning/appending to the DOM? 
  return (
    <div className="App">
      <NasaImage nasaData={nasaData} />
    </div>
  );
}

export default App;
