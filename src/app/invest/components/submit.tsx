/** @format */
import {useAccount, useContractRead, useContractWrite} from 'wagmi'
import { TokenGrowAddr, Token } from '@/constant/contract';
import tokenGrow from '../../../abi/tokenGrow.json'
import token from '../../../abi/token.json'
import { useParams } from 'next/navigation';
import useGetSingleInvestment from '../hooks/useGetSingleInvestment';
import useFetchURiDetails from '../hooks/useFetchURiDetails';
import useReadUri from '../hooks/useReadUri';

type SubmitProps = {
  product: {
    expectedReturns: string;
    investmentType: string;
    offerClosingDate: string;
    maturityDate: string;
    payoutType: string;
    unitType: string;
    insurancePartner: string;
    farmingCycleType: string;
    farmLocation: string;
    name: string;
  } | null;
  investedPrice: number | undefined;
};

const Submit = ({ product, investedPrice }: SubmitProps) => {

  const {address} = useAccount();
  const {id} = useParams();
  const {data, isLoading, isError} = useGetSingleInvestment(Number(id));
  const {data:readuri} = useReadUri(Number((data as unknown[])?.[2]))
  const {data:fetchD} = useFetchURiDetails(String(readuri));
  console.log('fetchD',fetchD);
  console.log('dataddddd',data);
  

  
  // Calculate the units and service fee
  const units = investedPrice ? Math.floor(investedPrice / 1) : 0;
  const serviceFee = investedPrice ? investedPrice * 0.02 : 0;

  const amount = ((investedPrice ? investedPrice : 0) + serviceFee) * 10**18
  const {write} =useContractWrite({
    address:TokenGrowAddr,
    abi:tokenGrow,
    functionName: 'buyAnInvestment',
    args: [amount, Number((data as unknown [])?.[1]),address],
    onSuccess(data) {
      window.location.replace('http://localhost:3000/invest');
    }
  })
  const {write:ApproveT} =useContractWrite({
    address:Token,
    abi:token,
    functionName: 'approve',
    args: [TokenGrowAddr,amount]
  })
  const { data:readAllow } = useContractRead({
    address: Token,
    abi: token,
    functionName: 'allowance',
    args:[address, TokenGrowAddr]
  })

  // console.log("read",Number(readAllow));
  const epochTime = Number((data as unknown[])?.[8]);

const currentDate = new Date();
const timestamp = (epochTime as number) * 1000; // Cast 'time' to 'number'
const diffInMonths = ( timestamp - currentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);

  const handleSubmit = ()=>{
    if( Number(readAllow) >= amount){

      write()
    }
    else{

      ApproveT()
    }
  }

  return (
    <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-10 text-white min-h-[80vh]">
      <div className="justify-between w-[95%] ml-auto  flex gap-[100px]">
        <div className="text-white w-[30%]">
          <h1 className="text-4xl headingTag font-semibold tracking-[0.468px]">Review Investment Plan</h1>
        </div>

        <div className="flex flex-col text-white w-[50%] mr-[10%]">
          <div className="flex flex-col w-full ">
            <h1 className="text-[20px] leading-6 font-medium tracking-[0.26px]">
              {fetchD?.title}
            </h1>
            <p className="text-[12px] font-normal leading-4 tracking-[0.156px]">
              <span className="text-green-700">
               {Number((data as unknown[])?.[3])}%
                </span> returns in {Math.floor(diffInMonths)} months
            </p>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex mt-5 gap-32 w-full ">
              {" "}
              <p className='text-[16px] leading-5 font-bold tracking-[0.208px]'>Amount: </p> 
              <p className='text-[16px] leading-5 font-normal tracking-[0.208px]'>
                {investedPrice} USDT</p>
            </div>
            <div className="flex mt-5 gap-12 w-full ">
              <p className='text-[16px] leading-5 font-bold tracking-[0.208px]'>Processing Fee (2%): </p> 
              <p className='text-[16px] leading-5 font-normal tracking-[0.208px]'>
                {serviceFee.toFixed(2)} USDT</p>
            </div>
            <div className="flex mt-5 gap-[156px] w-full ">
              <p className='text-[16px] leading-5 font-bold tracking-[0.208px]'>Units: </p>
               <p className='text-[16px] leading-5 font-normal tracking-[0.208px]'>
                {units} units</p>
            </div>
            <div className="flex mt-5 gap-[156px] w-full ">
              <p className='text-[16px] leading-5 font-bold tracking-[0.208px]'>Total: </p>{" "}
              <p className='text-[16px] leading-5 font-normal tracking-[0.208px]'>
                {investedPrice ? investedPrice + serviceFee : 0} USDT</p>
            </div>
          </div>

          <div  className="mt-8 w-full">
          {
            Number(readAllow) >= amount ?
            <button onClick={handleSubmit} className="ml-[190px] bg-[#F18500]   px-4 py-1 flex flex-grow rounded-xl">
              Confirm
            </button>
            :
            <button onClick={handleSubmit} className="ml-[190px] bg-[#F18500]  px-4 py-1 flex flex-grow rounded-xl">
              Approve
            </button>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
