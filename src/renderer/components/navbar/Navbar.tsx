import React from 'react';

import "./index.scss";
import HamIcon from "./hamIcon/HamIcon";
import { SwipeableDrawer } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import NavList from "./navList/NavList";
import { useMediaQuery } from "react-responsive";
import ConnectButton from "./connectButton/ConnectButton";
import { useHistory } from "react-router-dom";

import { scrollIntoViewCalc } from "../../../utils/scrollIntoView";

import Logo from "../../../assets/images/pictures/logos/logo.png";
import { ReactComponent as ApeMenu } from "../../../assets/images/icons/menu-ape-logo.svg";
// import { ReactComponent as Discord } from '../../../assets/images/pictures/social/discord.svg';
// import { ReactComponent as Twitter } from '../../../assets/images/pictures/social/twitter.svg';
// import { ReactComponent as Instagram } from '../../../assets/images/pictures/social/instagram.svg';
// import { ReactComponent as Opensea } from '../../../assets/images/pictures/social/opensea.svg';
import Opensea from '../../../assets/images/pictures/social/opensea.png';
import Discord from '../../../assets/images/pictures/social/discord.png';
import Instagram from '../../../assets/images/pictures/social/instagram.png';
import Twitter from '../../../assets/images/pictures/social/twitter.png';
import { animated } from "@react-spring/web";
import { useTrail } from "@react-spring/core";

export default function Navbar(): JSX.Element {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const leftNav = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 992px)",
  });

  useEffect(() => {
    const body = document.getElementsByTagName("html");
    if (menu) {
      body[0].style.overflowY = "hidden";
    } else {
      body[0].style.overflowY = "auto";
    }
    return () => {
      body[0].style.overflowY = "auto";
    };
  }, [menu]);

  return (
    <div className="parent-navbar">
    <div
      className="navbar"
      id="navbar"
      style={{
        backgroundColor:
          history.location.pathname === "/"
            ? "var(--dark-blue)"
            : "var(--darker-blue)",
      }}
    >
      
      <div className="header-items">
        <a href="#about-title" className="about">About</a>
        {/* <a href="#" className="about">Collection</a> */}
        <a href="#gaming" className="about">Gaming Metaverse</a>
        <a href="#roadmap" className="about">Roadmap</a>
      </div>
      {/* <div className="logo-letters">
        <p>Mutant Ether Babies</p>
      </div> */}
      {/* <img
        onClick={() => history.push("/")}
        style={isMobile ? {} : { zIndex: 2000, cursor: "pointer", width: "111px", height: "59px" }}
        src={Logo}
        alt="logo"
      /> */}
       {/* <div className="main-logo">
        <p>Mutant Ether Babies</p>
      </div> */}
      <div className="left-nav-main">
        <div className="left-nav" ref={leftNav}>
          {/* <div className="socials">
            <a href="#" className="">
            <div className="parent-icons">
              <img src={Opensea} alt="opensea" className="" />
              </div>
            </a>
            <a href="#" className="">
              <div className="parent-icons">
                <img src={Discord} alt="discord" className="" />
              </div>
            </a>
            <a href="#" className="">
            <div className="parent-icons">
              <img src={Twitter} alt="twitter" className="" />
              </div>
            </a>
            <a href="#" className="">
            <div className="parent-icons">
              <img src={Instagram} alt="instagram" className="" />
              </div>
            </a>
          </div> */}
          <ConnectButton
            navRef={leftNav}
            className={`${menu ? "open-menu btn-custom-button connect-button" : ""}`}
          />
          <HamIcon open={menu} onClick={() => setMenu(!menu)} />
        </div>

        <SwipeableDrawer
          anchor="right"
          open={menu}
          onOpen={() => setMenu(true)}
          onClose={() => setMenu(false)}
          className="nav-drawer"
        >
          {!isMobile && (
            <>
              <div className="logo"></div>
              <div className="monke">
                <ApeMenu />
              </div>
            </>
          )}
          <NavList
            open={menu}
            style={isMobile ? { width: "100vw" } : { width: "40%" }}
            close={() => setMenu(false)}
          />
        </SwipeableDrawer>
      </div>
      {/* <div className="main-logo">
        <p>Mutant Ether Babies</p>
      </div> */}
     
      </div>
    </div>
  );
}
