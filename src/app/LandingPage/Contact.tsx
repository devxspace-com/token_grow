/** @format */

import React from "react";

export default function Contact() {
  return (
    <main>
      <section className="mt-[28px] contact_bg pb-[28px]">
        <h5 className="font-bold text-[24px] pt-[28px] leading-8 tracking-[0.03em] text-white ml-[70px] mobile:w-[90%] mobile:mx-auto">
          Contact
        </h5>

        <section>
          <form>
            <section className="flex w-[50%] smDesktop:w-[60%] smDesk:w-[70%] tablet:w-[80%] mobile:flex-col mx-auto justify-between">

            <section className="">
              <div className="">
                <label
                  htmlFor=""
                  className="text-[16px] font-[500] leading-[21px] tracking-[0.03em] text-[#FFFFFF] mb-3"
                >
                  Name
                </label>
                <br />
                <input
                  type="text"
                  className="border-b-[1px] bg-[transparent] outline-none text-[#FFFFFF] text-[16px] w-[250px]"
                />
                <p className="font-[300] text-[12px] leading-4 tracking-[0.03em] text-[#f9f9f9]">
                  Example: Jean Disney
                </p>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="text-[16px] font-[500] leading-[21px] tracking-[0.03em] text-[#FFFFFF] mb-3"
                >
                  Email address
                </label>
                <br />
                <input
                  type="text"
                  className="border-b-[1px] bg-[transparent] outline-none text-[#FFFFFF] text-[16px] w-[250px]"
                />
                <p className="font-[300] text-[12px] leading-4 tracking-[0.03em] text-[#f9f9f9]">
                Example: @gmail.com
                </p>
              </div>

              <div className="mt-4 mobile:w-[50%] mobile:mx-auto">
              <label
                  htmlFor=""
                  className="text-[16px] font-[500] leading-[21px] tracking-[0.03em] text-[#FFFFFF] mb-3 "
                >
                  Verification
                </label>
                <div className="flex gap-2 items-center ">
                    <input type="checkbox" name="" id="" className="border-[1px] bg-[transparent] w-6 h-6" />
                    <p className="font-[400] text-[16px] leading-[21px] tracking-[0.03em] text-[#FFFFFF]">I’m not a robot</p>
                </div>
              </div>
            </section>

            <section className="border-l-[1px] pl-[20px] mobile:border-l-0 mobile:pl-0"> 
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="text-[16px] font-[500] leading-[21px] tracking-[0.03em] text-[#FFFFFF] mb-3"
                >
                  Message
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  placeholder="Write text here..."
                  className="bg-[transparent] outline-none text-[#FFFFFF] border-[1px] rounded-lg"
                />
              </div>
              <div className="flex justify-end">

              <button className="w-[96px] h-[32px] bg-[#FFFFFF] rounded-lg font-medium text-[16px] leading-[21px] tracking-[0.03em] text-[#F18500]   mt-[20px] ">
                Send
              </button>
              </div>
            </section>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
}
