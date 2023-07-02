"use client"

import useGetInvestment from "../hooks/useGetInvestment";
import SingleExplore from "./SingleExplore";



export default function ActiveExplore() {
  const {data, isLoading, isError} = useGetInvestment();

//   const combinedData:any =  data[0].map((_:any, index:any) =>
//   data.map((arr:any) => arr[index])
// );


const combinedData: unknown[][] = (data as unknown[][])?.[0]?.map((_, index) =>
  (data as unknown[][]).map((arr) => arr[index])
) || [];


  
  return(
    
    <section className="mt-[28px]">
      <div className="">
        {
          isLoading ?
        <div className="">

      <div className="w-[50%] h-[200px]  rounded-lg bg-[#c0c0f0]">  
     
      
      </div>
      <div className="mt-2 w-[50%] h-[200px]  rounded-lg bg-[#c0c0f0]">  
     
      
      </div>
        </div>
        :
        <div className="">

          {
            
            combinedData.slice(0, 2).map((values:any, index:Number)=> {
    
            return (
          
              
              <SingleExplore id={Number(values[0])} percent={Number(values[2])} time={Number(values[6])} tokenId={Number(values[1])} uriId={Number(values[0])} investor={Number(values[5])} />
             
    
            
            )
           })
          }
        </div>

        }

      </div>
    </section>
  )
  
}
