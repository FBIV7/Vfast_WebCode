import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Body from "./components/Body/Body";
import Partnership from "./components/Partnership/Partnership";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Body />
        <Partnership />
        <Footer />
      </div>
    );
  }
}

export default App;
