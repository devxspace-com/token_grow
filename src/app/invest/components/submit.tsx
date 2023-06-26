/** @format */
import {useAccount, useContractRead, useContractWrite} from 'wagmi'
import { TokenGrowAddr, Token } from '@/constant/contract';
import tokenGrow from '../../../abi/tokenGrow.json'
import token from '../../../abi/token.json'
import { useParams } from 'next/navigation';
import useGetSingleInvestment from '../hooks/useGetSingleInvestment';

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
  console.log('ddd',data);
  
  // Calculate the units and service fee
  const units = investedPrice ? Math.floor(investedPrice / 1) : 0;
  const serviceFee = investedPrice ? investedPrice * 0.02 : 0;

  const amount = ((investedPrice ? investedPrice : 0) + serviceFee) * 10**18
  const {write} =useContractWrite({
    address:TokenGrowAddr,
    abi:tokenGrow,
    functionName: 'buyAnInvestment',
    args: [amount, Number(data[1]),address]
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


  const handleSubmit = ()=>{
    if( readAllow >= amount){

      write()
    }
    else{

      ApproveT()
    }
  }

  return (
    <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-10 text-white min-h-[80vh]">
      <div className="justify-between flex gap-[10em]">
        <div className="text-white w-full m-auto">
          <h1 className="text-[3em]">Review Investment Plan</h1>
        </div>

        <div className="flex flex-col text-white m-auto w-[90%] items-center justify-center">
          <div className="flex flex-col w-full ">
            <h1 className="text-[1.2em]">
              {/* {product.name} */}
              Garri Processing Investment
            </h1>
            <p className="text-[0.9em]">
              <span className="text-green-700">
                {/* {product.expectedReturns} */}20%
                </span>{" "}
              in 
              {/* {product.farmingCycleType} */}
              6 months
            </p>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex mt-6 justify-between w-full ">
              {" "}
              <p>Amount: </p> <p>
                {investedPrice} USDT</p>
            </div>
            <div className="flex mt-6 justify-between w-full ">
              <p>Processing Fee (2%): </p> 
              <p>
                {serviceFee.toFixed(2)} USDT</p>
            </div>
            <div className="flex mt-6 justify-between w-full ">
              <p>Units: </p> <p>
                {units} units</p>
            </div>
            <div className="flex mt-6 justify-between w-full ">
              <p>Total: </p>{" "}
              <p>
                {investedPrice ? investedPrice + serviceFee : 0} USDT</p>
            </div>
          </div>

          <div  className="mt-8 w-full">
          {
            readAllow >= amount ?
            <button onClick={handleSubmit} className="bg-[#F18500] float-right items-end justify-end px-6 py-3 flex flex-grow rounded-xl">
              Confirm
            </button>
            :
            <button onClick={handleSubmit} className="bg-[#F18500] float-right items-end justify-end px-6 py-3 flex flex-grow rounded-xl">
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
