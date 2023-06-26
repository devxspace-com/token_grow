import axios from "axios"
import { useQuery } from "react-query";

export default function useFetchURiDetails(uri:String) {
  const API = `https://${uri}.ipfs.nftstorage.link`
const getData =()=>{
    return axios.get(API).then((res)=>res.data);
}


const {data, isLoading, isError} = useQuery(['URID'], getData)

return {data, isLoading, isError}
}
