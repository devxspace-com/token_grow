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
    
      <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-10 text-white min-h-[80vh]">
        <div className="text-white w-[60%] m-auto flex mr-48">
          <h1 className="text-4xl">
            How much would you like to invest in this?
          </h1>
        </div>
        <div className="flex flex-col text-white m-auto w-[60%]">
          <div className="form border border-orange-400 relative flex justify-normal mb-4">
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
          <p>The Tether amount specified is converted to units</p>
          <p>5000 USDT = 10 Units (500 USDT = 1 Unit)</p>

          <div className="mt-8">
            <button
              className="bg-[#F18500] float-right items-end justify-end px-4 py-2 flex flex-grow rounded-xl"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
  );
};

export default Review;
