import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch, Route, Redirect} from "react-router-dom"
import About from "./About";
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar"
import './App.css';
import "./index.css";
import Fotter from "./Fotter"

import Home from "./Home"

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Fotter />
     
    </div>
  );
}

export default App;
