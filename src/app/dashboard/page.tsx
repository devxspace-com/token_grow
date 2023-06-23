'use client';
import {ReactNode, useState} from 'react';
import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout';
import Barchar from './components/chart'
import PieChart from './components/pie';
import Linegraph from './components/Line';



export default function DashboardLayout() {
  const [overview, setOverview] = useState(true);
  const [portfolio, setPortfolio] = useState(false)
const barstyle = {
  backgroundColor: "#FFFFFF",
}
const overViewClick = () =>{
  setOverview(true);
  setPortfolio(false);
}

const portfolioClick = () =>{
  setOverview(false);
  setPortfolio(true);
}


  return (
   <Layout>
     <div className='w-100% flex'> 
          <div className='w-[420px] h-[160px] mt-[104px] ml-[50px] rounded-[12px] text-center border-[#00004C] border-2'>
             Total balance 
          </div>
          <div className="h-[160px] w-[310px] ml-[100px] mt-[104px] rounded-[12px] text-center border-[#00004C] border-2 "> 
          Total spent
          </div>

          <div className='w-[250px] h-[235px] mt-[104px] mx-[100px] rounded-[12px] text-center border-[#00004C] border-2'>
            <div className="h-[200px] w-[220px] mx-auto mt-[5px]">
              Token Allocation
             <PieChart />
            </div>
          </div>
     </div>
     <div className="w-[300px] h-[60px] bg-[#FEF3E5] ml-[75px] rounded-[16px] p-[4px]">
        <div className="flex space-x-[20px] text-center mx-[15px] my-[10px]">
          <div className=" h-[35px] w-[120px] rounded-[16px] p-[5px] cursor-pointer" style= {overview ? barstyle : {}} onClick={overViewClick}>
          <h1 className='text-[#F18500]'>Overview</h1>
          </div>
          <div className=" h-[35px] w-[120px] rounded-[16px] p-[5px] cursor-pointer" style={portfolio ? barstyle : {}} onClick={portfolioClick} >
          <h1 className='text-[#F18500]'>Portfolio</h1>
          </div>
        </div>
     </div>



     <div className="flex h-[700px] w-[1180px] ml-[50px] mt-[20px] mb-[100px] rounded-[12px] bg-[#00004C]">
         {overview && <div className="flex">
          <div className="h-[480px] w-[250px] mt-[20px] ml-[20px] space-y-4"> 
              <h2 className='text-white'>investment</h2>
              <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
                  <div className="flex mx-[10px] pt-[20px] justify-between">
                  <img src='../icon/ether.png' alt='etherImage' className='h-[50px] w-[50px]'/>
                  <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>$20,000</h1>
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

               <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
                  <div className="flex mx-[10px] pt-[20px] justify-between">
                  <img src='../icon/polygon.png' alt='etherImage' className='h-[50px] w-[50px]'/>
                  <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>$18,000</h1>
                  <div>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                  </div>
                  </div>
                <div className="flex space-x-2 mx-[10px] mt-[20px]">
                  <p className='text-[#77E56A]'>+15%</p>
                  <p>This Week</p>
                </div>
              </div>

               <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
                  <div className="flex mx-[10px] pt-[20px] justify-between">
                  <img src='../icon/bitcoin.png' alt='etherImage' className='h-[50px] w-[50px]'/>
                  <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>$12,000</h1>
                  <div>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                  </div>
                  </div>
                <div className="flex space-x-2 mx-[10px] mt-[20px]">
                  <p className='text-[#77E56A]'>+15%</p>
                  <p>This Week</p>
                </div>
              </div>

               <div className="h-[140px] w-[250px] mt-[4px] rounded-[16px] bg-white text-center">
                  <div className="flex mx-[10px] pt-[20px] justify-between">
                  <img src='../icon/binance.png' alt='etherImage' className='h-[50px] w-[50px]'/>
                  <h1 className='font-[600] text-[23px] leading-[26px] mt-[15px]'>$600</h1>
                  <div>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                      <li className='h-[10px]'></li>
                  </div>
                  </div>
                <div className="flex space-x-2 mx-[10px] mt-[20px]">
                  <p className='text-[#77E56A]'>+15%</p>
                  <p>This Week</p>
                </div>
              </div>
          </div>
          <div className="h-[550px] w-[800px] ml-[50px] mt-[20px] space-y-4">
          <h2 className="text-white ">Growth investment</h2>
          <div className="h-[550px] w-[800px] rounded-[12px] text-center bg-white">
              <div className="pt-[50px] h-[450px]">
              <Barchar />
              </div>
          </div>
          </div>
      </div>  }
     {portfolio && <div className="h-[600px] w-[1000px] mx-auto my-[40px] text-white">
          <Linegraph />
      </div>}
      
     </div>
   </Layout>

  )
}







 