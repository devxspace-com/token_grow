import axios from "axios"
import { useQuery } from "react-query";

export default  function useFetchURiDetails(uri:String) {
  const API = `https://${uri}.ipfs.nftstorage.link`
const getData = async ()=>{
    return await axios.get(API).then((res)=>res.data);
}

const stringifiedUri = String(uri);

const {data, isLoading, isError} = useQuery(['URID', stringifiedUri], getData)

return {data, isLoading, isError}
}
