import React from 'react';
import "./index.scss";
import { useMediaQuery } from "react-responsive";

import SingleCarousel from '../../../apeintosh/SingleCarousel';

export default function About(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <>
      <p id="about-title" className="about-title">ABOUT</p>
      <div id="about" className="hp-about" data-aos="fade-up">
        <div className="hp-a-content">
          <p className="sub-title">10,000 MUTANT ETHER BABIES ARE ON THE RUN!</p>
          <p>
            If you see them please catch them as they are ruthless, mean and cruel. Some of their crimes include:
          </p>
          <ul>
            <li><p>Breaking spaghetti in half</p></li>
            <li><p>Pieing on the birthday boy</p></li>
            <li><p>Toilet papering neighbors' house</p></li>
            <li><p>Challenge others to eat tide pods</p></li>
            <li><p>Putting pineapple on pizza</p></li>
            <li><p>Buy all even number seats in the Cinema at Valentine's Day</p></li>
            <li><p>Catfish in Tinder</p></li>
            <li><p>Showing up on Prom with two girlfriends</p></li>
            <li><p>Brought vegetable to a Super Bowl party</p></li>
            <li><p>No retweet, share and like on Outlawpunk posts!! etc</p></li>
          </ul>
          <p>
            The academy was founded on the principles of friendship making,
            crayon eating and absolute, unregulated, deplorable, degenerate
            behaviour. Welcome fellow apes, to the Degenerate Ape Academy.
          </p>
          <p>Unbelievable and unacceptable crimes!! Fortunately, we know that they are currently escaping to the Ethereum Blockchain. Now we need everyone's help so we can catch these outlaws! Even they are with different outfits, eye colors, weapons and headpieces; we will catch them all as we have a strong community!</p>
        </div>
        <div className="about-images">
          <SingleCarousel />
          <SingleCarousel />
        </div>
      </div>
    </>
  );
}
