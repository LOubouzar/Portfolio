import React, { Component } from 'react';
import About from "./components/about";
import Card from "./components/card";
import Contact from "./components/contact";
// import Hero from "./components/hero";
// import Nav from "./components/nav";
import Wrapper from "./components/wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Wrapper />
      <About />
      <Card />
      <Contact />
      </div>
    );
}}

export default App;
