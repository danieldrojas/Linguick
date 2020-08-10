import React, { useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home/Home';
import GameTest from "./gameTest"
import { Router } from 'react-router-dom';




function App() {



  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log("Testing backend sending data", res.data)
      }).catch((err) => {
        console.log(err)
      })

  })

  return (
    <div>

      <GameTest/>

      
    </div>
  );
}

export default App;
