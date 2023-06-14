/** @format */

import React from "react";

export default function HeroPage() {
  return (
    <main className="relative">
      <section className="flex mt-[100px] relative ">
        
        <div className="ml-[184px] smDesktop:ml-[90px] tabletAir:ml-[60px] smDesktop:z-[1] relative mobile:ml-0">
          <h1 className="w-[745px] text-[56px] surfaceDuo:text-[24px] mobile:text-[24px] tabletAir:w-[100%] tabletAir:leading-[60px] smDesktop:text-[48px] leading-[73px] tracking-[0.03em] text-[#FFFFFF] headingTag font-[800] mobile:leading-8 mobile:w-[90%] mobile:mx-auto mobile:text-center">
            The Future Of Agricultural Investment Is Here
          </h1>
          <p className="w-[403px] mt-[28px] tabletAir:mt-[16px] text-[16px] font-[400] leading-5 tracking-[0.03em] text-[#FFFFFF] mobile:w-[90%] mobile:mx-auto mobile:mt-[320px] ">
            Enhancing sustainable food solution with the power of blockchain.
            Improving Agricultural finanaing, Save investment, Food processing
            and overall Insurance
          </p>
          <div className="mt-[28px] flex gap-[30px] mobile:w-[80%] mobile:gap-[12px] mobile:mx-auto">
            <div className="bg-[#FFFFFF] rounded-lg mr-[160px] hover:bg-[#F18500] cursor-pointer w-[144px]">
              <p className="text-[16px] leading-5 font-medium tracking-[0.013em] text-center py-[5.5px] text-[#F18500] hover:text-[#FFFFFF]">
                Get Started
              </p>
            </div>

            <div className="flex gap-1 relative z-[1] ml-[-140px] items-center">
                <p className="text-[16px] leading-5 font-[500] tracking-[0.03em] text-[#F18500] ">Learn more</p>
                <img src="./icon/Vector.png" alt="" className="w-[12px] h-[14px]" />
            </div>
          </div>
        </div>

        <div className="absolute w-[760px] h-[520px] smDesktop:w-[660px] smDesktop:h-[420px] top-[-48px] tabletAir:w-[100%] tabletAir:left-0 tabletAir:right-0 surfaceDuo:w-[100%] surfaceDuo:right-0 surfaceDuo:left-[44px] right-[70px] mobile:top-[60px] mobile:w-[90%] mobile:mx-auto mobile:h-[300px]">
          <img src="./image6.png" alt="" className="w-[100%] h-[100%]" />
        </div>
      </section>
    </main>
  );
}
