"use client"
import { useContractRead } from "wagmi";
import tokenGrow from "../../../abi/tokenGrow.json"
import {TokenGrowAddr} from "../../../constant/contract"
export default function useGetSingleInvestment(id:Number) {
    const {data, isLoading, isError} = useContractRead({
        address:TokenGrowAddr,
        abi:tokenGrow,
        functionName: 'investment',
        args:[id]
    })
    return ({data, isLoading, isError})

}
