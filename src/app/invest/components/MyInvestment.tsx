/** @format */

"use client";
import SingleActiveInvestment from "./SingleActiveInvestment";
import { useAccount, useContractRead } from "wagmi";
import { TokenGrowAddr } from "@/constant/contract";
import tokenGrow from "../../../abi/tokenGrow.json";
export default function MyInvestment() {
  const { address } = useAccount();
  const {
    data: activeIV,
    isLoading,
    isError,
  } = useContractRead({
    address: TokenGrowAddr,
    abi: tokenGrow,
    functionName: "getYourInvestment",
    args: [address],
  });

  const combinedData: unknown[][] =
    (activeIV as unknown[][])?.[0]?.map((_, index) =>
      (activeIV as unknown[][]).map((arr) => arr[index])
    ) || [];

  console.log("combinedDataaa", combinedData);

  return (
    <div>
      {combinedData.length === 0 ? <p className="font-bold text-center text-[24px] leading-8 text-[#000019] tracking-[0.03em] ">
        No Active Investment
      </p> : <>
      {combinedData.map((values, index) => {
        return (
          <SingleActiveInvestment idx={index} amInvested={Number(values[2])} time={Number(values[3])} nftid={Number(values[1])} indId={Number(values[0])} />
        );
      })}
      
      </>}
      {/* <SingleActiveInvestment/> */}
    </div>
  );
}
