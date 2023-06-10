import Link from "next/link";


export default function Navbar() {
  return (
    <main className="">
        <div className=" w-[100%]">
            <div className="pt-[48px] ml-[69px] flex gap-[300px] smDesktop:gap-[100px]   tabletAir:gap-[0px] items-center">
                <h2 className="text-[28px] leading-5 font-bold text-[#FFFF] logo ">Grow<span className="text-[#F18500]">Token</span></h2>

                <div className="flex justify-between w-[100%] ">
                    <div className="flex items-center gap-6">
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Home</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Impact</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Hashgraph</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">About Us</Link>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-lg mr-[160px] smDesk:mr-[80px] tabletAir:mr-[40px] hover:bg-[#F18500] cursor-pointer">
                        <p className="text-[16px] leading-5 font-medium tracking-[0.013em] px-[17.5px] py-[5.5px] text-[#F18500] hover:text-[#FFFFFF]">Get Started</p>
                    </div>
                </div>
            </div>

        </div>
        {/* /mobile drop down */}
        {/* <div className="flex flex-col  ">
     <div className="flex flex-col gap-6">
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Home</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Impact</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">Hashgraph</Link>
    <Link href="" className="font-[600] text-[16px] leading-5 tracking-[0.013em] text-[#FFFFFF] hover:text-[#F18500] ">About Us</Link>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-lg hover:bg-[#F18500] cursor-pointer w-[100px] mt-6">
                        <p className="text-[16px] leading-5 font-medium tracking-[0.013em]  py-[5.5px] text-center text-[#F18500] hover:text-[#FFFFFF]">Get Started</p>
                    </div>
                </div> */}
    </main>
  )
}
