import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../../../abi/tokenGrow.json';

const contractAddress = '0x0000000000000000000000000000000000e4710f'; 

export default function SingleActiveInvestment() {
  const [investmentData, setInvestmentData] = useState(null);


  useEffect(() => {
    const loadInvestmentData = async () => {
      try {
        if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.request !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          const result = await contract.getAllInvestment();
          setInvestmentData(result);
        } else {
          console.error('Ethereum provider or request method not available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadInvestmentData();
  }, []);


  return (
    <section>
        <section className="w-[90%] mx-auto bg-[#000019] rounded-lg text-[#FFFFFF] mb-[8px]">

<div className="w-[98%] pt-[10px] pb-[10px] mx-auto flex justify-between items-center ">

        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[16px] leading-5 tracking-[0.03em]">Chicken Farm Investment</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Invested: 1,000.00 USDT</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">26 Feb, 2023 11:37 PM</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Start Date</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">05 Feb, 2024 11:38 PM</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">End Date</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">1,125 USDT</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Total Return</p>
        </div>
        <div className=" ">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">234.8 USDT</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Net Profit</p>
        </div>
       
        <div className="border-l-[1px] border-[#ccccff] pl-[32px]">
            <h2 className="text-[16px] leading-5 font-[400] px-[10px] py-[4px] border-[1px] rounded-lg border-[#F18500] mt-[8px]">Withdraw Fund</h2>
        </div>
</div>
        </section>
    </section>
  )
}
