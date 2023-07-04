'use client';
import {ReactNode, useState, useEffect} from 'react';
import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout';
import Barchar from './components/chart'
import PieChart from './components/pie';
import Linegraph from './components/Line';
import { useAccount, useContractRead } from "wagmi";
import tokenabi from '../../abi/token.json';
import tokenGrow from '../../abi/tokenGrow.json';
import Investedcard from './components/investedCard';
import {TokenGrowAddr, NFTAddr, Token} from '../../constant/contract';



export default function DashboardLayout() {
  const {address} = useAccount();
  const [USdtBalance, setUsdtBalance] = useState('');
  const [totalInvested, setTotalinvestment] = useState("");
  

  const { data:usdtBalance } = useContractRead({
    address: Token,
    abi: tokenabi,
    functionName: 'balanceOf',
    args: [address]
  })

  const { data:investDetails} = useContractRead({
    address: TokenGrowAddr,
    abi: tokenGrow,
    functionName: 'getYourInvestment',
    args: [address]
  })

  const [overview, setOverview] = useState(true);
  const [portfolio, setPortfolio] = useState(false)
const barstyle = {
  backgroundColor: "#FFFFFF",
}
const overViewClick = () =>{
  setOverview(true);
  setPortfolio(false);
}

const portfolioClick = () =>{
  setOverview(false);
  setPortfolio(true);
}


const combinedData: unknown[][] =
    (investDetails as unknown[][])?.[2]?.map((_, index) =>
      (investDetails as unknown[][]).map((arr) => arr[index])
    ) || [];

    console.log(combinedData);

useEffect(() => {
  let investedDet: any[];
  let usdtinvstArray : any | [];   
  let totalInvestment : any = 0;
  if(usdtBalance){
    setUsdtBalance(String(usdtBalance));
    //@ts-ignore
    investedDet = investDetails[2];
    console.log(investedDet);
    let i : any;
    for(i=0; i<investedDet.length; i++){
      let value = Number(investedDet[i])
      console.log(value);
      totalInvestment += value;
    }
    setTotalinvestment(totalInvestment);
     }


    
}, [usdtBalance])


  return (
   <Layout>
     <div className='w-100% flex'> 
          <div className='w-[420px] h-[160px] mt-[104px] ml-[50px] rounded-[12px] text-center border-[#00004C] border-2'>
            USDT balance : ${((Number(USdtBalance))/1e18).toFixed(2)} 
          </div>
          <div className="h-[160px] w-[310px] ml-[100px] mt-[104px] rounded-[12px] text-center border-[#00004C] border-2 "> 
            Total Invested : ${((Number(totalInvested))/1e18).toFixed(2)}
          </div>

          <div className='w-[250px] h-[235px] mt-[104px] mx-[100px] rounded-[12px] text-center border-[#00004C] border-2'>
            <div className="h-[200px] w-[220px] mx-auto mt-[5px]">
              Token Allocation
             <PieChart />
            </div>
          </div>
     </div>
     <div className="w-[300px] h-[60px] bg-[#FEF3E5] ml-[75px] rounded-[16px] p-[4px]">
        <div className="flex space-x-[20px] text-center mx-[15px] my-[10px]">
          <div className=" h-[35px] w-[120px] rounded-[16px] p-[5px] cursor-pointer" style= {overview ? barstyle : {}} onClick={overViewClick}>
          <h1 className='text-[#F18500]'>Overview</h1>
          </div>
          <div className=" h-[35px] w-[120px] rounded-[16px] p-[5px] cursor-pointer" style={portfolio ? barstyle : {}} onClick={portfolioClick} >
          <h1 className='text-[#F18500]'>Portfolio</h1>
          </div>
        </div>
     </div>

     <div className="flex h-[700px] w-[1180px] ml-[50px] mt-[20px] mb-[100px] rounded-[12px] bg-[#00004C]">
         {overview && <div className="flex">
         <div className="h-[480px] w-[250px] mt-[20px] ml-[20px] space-y-4"> 
         <h2 className='text-white'>investment</h2>
         <div className='overflow-y-scroll max-h-[70vh] scrollbar-hide overflow-clip space-y-4'>
      {combinedData.map((item : any, index : any) => (
          <Investedcard key={index} nftID={Number(item[1])} logo='../icon/ether.png' investedAmount={Number(item[2])} />          
        ))}
         </div>
      </div>



          <div className="h-[550px] w-[800px] ml-[50px] mt-[20px] space-y-4">
          <h2 className="text-white ">Growth investment</h2>
          <div className="h-[550px] w-[800px] rounded-[12px] text-center bg-white">
              <div className="pt-[50px] h-[450px]">
              <Barchar />
              </div>
          </div>
          </div>
      </div>  }
     {portfolio && <div className="h-[600px] w-[1000px] mx-auto my-[40px] text-white">
          <Linegraph />
      </div>}
      
     </div>
   </Layout>

  )
}







 