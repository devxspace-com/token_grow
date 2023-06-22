import React from "react";

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
  if (!product) {
    console.log('error is here');
    return <div className="bg-black">No product data available</div>;
  }

  console.log('product is:', product);
  console.log('test test', investedPrice);

  // Calculate the units and service fee
  const units = investedPrice ? Math.floor(investedPrice / 500) : 0;
  const serviceFee = investedPrice ? investedPrice * 0.02 : 0;

  return (
    <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-10 text-white min-h-[80vh]">
        <div className="justify-between flex gap-[10em]">
      <div className="text-white w-full m-auto">
        <h1 className="text-[3em]">Review Investment Plan</h1>
      </div>

      <div className="flex flex-col text-white m-auto w-full">
        <h1>{product.name}</h1>
        <p className="text-[0.8em]">
          <span className="text-green-700">{product.expectedReturns}</span> in {product.farmingCycleType}
        </p>
        {investedPrice && (
          <div>
            <p>Amount: {investedPrice} USDT</p>
            <p>Processing Fee (2%): {serviceFee.toFixed(2)} USDT</p>
            <p>Units: {units}</p>
            <p>Total: {investedPrice + serviceFee} USDT</p>
          </div>
        )}
      <div className="mt-8">
        <button className="bg-[#F18500] float-right items-end justify-end px-3 flex flex-grow rounded-xl">
          Confirm
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Submit;
