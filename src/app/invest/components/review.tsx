import React, { useState } from "react";

type ReviewProps = {
    onBack: (investedPrice: number | undefined) => void;
    price: number | undefined;
  };

const Review = ({ onBack, price }: ReviewProps) => {
  const [investedPrice, setInvestedPrice] = useState<number | undefined>(undefined);


  const handleContinue = () => {
    
    setInvestedPrice(price);
    onBack(investedPrice);

    
  };

  return (
    
      <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-[115px] text-white min-h-[80vh]">
        <div className="flex w-[90%] mx-auto gap-28">

        <div className="text-white w-[38%]">
          <h1 className="text-4xl headingTag font-semibold tracking-[0.468px]">
            How much would you like to invest in this?
          </h1>
        </div>
        <div className="flex flex-col text-white w-[50%]">
          <div className="form border border-orange-400 relative flex justify-normal mb-4 rounded-lg">
            <p className="absolute -top-[1em] bg-[#000019] left-1 text-[0.7em] text-white">
              Amount in Tether USDT
            </p>
            <input
              type="number"
              name="number"
              id="number"
              className="border-none text-white p-3 active:border-none w-full focus:border-none outline-none bg-transparent"
              onChange={(e) => setInvestedPrice(Number(e.target.value))}
            />
          </div>
          <p className="text-[16px] leading-5 tracking-[0.208px] font-normal">The Tether amount specified is converted to units</p>
          <p className="text-[20px] leading-6 tracking-[0.26px] font-normal">1 USDT = 1 Units</p>

          <div className="mt-8">
            <button
              className="bg-[#F18500] float-right items-end justify-end px-4 py-2 flex flex-grow rounded-xl text-[16px] leading-5 tracking-[0.208px] font-normal"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Review;
