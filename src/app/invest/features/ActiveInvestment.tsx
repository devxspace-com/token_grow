import React from 'react'
import MyInvestment from '../components/MyInvestment'
import ActiveExplore from '../components/ActiveExplore'
import Link from 'next/link'

export default function ActiveInvestment() {
  return (
    <main>
        <section className='w-[96%] mx-auto border-[1px] rounded-lg border-[#000019] pb-[20px]'>
            <section className="w-[96%] mx-auto">

    <h2 className="text-[24px] font-bold tracking-[0.03em] leading-8 mt-2 mb-[70px] text-[#000019]">
    Active Investments
    </h2>
        <MyInvestment/>
            </section>
        </section>

        {/* Explore */}
        <section className='w-[96%] mx-auto mt-[50px]'>
            <div className="flex gap-2 items-center">
                <h2 className=" font-bold text-[24px] tracking-[0.03em] leading-8">
                Explore Investments
                </h2>
                <Link href="/invest/explore">

                <img src="./icon/arrow-left.svg" alt="left-icon" className='w-[24px] h-[24px]' />
                </Link>
            </div>
            <ActiveExplore/>
        </section>
    </main>
  )
}
