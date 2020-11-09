// import React from "react";
// import "../Style.css";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import image1 from "../../img/background check.jpg";
// import image2 from "../../img/background verification.jpg";
// import image3 from "../../img/contractor license.jpg";
// import image4 from "../../img/tenant verification.jpg";
// import image5 from "../../img/vehicle verification.jpg";

// export default function Slider() {
//   return (
//     <div className="App">
//       <AliceCarousel
//         dotsDisabled={false}
//         autoPlay={true}
//         duration={4000}
//         alice-carousel__prev-btn-wrapper={false}
//         mouseDragEnabled={false}
//       >
//         <img src={image1} className="sliderimg" alt="" />
//         <img src={image2} className="sliderimg" alt="" />
//         <img src={image3} className="sliderimg" alt="" />
//         <img src={image4} className="sliderimg" alt="" />
//         <img src={image5} className="sliderimg" alt="" />
//       </AliceCarousel>
//     </div>
//   );
// }
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
        animationSpeed={2000}
        autoPlay={3000}
        infinite={true}
        offset={0}
        itemWidth={1200}
        clickToChange
        centered
      >
        <img src={slider1} className="image-responsive" />
        <img src={slider2} className="image-responsive" />
        <img src={slider3} className="image-responsive" />
        <img src={slider4} className="image-responsive" />
        <img src={slider5} className="image-responsive" />
        <img src={slider6} className="image-responsive" />
      </Carousel>
    );
    return (
      <div _ngcontent-sc1="" id="container">
        <div className="responsive-slider">{sliderImage}</div>
      </div>
    );
  }
}
export default Slider;