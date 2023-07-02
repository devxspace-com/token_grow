import {useContractRead} from 'wagmi'
import {NFTAddr} from '../../../constant/contract'
import NFT from '../../../abi/NFT.json'

export default  function  useReadUri (id :Number) {
    const contractRead = useContractRead({
        address: NFTAddr,
        abi: NFT,
        functionName: "tokenURI",
        args:[id]
    })

    return(contractRead);

}
