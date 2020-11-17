import React, {Component} from "react";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Body from "./components/Body/Body";
import Partnership from "./components/Partnership/Partnership";
import Nav from './components/Navbar/Nav'
class Wrapper extends Component {
    render(){
        return(
           
            <div>
            <Nav />
            <Slider />
            <Body />
            <Partnership />
            <Footer />
            </div>
           

        )
    }
}
export default Wrapper;