"use client"
import React, { useState } from "react";
// import back from "../../../public/icon/back.svg";
import Image from "next/image";
import Review from "../components/review";
import Product from "../components/product";
import Submit from "../components/submit";
import Layout from "@/components/Layout";

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

const BuyInvestment = () => {
  const [showReview, setShowReview] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  // const [showSubmit, setShowSubmit] = useState(false);
  const [price, setPrice] = useState<number | undefined>(undefined);
  console.log('val',price);
  
  const [submittedProduct, setSubmittedProduct] = useState<ProductData | null>(null);

  const handleInvest = (product: ProductData) => {
    setShowReview(true);
    setSubmittedProduct(product);
  };


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
    <Layout>
    <div className="p-2 w-full flex flex-col">
      <div className="cursor-pointer flex ml-10" onClick={handleBack}>
        <img src="../icon/back.svg" alt="back" />
        <p className="font-bold text-[1.3em] ml-3">Back</p>
      </div>

      {!showReview && !showSubmit && <Product invest={()=>setShowReview(true)}/>}
      {showReview && !showSubmit && <Review onBack={handleContinue} price={price} />}
      {!showReview && showSubmit && <Submit product={submittedProduct} investedPrice={price} />}
    </div>
    </Layout>
  );
};

export default BuyInvestment;
