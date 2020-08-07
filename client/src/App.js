import React, { useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home/Home';




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
      <Home />
    </div>
  );
}

export default App;
