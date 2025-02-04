import Signup from "./Pages/Signup"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
 
  // async  function handleApi() {
  //   try {
  //     const data = await fetch('http://localhost:5000/api/signup', {
  //       method: "GET",
  //       headers: {"Content-Type": "application/json"}
  //     })
  //     const response  = await data.json()
  //     console.log(response);
      
  //   } catch (error) {
  //       console.log(error);
        
  //   }
  // }

  return (
    <>
    <Router>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<Signup/>} />
      
    </Routes>
    </Router>
    </>
  )
}

export default App
