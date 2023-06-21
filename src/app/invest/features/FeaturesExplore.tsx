import Link from "next/link";

import ActiveExplore from "../components/ActiveExplore";
import InvestmentExplore from "../components/InvestmentExplore";


export default function FeaturesExplore() {
  return (
    <section className='w-[96%] mx-auto mt-[50px]'>
    <div className="flex gap-4 items-center">
    <Link href="/invest">

<img src="../icon/Vector.svg" alt="left-icon" className='w-[24px] h-[24px]' />
</Link>
        <h2 className=" font-bold text-[24px] tracking-[0.03em] leading-8">
        Explore Investments
        </h2>
      
    </div>
   <InvestmentExplore/>
</section>
  )
}
