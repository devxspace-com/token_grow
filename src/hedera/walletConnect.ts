import { ethers } from "ethers";

interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

// interface EthereumChainParams {
//   chainName: string;
//   chainId: string;
//   nativeCurrency: NativeCurrency;
//   rpcUrls: string[];
//   blockExplorerUrls: string[];
// }

declare global {
  interface Window {
    ethereum?: ethers.JsonRpcProvider;
  }
}

const network = "testnet";

async function walletConnectFcn(): Promise<[string,  ethers.BrowserProvider, string]> {
  console.log(`\n=======================================`);

  // ETHERS PROVIDER
  const provider = new ethers.BrowserProvider(window.ethereum as ethers.JsonRpcProvider & {
    request: (request: { method: string; params?: any[] | Record<string, any> }) => Promise<any>;
  });

  // SWITCH TO HEDERA TEST NETWORK
  console.log(`- Switching network to the Hedera ${network}...🟠`);
  let chainId: string;
  if (network === "testnet") {
    chainId = "0x128";
  } else if (network === "previewnet") {
    chainId = "0x129";
  } else {
    chainId = "0x127";
  }

  await (window.ethereum as any)?.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainName: `Hedera ${network}`,
        chainId: chainId,
        nativeCurrency: { name: "HBAR", symbol: "ℏℏ", decimals: 18 },
        rpcUrls: [`https://${network}.hashio.io/api`],
        blockExplorerUrls: [`https://hashscan.io/${network}/`],
      },
    ],
  });
  console.log("- Switched ✅");

  // CONNECT TO ACCOUNT
  console.log("- Connecting wallet...🟠");
  let selectedAccount: string;
  try {
    const accounts = await provider.send("eth_requestAccounts", []);
    selectedAccount = accounts[0];
    console.log(`- Selected account: ${selectedAccount} ✅`);
  } catch (connectError: unknown) {
    if (connectError instanceof Error) {
      console.log(`- ${connectError.message.toString()}`);
    } else {
      console.log(`- Unknown error occurred during wallet connection.`);
    }
    throw connectError;
  }

  return [selectedAccount, provider, network];
}

export default walletConnectFcn;
