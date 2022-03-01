import React from 'react';
import "./newindex.scss";
import { useRef, useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import Image1 from '../../../../assets/images/pictures/gaming/1.png';
import Image2 from '../../../../assets/images/pictures/gaming/2.png';
import Image3 from '../../../../assets/images/pictures/gaming/3.png';
import Image4 from '../../../../assets/images/pictures/gaming/4.png';
import Image5 from '../../../../assets/images/pictures/gaming/5.png';
import Image6 from '../../../../assets/images/pictures/gaming/6.png';
import Image7 from '../../../../assets/images/pictures/gaming/7.png';
import Image8 from '../../../../assets/images/pictures/gaming/8.png';
import Image9 from '../../../../assets/images/pictures/gaming/9.png';
import Image10 from '../../../../assets/images/pictures/gaming/10.png';
import Image11 from '../../../../assets/images/pictures/gaming/11.png';
import Image12 from '../../../../assets/images/pictures/gaming/12.png';
import Image13 from '../../../../assets/images/pictures/gaming/13.png';
import Image14 from '../../../../assets/images/pictures/gaming/14.png';
import Image15 from '../../../../assets/images/pictures/gaming/15.png';
import Image16 from '../../../../assets/images/pictures/gaming/16.png';
import Image17 from '../../../../assets/images/pictures/gaming/17.png';
import Image18 from '../../../../assets/images/pictures/gaming/18.png';
import Image19 from '../../../../assets/images/pictures/gaming/19.png';
import Image20 from '../../../../assets/images/pictures/gaming/20.png';


import Image111 from '../../../../assets/images/pictures/metaverse/1.png';
import Image112 from '../../../../assets/images/pictures/metaverse/2.png';
import Image113 from '../../../../assets/images/pictures/metaverse/3.png';
import Image114 from '../../../../assets/images/pictures/metaverse/4.png';
import Image115 from '../../../../assets/images/pictures/metaverse/5.png';
import Image116 from '../../../../assets/images/pictures/metaverse/6.png';
import Image117 from '../../../../assets/images/pictures/metaverse/7.png';
import Image118 from '../../../../assets/images/pictures/metaverse/8.png';
import Image119 from '../../../../assets/images/pictures/metaverse/9.png';
import Image1110 from '../../../../assets/images/pictures/metaverse/10.png';
import Image1111 from '../../../../assets/images/pictures/metaverse/11.png';
import Image1112 from '../../../../assets/images/pictures/metaverse/12.png';
import Image1113 from '../../../../assets/images/pictures/metaverse/13.png';
import Image1114 from '../../../../assets/images/pictures/metaverse/14.png';
import Image1115 from '../../../../assets/images/pictures/metaverse/15.png';
import Outerborder from '../../../../assets/images/pictures/carrousel/border.png';


export default function Metaverse(): JSX.Element {

  const [goToSlides, setGoToSlides] = useState(0);
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);

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
    },
    {
      key: uuidv4(),
      content: <img src={Image7} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={Image8} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img src={Image9} alt="9" />
    },
    {
      key: uuidv4(),
      content: <img src={Image10} alt="10" />
    },
    {
      key: uuidv4(),
      content: <img src={Image11} alt="11" />
    },
    {
      key: uuidv4(),
      content: <img src={Image12} alt="12" />
    },
    {
      key: uuidv4(),
      content: <img src={Image13} alt="13" />
    },
    {
      key: uuidv4(),
      content: <img src={Image14} alt="14" />
    },
    {
      key: uuidv4(),
      content: <img src={Image15} alt="15" />
    },
    {
      key: uuidv4(),
      content: <img src={Image16} alt="16" />
    },
    {
      key: uuidv4(),
      content: <img src={Image17} alt="17" />
    },
    {
      key: uuidv4(),
      content: <img src={Image18} alt="18" />
    },
    {
      key: uuidv4(),
      content: <img src={Image19} alt="19" />
    },
    {
      key: uuidv4(),
      content: <img src={Image20} alt="20" />
    }
  ]

  const slides1 = [
    {
      key: uuidv4(),
      content: <img src={Image111} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image112} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image113} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image114} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image115} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image116} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={Image117} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={Image118} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img src={Image119} alt="9" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1110} alt="10" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1111} alt="11" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1112} alt="12" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1113} alt="13" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1114} alt="14" />
    },
    {
      key: uuidv4(),
      content: <img src={Image1115} alt="15" />
    },
  ]

  return (
    <>
     <p className="metaverse-title" id="gaming">Gaming and Metaverse</p>
     <div className="game-title">
        <p>Welcome to the Mutant Ether Babies Gaming and Metaverse section.</p>
        <p>All updates regarding our gaming and metaverse will be uploaded in this section of the website.</p>
        <p>These are scenes from our development team in respect to what we will launch for our community members sooner after we sell out 100% our MEBs Collection.</p>
        <p>STAY TUNNED AND BE INFORMED - JOIN THE NEXT LEVEL NFT TEAM.</p>
     </div>
    <div
      className="metaverse"
    >
      <div className="homenew" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <img src={Outerborder} alt="outerborder" className="outer-border" />
              <div style={{ width: "50%", height: "280px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides}
                    autoPlay={true}
                    interval={2}
                    goToSlide={goToSlides}
                    showNavigation={true}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  <div
                    onClick={() => {console.log("slides")
                      setGoToSlides(goToSlides - 1);
                    }}
                  >
                    ←
                  </div>
                  <p>Upcoming Subway Game</p>
                  <div
                    onClick={() => {
                      setGoToSlides(goToSlides + 1);
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homenew" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <img src={Outerborder} alt="outerborder" className="outer-border" />
              <div style={{ width: "50%", height: "280px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides1}
                    autoPlay={true}
                    interval={2}
                    goToSlide={goToSlide}
                    showNavigation={true}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  <div
                    onClick={() => {
                      console.log("gotoslide")
                      setGoToSlide(goToSlide - 1);
                    }}
                  >
                    ←
                  </div>
                  <p>Upcoming Metaverse Gallery</p>
                  <div
                    onClick={() => {
                      setGoToSlide(goToSlide + 1);
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}