import React from 'react';
import "./index.scss";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import Image1 from '../../../../assets/images/tokens/1.jpg'
import Image2 from '../../../../assets/images/tokens/2.jpg'
import Image3 from '../../../../assets/images/tokens/3.jpg'
import Image4 from '../../../../assets/images/tokens/4.jpg'
import Image5 from '../../../../assets/images/tokens/5.jpg'
import Image6 from '../../../../assets/images/tokens/6.jpg'


export default function Apeintosh(): JSX.Element {

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
  const [date, setDate] = useState(new Date().getHours());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    var timerID = setInterval(() => plus(), 2000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date().getHours());
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
    setDay(new Date().getDate());
  }

  function plus() {
    setGoToSlide(goToSlide + 1);
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const converter = (hours: number) => {
    if (hours > 12) {
      return hours - 12 + " P.M. EST Time";
    } else if (hours < 12) {
      return hours + " A.M. EST Time";
    }
  }
  return (
    <div
      className="apeintosh"
    >
      <div className="homepages" style={{ display: "flex" }}>
        <div className="home-image">
        </div>
        <div className="home-titles">
          <div className="children-home-title">
            <div className="firstline">Mutant Ether Babies</div>
            <div className="description">10,000 Out Mutant Ether Babies are on the run on Ethereum Chain. </div>
            <div className="timewrap" style={{ color: 'white' }}>
              <p>{monthNames[month]} {day} date {converter(date)}</p>
              <div className="current-time">{ }</div>
            </div>
            <p className="forthline">NFT collection Game - Metaverse</p>
            <div className="stages">
              <p className="">Minted Mebs : <span>0</span></p>
              <p className="">Available Mebs : <span>10,000</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
