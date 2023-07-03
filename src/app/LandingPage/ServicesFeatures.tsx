import React from 'react'

export default function ServicesFeatures() {
  return (
    <main>
        <section className="mt-[250px] mobile:mt-[50px]">
            <h5 className="font-[700] text-[#FFFFFF] text-[24px] leading-8 tracking-[0,03em] ml-[70px] headingTag tabletAir:ml-[42px] mobile:w-[90%] mobile:mx-auto">Our Services</h5>

            <section className=" flex mt-[24px] w-[80%] mx-auto justify-between smDesktop:w-[90%] tabletAir:flex-wrap">
                <div className="w-[200px] bg-[#FFFFFF] rounded-lg pt-[70px] tabletAir:w-[300px] mobile:w-[90%] mobile:mx-auto">
                   

                    <img src="../icon/Vector1.png" alt="" className='w-[48px] h-[48px] mx-auto ' />

                    <p className="font-[400] mt-[44px] text-[16px] leading-[21px] text-center tracking-[0.03em] pb-[13px] w-[90%] mx-auto">We locate Agricultural investments all around the globe</p>
                  
                </div>
                <div className="w-[200px] mt-[20px] bg-[#FFFFFF] rounded-lg pt-[70px] tabletAir:w-[300px] mobile:w-[90%] mobile:mx-auto">
                   

                    <img src="../icon/arcticons_invest.png" alt="" className='w-[48px] h-[48px] mx-auto ' />

                    <p className="font-[400] mt-[44px] text-[16px] leading-[21px] text-center tracking-[0.03em] pb-[13px] w-[90%] mx-auto">we make the investments accessile to investors on our platform.</p>
                  
                </div>
                <div className="w-[200px] tabletAir:w-[300px] tabletAir:mt-[20px] bg-[#FFFFFF] rounded-lg pt-[70px] mobile:w-[90%] mobile:mx-auto">
                   

                    <img src="../icon/Group.png" alt="" className='w-[48px] h-[48px] mx-auto ' />

                    <p className="font-[400] text-[16px] leading-[21px] text-center mt-[44px] tracking-[0.03em] pb-[13px] w-[90%] mx-auto">With the power of our communities funding capacity</p>
                  
                </div>
                <div className="w-[200px] tabletAir:w-[300px] mt-[20px] tabletAir:mt-[40px] bg-[#FFFFFF] rounded-lg pt-[70px] mobile:w-[90%] mobile:mx-auto">
                   

                    <img src="../icon/arcticons_money-manager.png" alt="" className='w-[48px] h-[48px] mx-auto ' />

                    <p className="font-[400] text-[16px] leading-[21px] text-center mt-[44px] tracking-[0.03em] pb-[13px] w-[90%] mx-auto">We manage the distribution of profit of participating investors</p>
                  
                </div>
            </section>
        </section>

        <section className="w-[35%] lgDesktop:w-[40%] smDesktop:w-[50%] tabletAir:w-[70%] mobile:w-[90%] mx-auto mt-[86px] flex gap-4 mobile:flex-col">
            <div className="w-[361px] mobile:w-[90%] mobile:mx-auto mobile:text-center">
                <h6 className="font-[500] text-[20px] mobile:text-[16px] leading-[26px] tracking-[0.03em] text-[#FFFFFF]">
                HOW TO INVEST IN AGRICULTURE ON GROWTOKEN PLATFORM
                </h6>
            </div>
            <div className="flex gap-1 relative z-[1] items-center mobile:justify-center">
                <p className="text-[16px] leading-5 font-[500] tracking-[0.03em] text-[#F18500] ">Learn more</p>
                <img src="./icon/Vector.png" alt="" className="w-[12px] h-[14px]" />
            </div>
        </section>
        </main>
  )
}
