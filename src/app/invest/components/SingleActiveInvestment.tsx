import useFetchURiDetails from '../hooks/useFetchURiDetails';
import useReadUri from '../hooks/useReadUri';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { TokenGrowAddr } from '@/constant/contract';
import tokenGrow from "../../../abi/tokenGrow.json";
import { Skeleton } from 'antd';

export default function SingleActiveInvestment(props:any) {
    const {address} = useAccount();
    const endTime = props.time;

    const date = new Date(endTime * 1000); // Convert epoch time to milliseconds by multiplying with 1000

const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit"
  });

  const {data:uriD, isLoading:uriLoading, isError:uriError} = useReadUri(props.nftid);
 const {data:NFT, isLoading:nftLoad, isError:nftIserror} = useFetchURiDetails(String(uriD));
console.log("NFTaa", NFT);

const {data:profTime} = useContractRead({
    address: TokenGrowAddr,
    abi: tokenGrow,
    functionName: 'getProfitWithTime',
    args: [props.indId, address],
  })

  const startTime = Number((profTime as unknown [])?.[1]);
  console.log("startTime", startTime);
  
  const startdate = new Date(startTime * 1000); // Convert epoch time to milliseconds by multiplying with 1000

  const formattedStartDate = startdate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit"
    });
  
    const { write } = useContractWrite({
        address: TokenGrowAddr,
        abi: tokenGrow,
        functionName: 'withDrawInvestment',
        args:[props.indId, address]
    
      })
    
      const handleWithdraw = () =>{
        // e.preventDefault()
        write();
      }
      const currentEpochTime = Date.now();

  return (
    <section key={props.idx}>
        
        <section className="w-[90%] smDesktop:w-[100%] mx-auto bg-[#000019] rounded-lg text-[#FFFFFF] mb-[8px]">

<div className="w-[98%] smDesktop:flex-wrap smDesk:flex-1 smDesk:flex-grow pt-[10px] pb-[10px] mx-auto flex justify-between items-center ">

        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[16px] leading-5 tracking-[0.03em]">{ nftLoad? "loading...": NFT?.title}</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Invested: {props.amInvested/1e18} USDT</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">{startTime === 0 ? "Not started" : formattedStartDate}</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Start Date</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">{formattedDate}</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">End Date</p>
        </div>
        <div className="border-r-[1px] border-[#ccccff] pr-[8px]">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">{(props.amInvested/1e18) + (Number((profTime as unknown [])?.[0])/1e18)} USDT</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Total Return</p>
        </div>
        <div className=" ">
            <h2 className="font-[400] text-[12px] leading-4 tracking-[0.03em]">{Number((profTime as unknown [])?.[0])/1e18} USDT</h2>
            <p className="text-[12px] font-[300] leading-4 tracking-[0.03em] mt-[8px]">Net Profit</p>
        </div>
       
        <div onClick={handleWithdraw} className={`${currentEpochTime !>= endTime && 'pointer-events-none'} border-l-[1px] border-[#ccccff] pl-[32px] cursor-pointer text-[grey]`}>
            <h2 className={` text-[16px] leading-5 font-[400] px-[10px] py-[4px] border-[1px] rounded-lg border-[#F18500] mt-[8px]`}>Withdraw Fund</h2>
        </div>
</div>
        </section>
    </section>
  )
}
