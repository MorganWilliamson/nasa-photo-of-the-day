import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Date from "./components/date";
import Copyright from "./components/copyright";
import Photo from "./components/photo";
import Info from "./components/info";

function App() {
//Create "slices of state" for each component that we're using.
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [copyright, setCopyright] = useState("");
const [imageURL, setImageURL] = useState("");
const [info, setInfo] = useState("");

//Create a function (axios) that actually fetches the data from the NASA API?


//Declare what the individual states/components are doing, through an appropriate function (or functions?)?


//This section should be everything returning/appending to the DOM? 
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
