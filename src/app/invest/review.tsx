import React, { useState } from "react";

type ReviewProps = {
    onBack: (investedPrice: number | undefined) => void;
    price: number | undefined;
  };

const Review = ({ onBack, price }: ReviewProps) => {
  const [investedPrice, setInvestedPrice] = useState<number | undefined>(undefined);
//   console.log(investedPrice)

  const handleContinue = () => {
    // Validate input and perform any necessary checks before proceeding
    setInvestedPrice(price);
    onBack(investedPrice);

    // Pass the product information to the next component or perform any desired action
  };

  return (
    <div>
      <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex p-10">
        <div className="text-white w-[40%] m-auto">
          <h1 className="text-4xl">
            How much would you like to invest in this?
          </h1>
        </div>
        <div className="flex flex-col text-white">
          <div className="form border border-orange-400 relative flex justify-normal mb-4">
            <p className="absolute -top-[1em] bg-[#000019] left-1 text-[0.7em] text-white">
              Amount in Tether USDT
            </p>
            <input
              type="number"
              name="number"
              id="number"
              className="border-none text-white p-3 active:border-none focus:border-none outline-none bg-transparent"
              onChange={(e) => setInvestedPrice(Number(e.target.value))}
            />
          </div>
          <p>The Tether amount specified is converted to units</p>
          <p>5000 USDT = 10 Units (500 USDT = 1 Unit)</p>

          <div className="mt-8">
            <button
              className="bg-[#F18500] float-right items-end justify-end px-3 flex flex-grow rounded-xl"
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
