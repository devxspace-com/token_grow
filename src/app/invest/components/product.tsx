
import useGetSingleInvestment from "../hooks/useGetSingleInvestment";
import { useParams } from "next/navigation";
import useReadUri from "../hooks/useReadUri";
import useFetchURiDetails from "../hooks/useFetchURiDetails";
import { Skeleton, Space } from "antd";
import { DotChartOutlined } from '@ant-design/icons';

type ProductProps = {
  invest: (product: any) => void;
};

const Product = ({invest}:ProductProps) => {
  const {id} = useParams();
  
  const {data, isLoading, isError} = useGetSingleInvestment(Number(id));

  const {data:readNFT} = useReadUri(Number((data as unknown[])?.[2]))

console.log(data);
console.log('a',readNFT);
// console.log('hel',Number(data[2]));


const {data:fetchURI, isLoading:fetchLoading, isError:fetchIsError} = useFetchURiDetails(readNFT as string);
console.log('nft', fetchURI);

const currentDate = new Date();
const timestamp = Number((data as unknown[])?.[8]) * 1000;
const diffInMonths = (timestamp -currentDate.getTime()) / (1000 *60*60 * 24 *30);
const date = new Date(Number((data as unknown[])?.[7]) * 1000).toLocaleDateString();





  return (
    <div>
      {
        fetchLoading || isLoading ?
      <div className="w-[98%] mx-auto mt-5">

          <Space>
        <Skeleton.Button active size={"large"} block />
        <Skeleton.Avatar active size={"large"}  />
        <Skeleton.Input active size={"large"} />
      </Space>
      <br />
      <br />
      <Skeleton.Button active size={"large"}  block />
      <br />
      <br />
      <Skeleton.Input active size={"large"} block />
      <br />
      <br />
      <Skeleton.Input active size={"large"} block />
      <br />
      <br />
      <Skeleton.Input active size={"large"} block />
      <br />
      <br />
      </div>
      :
      <div className="rounded-lg bg-[#000019] w-[98%] mt-5 m-auto flex flex-col pt-[53px] pb-[123px]">
        <div className="flex top text-white m-auto w-[90%] items-start ">
          <div className="profile">
            <img src={`https://${fetchURI?.properties?.image?.description}.ipfs.nftstorage.link`} alt="" className="rounded-full h-[100px] w-[100px]"/>
          </div>
          <div className="text flex flex-col ml-4">
            <h1 className="text-[20px] font-medium tracking-[0.26px] leading-7">{fetchURI?.title}</h1>
            <p className="text-[12px] font-normal tracking-[0.156px] leading-4">
              <span className="text-green-700">{Number((data as unknown[])?.[3])}%</span> returns in {Math.floor(diffInMonths)} months
            </p>
            <div className="justify-between mt-5 flex">
              <p className="text-left text-[16px] font-normal tracking-[0.208px] leading-5">
                1 USDT <br />
                <span className="text-[12px] trackng-[0.156px]">
                per units
                </span>
              </p>
              <p className="text-left text-[16px] font-normal tracking-[0.208px] leading-5">
                {Number((data as unknown[])?.[9])}
                <br />
                <span className="text-[12px] trackng-[0.156px]">
                investors
                </span>
              </p>
            </div>
          </div>
          <div className="button ml-[3em]">
            <button
              className="bg-[#F18500] px-5 py-1 rounded-xl"
              onClick={invest}
            >
              Invest
            </button>
          </div>
          <div className="">

         
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 w-[80%] mt-8 m-auto text-white">
          <div className="rounded-lg border border-orange-400 flex flex-col w-[38%] px-4 py-1">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Expected Returns</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">{Number((data as unknown[])?.[3])}% in {Math.floor(diffInMonths)} months</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[30%] flex flex-col px-4 py-1  -ml-[110px]">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Investment Type</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">Fixed Income</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[35%]  flex flex-col px-4 py-1 ">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Offer Starting Date</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">{Number((data as unknown[])?.[7]) === 0 ? "Not Started" : date}</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[35%]  flex flex-col px-4 py-1  -ml-[110px]">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Maturity Date</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">{Math.floor(diffInMonths)} months </p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[60%]  flex flex-col px-4 py-1">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Pay-Out Type</h1>
            <p className="text-[16px] font-normal leading-5 tracking-[0.208px]">Capital & profit is paid at maturity</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[70%] px-4 py-1 flex flex-col -ml-[110px]">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Unit Type</h1>
            <p className="text-[16px] font-normal leading-5 tracking-[0.208px]">Unit can be sold any time provided investment has not started and not sold out</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[40%] px-4 py-1 flex flex-col">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Insurance Partner</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">Leadway insurance</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[50%] px-4 py-1 flex flex-col  -ml-[110px]">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Farming/Production Cycle Type</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">{Math.floor(diffInMonths)} months</p>
          </div>
          <div className="rounded-lg border border-orange-400 w-[36%] px-4 py-1 flex flex-col">
            <h1 className="font-[600] text-[12px] tracking-[0.156px] leading-4">Farm Location</h1>
            <p className="text-[16px] font-normal leading-6 tracking-[0.208px]">{fetchURI?.properties?.farm?.description}</p>
          </div>
        </div>
      </div>
      }
      
    </div>
  );
};

export default Product;
