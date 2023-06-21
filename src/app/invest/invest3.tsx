"use client"
import React, { useState } from "react";
import back from "../../../public/icon/back.svg";
import Image from "next/image";
import Review from "./review";
import Product from "./product";
import Submit from "./submit";

type ProductData = {
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
};

const Invest3 = () => {
  const [showReview, setShowReview] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [submittedProduct, setSubmittedProduct] = useState<ProductData | null>(null);

  const handleInvest = (product: ProductData) => {
    setShowReview(true);
    setSubmittedProduct(product);
  };

//   console.log('price: ',price)
//   console.log('sibmitted product',submittedProduct)
//   console.log(price)

const handleContinue = (investedPrice: number | undefined) => {
    setShowSubmit(true);
    setShowReview(false);
    setPrice(investedPrice);
  };
  

  const handleBack = () => {
    if (showSubmit) {
      setShowSubmit(false);
      setShowReview(true);
    } else if (showReview) {
      setShowReview(false);
    }
  };

  return (
    <div className="p-2 w-full flex flex-col">
      <div className="cursor-pointer flex ml-10" onClick={handleBack}>
        <Image src={back} alt="back" />
        <p className="font-bold text-[1.3em] ml-3">Back</p>
      </div>

      {!showReview && !showSubmit && <Product onInvest={handleInvest} />}
      {showReview && !showSubmit && <Review onBack={handleContinue} price={price} />}
      {!showReview && showSubmit && <Submit product={submittedProduct} investedPrice={price} />}
    </div>
  );
};

export default Invest3;
