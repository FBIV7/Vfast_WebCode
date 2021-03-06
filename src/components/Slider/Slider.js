import React from "react";
import slider1 from "../../img/background check.jpg";
import slider2 from "../../img/background verification.jpg";
import slider3 from "../../img/contractor license.jpg";
import slider4 from "../../img/employee document check.jpg";
import slider5 from "../../img/tenant verification.jpg";
import slider6 from "../../img/vehicle verification.jpg";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

class Slider extends React.Component {
  render() {
    const sliderImage = (
      <Carousel
        slidesPerPage={1}
        slidesPerScroll={1}
        animationSpeed={3000}
        autoPlay={3000}
        infinite={true}
        offset={0}
        clickToChange
        centered
      >
        <img src={slider1} alt="img" className="image-responsive" />
        <img src={slider2} alt="img" className="image-responsive" />
        <img src={slider3} alt="img" className="image-responsive" />
        <img src={slider4} alt="img" className="image-responsive" />
        <img src={slider5} alt="img" className="image-responsive" />
        <img src={slider6} alt="img" className="image-responsive" />
      </Carousel>
    );
    return (
      <div id="container">
        <div className="responsive-slider">{sliderImage}</div>
      </div>
    );
  }
}
export default Slider;