import React, { useState } from "react";

type ProductProps = {
  onInvest: (product: any) => void;
};

const Product = ({ onInvest }: ProductProps) => {
  const [productValues, setProductValues] = useState<any>({
    expectedReturns: "20%",
    investmentType: "Fixed Income",
    offerClosingDate: "tbd",
    maturityDate: "tbd",
    payoutType: "Capital + Profit is paid at maturity",
    unitType: "Units can be sold anytime to others",
    insurancePartner: "Leadway Insurance",
    farmingCycleType: "6 months",
    farmLocation: "Ijebu, Ogun State",
    name: 'Garri Processing Investment',
  });

  const handleInvest = () => {
    // Pass the product values to the onInvest function
    onInvest(productValues);
  };

  return (
    <div>
      <div className="rounded-lg contact_bg w-[98%] mt-5 m-auto flex flex-col p-5">
        <div className="flex top text-white m-auto w-[90%] items-start ">
          <div className="profile">
            <img src="../Frame 227.png" alt="" className="rounded-full h-[8em] w-[8em]"/>
          </div>
          <div className="text flex flex-col ml-4">
            <h1 className="text-[1.5em]">{productValues.name}</h1>
            <p className="text-[0.8em]">
              <span className="text-green-700">{productValues.expectedReturns}</span> in {productValues.farmingCycleType}
            </p>
            <div className="justify-between mt-5 flex">
              <p className="text-left">
                500 USDT <br />
                per units
              </p>
              <p className="text-left">
                1000
                <br />
                investors
              </p>
            </div>
          </div>
          <div className="button ml-[3em]">
            <button
              className="bg-[#F18500] px-4 py-2 rounded-xl"
              onClick={handleInvest}
            >
              Invest
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-[80%] mt-8 m-auto justify-between text-white">
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Expected Returns</h1>
            <p>{productValues.expectedReturns} in 6 months</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Investment Type</h1>
            <p>{productValues.investmentType}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Offer Closing Date</h1>
            <p>{productValues.offerClosingDate}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Maturity Date</h1>
            <p>{productValues.maturityDate}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Pay-Out Type</h1>
            <p>{productValues.payoutType}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Unit Type</h1>
            <p>{productValues.unitType}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Insurance Partner</h1>
            <p>{productValues.insurancePartner}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Farming/Production Cycle Type</h1>
            <p>{productValues.farmingCycleType}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] p-1 flex flex-col">
            <h1>Farm Location</h1>
            <p>{productValues.farmLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
