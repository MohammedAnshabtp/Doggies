import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic from "../assets/images/1.jpg";
import pic1 from "../assets/images/2.jpg";
import pic2 from "../assets/images/3.webp";

function Silder() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div style={{color:"#2c2a2a",}}>
            <Slider {...settings}>
            <div>
                <img src={pic} width="100%"  alt=''/>
            </div>
            <div>
                <img src={pic1} width="100%"  height="600px" alt=''/>  
            </div>
            <div>
                <img src={pic2} width="100%" height="600px"   alt=''/>
            </div>
            </Slider>
        </div>
    )
}

export default Silder;

