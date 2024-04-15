import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import './App.css';
function App() {
  console.log("App");

  return (
    <Router>
      <div>
        <Navbar />
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </div>
    </Router>
  );
}

export default App;
