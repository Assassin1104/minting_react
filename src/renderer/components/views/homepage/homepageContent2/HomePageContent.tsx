import React from 'react';
import "./index.scss";
import About from "./about/About";
import RoadMap from "./roadmap/Roadmap";
import Metaverse from '../../apeintosh/Metaverse';
import Team from "./team/Team";

export default function HomePageContent(): JSX.Element {
  return (
    <div className="hp-content">
      <About />
      <RoadMap />
      <Metaverse />
      <Team />
    </div>
  );
}
