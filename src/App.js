import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Date from "./components/date";
import Copyright from "./components/copyright";
import Photo from "./components/photo";
import Info from "./components/info";

function App() {
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [copyright, setCopyright] = useState("");
const [imageURL, setImageURL] = useState("");
const [info, setInfo] = useState("");

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
