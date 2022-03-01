import React from 'react';
import "./index.scss";
import PrimaryButton from "../../../common/primaryButton/primaryButton";
import useWallet from "../../../../hooks/useWallet";
import useReduxState from "../../../../hooks/useReduxState";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";
import { useMediaQuery } from "react-responsive";
import { TWallet } from "../../../../hooks/useWallet";

import { ReactComponent as Phamtom } from "../../../../../assets/images/pictures/icons/phantom.svg";
import { ReactComponent as Sollet } from "../../../../../assets/images/pictures/icons/sollet.svg";
import { ReactComponent as Metamask } from "../../../../../assets/images/pictures/icons/metamask.svg";

import { useMetamask } from "use-metamask";

export default function WalletList(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [wallet, setWallet, connectToMetamask] = useWallet();
  const [, setGlobalData] = useReduxState((state) => state.globalData);

  const { metaState } = useMetamask();

  useDidUpdateEffect(() => {
    if (wallet) {
      setGlobalData({
        type: "SET_GLOBAL_DATA",
        arg: {
          wallet,
        },
      });
    }
  }, [wallet]);

  const handleWallet = (walletType: TWallet) => {
    console.log("CGI walletType is ", walletType);
    if( metaState.isAvailable && !metaState.isConnected ){
      connectToMetamask();
    }
    setWallet(walletType);
  };

  return (
    <div className="w-list">
      {/* {!isMobile && (
        <PrimaryButton 
          // style={{display: 'none'}}
          className="wl-phantom"
          onClick={() => {handleWallet("Phantom"); console.log("phantom")}}
        >
          <Phamtom />
          Phantom
        </PrimaryButton>
      )} */}
      {/* <PrimaryButton 
        className="wl-sollet"
        onClick={() =>{ handleWallet("Sollet"); console.log("sollet")}}
      >
        <Sollet />
        Sollet
      </PrimaryButton> */}
      {/* )} */}

      <PrimaryButton 
        className="wl-metamask"
        onClick={() =>{ handleWallet("Metamask"); console.log("metamask")}}
      >
        <Metamask />
        Metamask
      </PrimaryButton>
      {/* )} */}

    </div>
  );
}
