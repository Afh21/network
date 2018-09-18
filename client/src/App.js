import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing.js";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utilities/setToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { Provider } from "react-redux";
import store from "./store";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTIme = Date.now() / 1000;
  if (decoded.exp < currentTIme) {
    // Logout user
    store.dispatch(logoutUser());

    // Clear current profile
    // Redirect to login

    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
