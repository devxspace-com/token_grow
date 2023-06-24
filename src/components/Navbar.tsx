"use client";
/** @format */

import Link from "next/link";
import { ethers } from "ethers";
import { useState } from "react";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Web3Provider } from "@ethersproject/providers";
import walletConnectFcn from "@/hedera/walletConnect";

type WalletData = [string, ethers.BrowserProvider, string];

export default function Navbar() {
  const [walletData, setWalletData] = useState<WalletData | undefined>(
    undefined
  );
  const [account, setAccount] = useState(undefined || "");
  const [network, setNetwork] = useState(undefined || "");
  const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");
  const [contractTextSt, setContractTextSt] = useState();
  const [connectLinkSt, setConnectLinkSt] = useState("");
  const [iswalletconnected, setiswalletconnected] = useState(false);

  async function connectWallet() {
    // if (account !== undefined) {
    //   setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
    // } else {
    try {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      let newNetwork = wData[2];
      if (newAccount !== undefined) {
        setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
        setConnectLinkSt(
          `https://hashscan.io/${newNetwork}/account/${newAccount}`
        );

        setWalletData(wData as WalletData);
        setAccount(newAccount);
        setNetwork(newNetwork);
        setiswalletconnected(true);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      // Handle error state
      // }
    }
  }

  console.log(connectTextSt);
  console.log(account);
  console.log(walletData);

  return (
    <main className="">
      <div className=" w-[100%]">
        <div className="pt-[48px] ml-[69px] flex gap-[300px] smDesktop:gap-[100px]   tabletAir:gap-[40px] items-center mobile:w-[90%] mobile:mx-auto">
          <Link
            href="/"
            className="text-[28px] leading-5 font-bold text-[#FFFF] logo "
          >
            Grow<span className="text-[#F18500]">Token</span>
          </Link>

          <div className="flex justify-between w-[100%] mobile:hidden ">
            <div className="flex items-center gap-6">
              <Link
                href=""
                className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] "
              >
                Home
              </Link>
              <Link
                href=""
                className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] "
              >
                Impact
              </Link>
              <Link
                href=""
                className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] "
              >
                Hashgraph
              </Link>
              <Link
                href=""
                className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] "
              >
                About Us
              </Link>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg mr-[160px] smDesk:mr-[80px] tabletAir:mr-[40px] hover:bg-[#F18500] cursor-pointer">
              <p className="text-[16px] leading-5 font-medium tracking-[0.013em] px-[17.5px] py-[5.5px] text-[#F18500] hover:text-[#FFFFFF]">
                Get Started
              </p>
            </div>
          <div className="flex flex-col">
          {iswalletconnected ? (
            <p className="">
              {network}
            </p>
          ) : (
            <button onClick={connectWallet} className="bg-blue-400 text-white">
              {connectTextSt}
            </button>
          )}
          </div>
          </div>
        </div>
      </div>
      {/* /mobile drop down */}
      {/* <div className="flex flex-col  ">
     <div className="flex flex-col gap-6">
     <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Home</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Impact</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Hashgraph</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">About Us</Link>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-lg hover:bg-[#F18500] cursor-pointer w-[100px] mt-6">
                        <p className="text-[16px] leading-5 font-medium tracking-[0.013em]  py-[5.5px] text-center text-[#F18500] hover:text-[#FFFFFF]">Get Started</p>
                    </div>
                </div> */}
    </main>
  );
}
