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

  console.log(combinedData)

  return(

    <section className="mt-[28px]">
      <div className="">

      {
       
       combinedData.map((values:any, index:Number)=> (
      
          
          <SingleExplore id={Number(values[0])} percent={Number(values[2])} time={Number(values[6])} tokenId={Number(values[1])} uriId={Number(values[0])} investor={Number(values[5])}/>
         

        
        ))
      }
      </div>
      
        {/* <SingleExplore/> */}
    </section>
  )
  
}
