'use client';
import {ReactNode, useState, useEffect} from 'react';
import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout';
import Barchar from './components/chart'
import PieChart from './components/pie';
import Linegraph from './components/Line';
import ConnectBtn from '@/components/ConnectBtn';
import { useAccount, useContractRead, useContractReads } from "wagmi";
import tokenabi from '../../abi/token.json';
import tokenGrow from '../../abi/tokenGrow.json';
import Investedcard from './components/investedCard';
import { Index } from 'viem/dist/types/types/rpc';



export default function DashboardLayout() {
  const {address} = useAccount();
  const [USdtBalance, setUsdtBalance] = useState('');
  const [totalInvested, setTotalinvestment] = useState("");
  
  const TokenContract = {
    address: '0x929c485acdca59c805e9f76f715b04c5b6a29e92',
    abi: tokenabi,
  }
  const TokenGrowContract = {
    address: '0x9fa12a7729964B15B3D5971bC87b758598e176f9',
    abi: tokenGrow,
  }
   
  const { data, isError, isLoading }= useContractReads({
    contracts: [
      {
        ...TokenContract,
        functionName: 'balanceOf',
       //@ts-ignore
        args: [address],
      }, 
      {
        ...TokenGrowContract,
        functionName: 'getYourInvestment',
         //@ts-ignore
        args: [address],
      },
   
    ],
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
(data as any[])[1].result[2].map((_ : any, index : any) =>
  (data as any[]).map((arr :any) => arr[index])
) || [];
console.log(combinedData);
// const combinedData: unknown[][] =
//     (activeIV as unknown[][])?.[0]?.map((_, index) =>
//       (activeIV as unknown[][]).map((arr) => arr[index])
//     ) || [];


useEffect(() => {
  let amountArray : any | [];
  let usdtinvstArray : any | [];   
  let totalInvestment : any = 0;
  if(data){
    // console.log(data[1].result[2]);
    setUsdtBalance(String((data[0].result))); 
    amountArray = (data[1].result);
    let i : any;
    for(i=0; i<amountArray[2].length; i++){
      let value = Number(amountArray[2][i])
      totalInvestment += value;
    }
    setTotalinvestment(totalInvestment);
  
    // usdtinvstArray = (data[1].result);
    // for(i=0; i<=amountArray[0].length; i++){
    //   console.log("yes")
    //   setinvestedProduct([...investedProduct, Number(usdtinvstArray[2][i])])
    //   console.log(Number(usdtinvstArray[2][i]))
    //   // setProductNFTID([...ProductNFTID, Number(usdtinvstArray[1][i])]);
    // }
     }
}, [data])


  return (
   <Layout>
     <div className='w-100% flex'> 
     <ConnectBtn />
          <div className='w-[420px] h-[160px] mt-[104px] ml-[50px] rounded-[12px] text-center border-[#00004C] border-2'>
            USDT balance : ${(Number(USdtBalance))/1e18} 
          </div>
          <div className="h-[160px] w-[310px] ml-[100px] mt-[104px] rounded-[12px] text-center border-[#00004C] border-2 "> 
            Total Invested : ${totalInvested}
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
      {combinedData.map((item : any, index : Number) => (
          <Investedcard key={index} logo='../icon/ether.png' investedAmount={item} />          
        ))}
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







 