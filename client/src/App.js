import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing.js";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
