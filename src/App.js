import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SME from "./Page/SME/SME";
import CryptoExchange from "./Page/CryptoExchange/CryptoExchange";
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/cryptoexchange"><CryptoExchange /></Route>
          <Route path="/sme"><SME /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
