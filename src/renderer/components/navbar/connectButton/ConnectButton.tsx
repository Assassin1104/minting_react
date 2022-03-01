import React from 'react';
import "./index.scss";
import PrimaryButton from "../../common/primaryButton/primaryButton";
import { useState, useEffect } from "react";
import WalletList from "./walletList/WalletList";
import useReduxState from "../../../hooks/useReduxState";
/* eslint-disable  react-hooks/exhaustive-deps */

import { useMetamask } from "use-metamask";

export default function ConnectButton({
  className,
  navRef,
}: {
  className: string;
  navRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const state = useState(false);
  console.log("CGI State Connect", state);
  const [{ connected, wallet }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );

  const { metaState } = useMetamask();

  useEffect(() => {
    if (metaState.isConnected && open) {
      setOpen(false);
    }
  }, [connected]);
  return (
    <div
      className={`nav-connect-wrap nav-connect  ${className} ${
        !metaState.isConnected && open ? "nc-open" : ""
      }`}
      style={{display:"flex", gap: "20px"}}
    >
      <PrimaryButton onClick={function (): void {
        return
        throw new Error('Function not implemented.');
      } } children={"OpenSea"}></PrimaryButton>
      <PrimaryButton
      //   /*    {...(navRef.current && {
      //   style: { top: `${navRef.current.clientHeight / 2.93}%` },
      // })} */
        onClick={() => {

          // if (!metaState.isConnected) {
          //   setOpen(!open);
          // } else if (wallet && wallet!.publicKey) {
          //   navigator.clipboard.writeText(wallet!.publicKey.toBase58());
          //   setGlobalData({
          //     type: "SET_GLOBAL_DATA",
          //     arg: {
          //       wallet,
          //     },
          //   });
          // }
        }}
      >
        {/* {connected && wallet && wallet!.publicKey
          ? `${wallet!.publicKey
              .toBase58()
              .substring(0, 5)} ... ${wallet!.publicKey
              .toBase58()
              .substring(wallet!.publicKey.toBase58().length - 5)}`
          : "Connect Wallet"} */}
        { metaState.isAvailable && metaState.isConnected
          ? `${metaState.account[0]}`.toString().substring(2, 9) + '...' + `${metaState.account[0]}`.toString().substring(`${metaState.account[0]}`.toString().length - 6)
          : "Mint MEB"}
      </PrimaryButton>
      <div className={`nc-dropdown `}>
        <WalletList />
      </div>
    </div>
  );
}
