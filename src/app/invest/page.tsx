import Layout from '@/components/Layout'
import React from 'react'
import search from '../../../public/icon/search.svg'
import Image from 'next/image'
// import Invest3 from './buyInvestment/page'
import ActiveInvestment from './features/ActiveInvestment'
import ConnectBtn from '@/components/ConnectBtn'

export default function Invest() {
  return (
    <Layout>
    <div className='bg-[#CCCCFF] flex flex-col'>
       <div className="top p-10 items center m-auto flex">
        <div className='relative'>
        <input type="search" name="search" id="search" placeholder='search' className='rounded-xl px-8 w-[400px] py-2' />
        <Image src={search} alt='' className='absolute bottom-[25%] w-[1.5rem]' />
        </div>
      </div>
      <ConnectBtn/>
    </div>
  <ActiveInvestment/>
    </Layout>
  )
}
