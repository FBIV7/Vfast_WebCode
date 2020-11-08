import React from "react";
import "../Style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../img/background check.jpg";
import image2 from "../../img/background verification.jpg";
import image3 from "../../img/contractor license.jpg";
import image4 from "../../img/tenant verification.jpg";
import image5 from "../../img/vehicle verification.jpg";

export default function Slider() {
  return (
    <div className="App">
      <AliceCarousel
        dotsDisabled={false}
        autoPlay={true}
        duration={2500}
        alice-carousel__prev-btn-wrapper={false}
        mouseDragEnabled={false}
      >
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
        <img src={image5} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
