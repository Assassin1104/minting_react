import React from 'react';
import "./newindex.scss";
import { useRef, useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import Image1 from '../../../../assets/images/tokens/1.png'
import Image2 from '../../../../assets/images/tokens/2.png'
import Image3 from '../../../../assets/images/tokens/3.png'
import Image4 from '../../../../assets/images/tokens/4.png'
import Image5 from '../../../../assets/images/tokens/5.png'
import Image6 from '../../../../assets/images/tokens/6.png'
import Outerborder from '../../../../assets/images/pictures/carrousel/border.png';

export default function SingleCarousel(): JSX.Element {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  
  const configs = config.gentle;

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="6" />
    }
  ]
  return (
    <>
    <div
      className="metaverse"
    >
      <div className="homenew" style={{ display: "flex" }}>
        <div className="home-image none-padding">
          <div className="child-home-image" >
            <div className="sub-home-image none-margin" >
              <div className="carousel-border single"></div>
              <img src={Outerborder} alt="outerborder" className="outer-border single-border" />
              <div style={{ width: "50%", height: "250px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    autoPlay={true}
                    interval={2}
                    slides={slides}
                    goToSlide={goToSlide}
                    showNavigation={showArrows}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
