import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SME from "./Page/SME/SME";
import cryptoExchange from "./Page/CryptoExchange/CryptoExchange";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/cryptoExchange" element={<cryptoExchange/>} />
          <Route path="/SME" element={<SME/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
