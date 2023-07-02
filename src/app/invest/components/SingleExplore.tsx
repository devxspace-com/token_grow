import Link from "next/link";
import useReadUri from "../hooks/useReadUri";
import useFetchURiDetails from "../hooks/useFetchURiDetails";
import { Skeleton } from "antd";


export default function SingleExplore(props:any) {

   
    


    const currentDate = new Date();
  const timestamp = props.time * 1000;
  const diffInMonths = (timestamp - currentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);

  const {data} = useReadUri(props.tokenId)

  
  console.log('dataArray','dataArray');
  console.log('props.tokenId',props.tokenId);
  console.log('data',data);
  
  const {data:fetchD, isLoading, isError} = useFetchURiDetails(data as string);

  console.log('fetchD',fetchD);
//   console.log('prop', fetchD?.properties?.image?.description);
  
  console.log('uri',data);
  
 
  
  
  return (
    <section key={props.id} className="w-[100%]">
        <div className="py-[32px] pl-[20px] flex gap-[36px] bg-[#FFFFFF] rounded-xl w-[50%] lgDesktop:w-[60%] smDesktop:w-[78%] smDesk:w-[90%] tabletAir:w-[100%] tabletAir:pr-5 mb-[8px]">
            <div className="">

        {isLoading ?
        <Skeleton.Image active />
        :
        <img src={`https://${fetchD?.properties?.image?.description}.ipfs.nftstorage.link`} alt={fetchD?.title} className="w-[200px] h-[200px] rounded-xl" />
        
        }
            </div>

            <div className="flex flex-col">
                <h2 className="text-[20px] leading-7 tracking-[0.03em] font-semibold">{isLoading ?"Loading..." : fetchD?.title}</h2>
                <p className="text-[12px] font-[400] leading-4 tracking-[0.03em]">
                    <span className="text-[#8acf8a]">{props.percent}%</span> returns in {Math.floor(diffInMonths)} months
                </p>

                <div className="flex justify-between mt-[36px]">
                    <div className="">
                        <h2 className="text-[16px] font-[400] leading-6 tracking-[0.03em]">1 USDT</h2>
                        <p className="text-[12px] leading-4 tracking-[0.03em] mt-[4px]">per units</p>
                    </div>
                    <div className="">
                        <h2 className="text-[16px] font-[400] leading-6 tracking-[0.03em]">{props.investor}</h2>
                        <p className="text-[12px] leading-4 tracking-[0.03em] mt-[4px]">Investors</p>
                    </div>
                   
                </div>
                    <Link href={`/invest/${props.uriId}`} className="text-[16px] font-[500] leading-5 tracking-[0.03em] w-[72px] h-[24px] rounded-lg mt-[22px] bg-[#F18500] text-[#FFFFFF] text-center">Invest</Link>
            </div>
        </div>
    </section>
  )
}
