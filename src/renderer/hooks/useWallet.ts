import { useState, useCallback, useEffect } from "react";

import { useMetamask } from "use-metamask";
import { ethers } from "ethers";
import Web3 from "web3";

import Wallet from "@project-serum/sol-wallet-adapter";

import useDidUpdateEffect from "./useDidUpdateEffect";
import { TCryptoWallet } from "../api/types/globalData";


export type TWallet = "Sollet" | "Phantom" | "Metamask";

export default function useWallet(): [
    TCryptoWallet | null,
    (wname: TWallet) => void,
    () => void
] {
    const [wallet, setWallet] = useState<TCryptoWallet | null>(null);
    const [walletName, setWalletName] = useState("");

    const { connect, metaState } = useMetamask();
    const [web3interface, setWeb3Interface] = useState("ethers");
    const getPhantomProvider = () => {
        console.log("CGI getPhantomProvider");
        if ("solana" in (window as any)) {
            const provider = (window as any).solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        return new Wallet(
            "https://phantom.app/",
            process.env.REACT_APP_SOLANA_NETWORK!
        );
    };

    const getMetamaskProvider = () => {
        console.log("CGI getMetamaskProvider");
        if (!metaState.isAvailable) {
            return new Wallet(
                "https://metamask.io/",
                process.env.REACT_APP_SOLANA_NETWORK!
            );
        }
    };
    useDidUpdateEffect(() => {
        console.log("CGI walletName in useDidUpdateEffect", walletName);
        if (walletName !== "") {
            let urlWallet;
            switch (walletName) {
                case "Sollet":
                    urlWallet = new Wallet(
                        "https://www.sollet.io",
                        process.env.REACT_APP_SOLANA_NETWORK!
                    );
                    break;
                case "Phantom":
                    if ((window as any).solana && (window as any).solana.isPhantom) {
                        const phantomWallet = getPhantomProvider();
                        urlWallet = phantomWallet;
                    } else {
                        urlWallet = new Wallet(
                            "https://phantom.app/",
                            process.env.REACT_APP_SOLANA_NETWORK!
                        );
                        console.log("CGI process.env.REACT_APP_SOLANA_NETWORK", process.env.REACT_APP_SOLANA_NETWORK);
                    }
                    break;
                case "Metamask":
                    if ((window as any).ethereum) {
                        const metamaskWallet = getMetamaskProvider();
                        console.log("CGI ethereum exist");
                        urlWallet = metamaskWallet;
                    } else {
                        console.log("CGI ethereum no exist");
                        urlWallet = new Wallet(
                            "https://metamask.io/",
                            process.env.REACT_APP_SOLANA_NETWORK!
                        );
                        console.log("CGI process.env.REACT_APP_SOLANA_NETWORK", process.env.REACT_APP_SOLANA_NETWORK);
                    }
                    break;
                default:
                    break;
            }

            setWallet(urlWallet);
        }
    }, [walletName]);

    const chooseWallet = useCallback((wname: TWallet) => {
        setWalletName(wname);
    }, []);

    const connectToMetamask = useCallback(() => {
        if (metaState.isAvailable && !metaState.isConnected) {
            try {
                if (web3interface === "ethers") {
                    connect(ethers.providers.Web3Provider, "any");
                    console.log("CGI userEffect1", metaState);
                }
                else if (web3interface === "web3") {
                    connect(Web3);
                    console.log("CGI userEffect2", metaState);
                }
                else
                    throw Error(`Unknown web3 interface: ${web3interface}`);
            } catch (error) {
                console.log(error);
            }
            console.log("CGI userEffect3", metaState);
        }
    }, [metaState.isAvailable, web3interface]);

    return [wallet, chooseWallet, connectToMetamask];
}