import React from 'react'

const investedCard = (prop : any) => {


  return <div>
  <h2 className='text-white'>investment</h2>
  <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
      <div className="flex mx-[10px] pt-[20px] justify-between">
      <img src={prop.logo} alt='Image' className='h-[50px] w-[50px]'/>
      <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>${prop.investedAmount}</h1>
      <div>
          <li className='h-[10px]'></li>
          <li className='h-[10px]'></li>
          <li className='h-[10px]'></li>
      </div>
      </div>
    <div className="flex space-x-2 mx-[10px] mt-[20px]">
      <p className='text-[#D43D3D]'>-1.5%</p>
      <p>This Week</p>
    </div>
  </div>
  </div>

}

export default investedCard