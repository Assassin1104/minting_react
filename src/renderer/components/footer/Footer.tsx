import React from 'react';
import "./index.scss";
import { ReactComponent as ApeLogo } from "../../../assets/images/pictures/logos/DAA_Logo-white.svg";
// import { ReactComponent as Discord } from "../../../assets/images/icons/discord.svg";
// import { ReactComponent as Twitter } from "../../../assets/images/icons/twitter.svg";

import Twitter from '../../../assets/images/pictures/social/twitter.png';
import Discord from '../../../assets/images/pictures/social/discord.png';
import Telegram from '../../../assets/images/pictures/social/telegram.png';
import Medium from '../../../assets/images/pictures/social/medium.png';
import Envelop from '../../../assets/images/pictures/social/envelop.png';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="foot-ape-logo">
        <p className="brand">Mutant Ether Babies</p>
        <p className="copyright">@ 2021 Mutant Ether Babies - All rights reserved.</p>
      </div>
      <div className="foot-links">
        
        <div className="social-links">
          <a href="https://discord.com/"><img className="discord" src={Discord}/></a>
        </div>
        <div className="social-links">
          <a href="https://twitter.com/"><img className="twitter" src={Twitter}/></a>
        </div>
        {/* <div className="social-links">
          <a href=""><img className="telegram" src={Telegram} /></a>
        </div> */}
        {/* <div className="social-links">
          <a href=""><img className="medium" src={Medium}/></a>
        </div> */}
        <div className="social-links">
          <a href="https://envelop.com/"><img className="envelop" src={Envelop}/></a>
        </div>
      </div>
    </footer>
  );
}
