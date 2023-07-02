"use client"
import { useContractRead } from "wagmi";
import tokenGrow from "../../../abi/tokenGrow.json"
import {TokenGrowAddr} from "../../../constant/contract"
export default function useGetInvestment() {
    const {data, isLoading, isError} = useContractRead({
        address:TokenGrowAddr,
        abi:tokenGrow,
        functionName: 'getAllInvestment',
    })
    return ({data, isLoading, isError})

}
