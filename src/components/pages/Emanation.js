import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'

function Emanation() {
    return (
        <div class="carousel-wrapper">
            <Carousel  infiniteLoop autoPlay 
            showArrows={false}
            showIndicators={false}
            showStatus={false}>
                <div className ="image">
                    <img src="./images/1.jpg" />
                </div>
                <div className ="image">
                    <img src="./images/2.jpg" />
                </div>
                <div className ="image">
                    <img src="./images/3.jpg" />
                </div>
            </Carousel>
        </div>

        
    )
}

export default Emanation
