import "./index.scss";
import { Link } from "react-router-dom";
/* import PrimaryButton from "../../common/primaryButton/primaryButton"; */
import { useTrail } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { scrollIntoViewCalc } from "../../../../utils/scrollIntoView";
import { useHistory } from "react-router"; 
import { useRef, useState } from 'react'
/* 
import useReduxState from "../../../hooks/useReduxState"; */

// import { ReactComponent as Twitter } from "../../../../assets/images/icons/twitter.svg";
// import { ReactComponent as Discord } from "../../../../assets/images/icons/discord.svg";
import Discord from '../../../../assets/images/pictures/social/discord.png';
import Twitter from '../../../../assets/images/pictures/social/twitter.png';
import Instagram from '../../../../assets/images/pictures/social/instagram.png';
import Opensea from '../../../../assets/images/pictures/social/opensea.png';
import Logo from '../../../../assets/images/pictures/logos/logo.png';
import ConnectButton from "../connectButton/ConnectButton";



import React from "react";

export default function NavList({
  open,
  style,
  close,
}: {
  open: boolean;
  style?: React.CSSProperties;
  close: () => void;
}): JSX.Element {
  const leftNav = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const trail = useTrail(9, {
    from: { x: 500, opacity: 0 },
    x: open ? 0 : 500,
    opacity: open ? 1 : 0,
    cursor: "pointer",
    config: { mass: 6, tension: 3000, friction: 200 },
  });
  /*   const [{ connected }] = useReduxState((state) => state.globalData); */
  return (
    <div className="nav-list" style={style? style : {}} onClick={close}>
      <animated.div className="my-apes" style={trail[0]}>
        <Link
          to={"/"}
          /* to={connected ? "/my-apes" : "/"} */
          //style={connected ? { color: "white" } : { color: "#2c253e" }}
        >
         {/* <img src={Logo} alt="" className="hamburger-logo" /> */}
         <p>Mutant Ether Babies</p>
        </Link>
      </animated.div>
      <animated.div style={trail[1]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("about-title");
          }}
        >
          About
        </span>
      </animated.div>
      {/* <animated.div style={trail[2]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("collections");
          }}
        >
          Collections
        </span>
      </animated.div> */}
      <animated.div style={trail[3]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("traits");
          }}
        >
          Gaming Metaverse
        </span>
      </animated.div>
      <animated.div style={trail[4]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("roadmap");
          }}
        >
          Roadmap
        </span>
      </animated.div>
      {/* <animated.div style={trail[4]}>
        {/* <Link to="/rarities">Roadmap</Link>
        <Link to="/">Roadmap</Link>
      </animated.div> 
      /* <animated.div style={trail[5]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("faqs");
          }}
        >
          Faq
        </span>
      </animated.div> */}
      {/* <br />
      <animated.div className="nav-social" style={trail[6]}>
        <a
          href="https://twitter.com/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        > */}
          {/* <Twitter /> */}
        {/* </a>
        <a
          href="http://discord.gg/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        > */}
          {/* <Discord /> */}
        {/* </a>
      </animated.div> */}
      {/* <animated.div style={trail[7]}>
        <span
          className="nl-terms"
          style={{
            color: "white",
            fontStyle: "italic",
            fontFamily: "Arial, Helvetica, sans-serif",
            textDecoration: "underline",
          }}
          onClick={() => {
            history.push("/terms");
          }}
        >
          Terms & Conditions
        </span>
      </animated.div> */}
      {/* <ConnectButton
            navRef={leftNav}
            className={`${menu ? "open-menu btn-custom-button connect-button mobile-menu" : ""}`}
          /> */}
    {/* <div className="socials mobile-header-items"> */}
            {/* <a href="#" className="">
            <div className="parent-icons">
              <img src={Opensea} alt="opensea" className="" />
              </div>
            </a> */}
            {/* <a href="#" className="">
              <div className="parent-icons">
                <img src={Discord} alt="discord" className="" />
              </div>
            </a>
            <a href="#" className="">
            <div className="parent-icons">
              <img src={Twitter} alt="twitter" className="" />
              </div>
            </a> */}
            {/* <a href="#" className="">
            <div className="parent-icons">
              <img src={Instagram} alt="instagram" className="" />
              </div>
            </a> */}
          {/* </div> */}
      {/*       <PrimaryButton onClick={() => console.log("hi")}>MINT</PrimaryButton> */}
    </div>
  );
}
