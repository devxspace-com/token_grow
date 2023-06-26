import React, { useState } from "react";
import useGetSingleInvestment from "../hooks/useGetSingleInvestment";
import { useParams } from "next/navigation";
import { log } from "console";
import useReadUri from "../hooks/useReadUri";
import useFetchURiDetails from "../hooks/useFetchURiDetails";

type ProductProps = {
  invest: (product: any) => void;
};

const Product = ({invest}:ProductProps) => {
  const {id} = useParams();
  
  const {data, isLoading, isError} = useGetSingleInvestment(Number(id));

  const {data:readNFT} = useReadUri(Number((data as unknown[])?.[2]))

console.log(data);
console.log('a',readNFT);
// console.log('hel',Number(data[2]));


const {data:fetchURI, isLoading:fetchLoading, isError:fetchIsError} = useFetchURiDetails(readNFT as string);
console.log('nft', fetchURI);

const currentDate = new Date();
const timestamp = Number((data as unknown[])?.[8]) * 1000;
const diffInMonths = (timestamp -currentDate.getTime()) / (1000 *60*60 * 24 *30);
const date = new Date(Number((data as unknown[])?.[7]) * 1000).toLocaleDateString();



  // const handleInvest = () => {
  //   // Pass the product values to the onInvest function
  //   onInvest();
  // };

  return (
    <div>
      <div className="rounded-lg contact_bg w-[98%] mt-5 m-auto flex flex-col p-5">
        <div className="flex top text-white m-auto w-[90%] items-start ">
          <div className="profile">
            <img src={`https://${fetchURI?.properties?.image?.description}.ipfs.nftstorage.link`} alt="" className="rounded-full h-[8em] w-[8em]"/>
          </div>
          <div className="text flex flex-col ml-4">
            <h1 className="text-[1.5em]">{fetchURI?.title}</h1>
            <p className="text-[0.8em]">
              <span className="text-green-700">{Number((data as unknown[])?.[3])}%</span> in {Math.floor(diffInMonths)} months
            </p>
            <div className="justify-between mt-5 flex">
              <p className="text-left">
                1 USDT <br />
                per units
              </p>
              <p className="text-left">
                {Number((data as unknown[])?.[9])}
                <br />
                investors
              </p>
            </div>
          </div>
          <div className="button ml-[3em]">
            <button
              className="bg-[#F18500] px-4 py-2 rounded-xl"
              onClick={invest}
            >
              Invest
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-[80%] mt-8 m-auto justify-between text-white">
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Expected Returns</h1>
            <p>{Number((data as unknown[])?.[3])}% in {Math.floor(diffInMonths)} months</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Investment Type</h1>
            <p>Fixed Income</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Offer Starting Date</h1>
            <p>{Number((data as unknown[])?.[7]) === 0 ? "Not Started" : date}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Maturity Date</h1>
            <p>{Math.floor(diffInMonths)} months </p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Pay-Out Type</h1>
            <p>Capital & profit is paid at maturity</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Unit Type</h1>
            <p>Unit can be sold any time provided investment has not started and not sold out</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Insurance Partner</h1>
            <p>Leadway insurance</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Farming/Production Cycle Type</h1>
            <p>{Math.floor(diffInMonths)} months</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Farm Location</h1>
            <p>{fetchURI?.properties?.farm?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
