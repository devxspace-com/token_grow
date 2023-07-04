import React from 'react'
import {TokenGrowAddr, NFTAddr, Token} from '../../../constant/contract';
import { useAccount, useContractRead } from "wagmi";
import nftABi from '../../../abi/NFT.json';
import useReadUri from '../../invest/hooks/useReadUri';
import useFetchURiDetails from '@/app/invest/hooks/useFetchURiDetails';


const InvestedCard = (prop : any) => {
  const {data : uriSTring} = useReadUri(prop.nftID);
  const {data : readuri} = useFetchURiDetails(String(uriSTring));
  
  // console.log(readuri);
  return <div>
  <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
      <div className="flex mx-[10px] pt-[20px] justify-between">
      <img src={`https://${readuri?.properties?.image?.description}.ipfs.nftstorage.link`} alt='Image' className='h-[50px] w-[50px] rounded-full'/>
      <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>${prop.investedAmount/1e18}</h1>
      <div>
          <li className='h-[10px]'></li>
          <li className='h-[10px]'></li>
          <li className='h-[10px]'></li>
      </div>
      </div>
    <div className="flex space-x-2 mx-[10px] mt-[20px]">
      <p className='text-[#8dd43d]'>1.5%</p>
      <p>This Week</p>
    </div>
  </div>
  </div>

}

export default InvestedCard