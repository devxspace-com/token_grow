/** @format */

"use client";
import SingleActiveInvestment from "./SingleActiveInvestment";
import { useAccount, useContractRead } from "wagmi";
import { TokenGrowAddr } from "@/constant/contract";
import tokenGrow from "../../../abi/tokenGrow.json";
import { Skeleton, Space } from "antd";
export default function MyInvestment() {
  const { address } = useAccount();
  const {
    data: activeIV,
    isLoading: activeLoading,
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

  

  return (
    <div>
      {  isError ? <p className="font-normmal text-center text-[20px] leading-8 text-[#000019] tracking-[0.03em] w-[40%] mx-auto">Error Ocurred kindly check if wallet is connected if yes check your network and refetch</p> 
    :
    <div>

      {activeLoading ?(
        <div className="w-[90%] mx-auto">
          <p className="font-normmal text-center text-[20px] leading-8 text-[#000019] tracking-[0.03em]">Loading...</p>
          {/* <Skeleton active paragraph={{ rows: 4 }} title={false} /> */}
        </div>
      )
      :
      <div>
      
      {combinedData.length === 0 ? (
        <p className="font-bold text-center text-[24px] leading-8 text-[#000019] tracking-[0.03em] ">
          No Active Investment
        </p>
      ) : (
        <>
          {/* <div className="w-[90%] mx-auto">
            <Skeleton active paragraph={{ rows: 4 }} title={false} />
          </div> */}

          {combinedData.map((values, index:Number) => {
            return (
              <SingleActiveInvestment
              key={index}
                idx={index}
                amInvested={Number(values[2])}
                time={Number(values[3])}
                nftid={Number(values[1])}
                indId={Number(values[0])}
              />
            );
          })}
        </>
      )}
    </div>  
    }
      </div>
    
    }

     
    </div>
  );
}
