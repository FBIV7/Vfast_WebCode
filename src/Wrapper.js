import React, { Component } from "react";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Body from "./components/Body/Body";
import Partnership from "./components/Partnership/Partnership";
import Nav from "./components/Navbar/Nav";
// import Vission from "./components/Navbar/Vission";
// import WhyUs from "./components/WhyUs"
class Wrapper extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Switch> */}
            <Nav />
            <Slider />
            <Body />
            <Partnership />
            <Footer />
      
        ,
      </div>
    );
  }
}
export default Wrapper;
