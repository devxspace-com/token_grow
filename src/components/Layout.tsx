/** @format */

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Props {
  children: ReactNode | ReactNode[];
}
export default function Layout({ children }: Props) {
  return (
    <main>
      <section className="min-h-screen max-h-full flex">
        <div className="w-[16%] lgDesktop:w-[20%] smDesktop:w-[24.6%] tablet:w-[27%]">
          <Sidebar />
        </div>
        <div className="w-[84%] lgDesktop:w-[80%] smDesktop:w-[75.4%] tablet:w-[73%] bg-[#ccccff] overflow-y-scroll max-h-screen h-screen min-h-screen">
          <div className="flex justify-center mt-10">

          <ConnectButton   showBalance={false} chainStatus="icon"/>
          </div>
          {children}
          </div>
      </section>
    </main>
  );
}
