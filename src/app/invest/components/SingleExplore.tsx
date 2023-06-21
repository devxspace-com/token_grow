

export default function SingleExplore() {
  return (
    <section>
        <div className="py-[32px] pl-[20px] flex gap-[36px] bg-[#FFFFFF] rounded-xl w-[50%] mb-[8px]">
            <img src="../Frame 227.png" alt="item name" className="w-[200px] h-[200px] rounded-xl" />

            <div className="flex flex-col">
                <h2 className="text-[20px] leading-7 tracking-[0.03em] font-semibold">Garri Processing Investment</h2>
                <p className="text-[12px] font-[400] leading-4 tracking-[0.03em]">
                    <span className="text-[#8acf8a]">20%</span> returns in 6 months
                </p>

                <div className="flex justify-between mt-[36px]">
                    <div className="">
                        <h2 className="text-[16px] font-[400] leading-6 tracking-[0.03em]">500 USDT</h2>
                        <p className="text-[12px] leading-4 tracking-[0.03em] mt-[4px]">per units</p>
                    </div>
                    <div className="">
                        <h2 className="text-[16px] font-[400] leading-6 tracking-[0.03em]">1000</h2>
                        <p className="text-[12px] leading-4 tracking-[0.03em] mt-[4px]">Investors</p>
                    </div>
                   
                </div>
                    <button className="text-[16px] font-[500] leading-5 tracking-[0.03em] w-[72px] h-[24px] rounded-lg mt-[22px] bg-[#F18500] text-[#FFFFFF]">Invest</button>
            </div>
        </div>
    </section>
  )
}
