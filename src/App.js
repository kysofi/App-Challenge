import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons.js";

function App() {
  return (
    <div className="App">
      {/* Header */}

      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            {" "}
            <h1> I am the chatpage</h1>
          </Route>
          <Route path="/">
            {" "}
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>{" "}
        {/* Tinder cards */}
        {/* Buttons below tinder cards */}
        {/* Chats screen */}
        {/* Individual chats screen */}
      </Router>
    </div>
  );
}

export default App;
