"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Chain
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { Chain } from 'wagmi/chains';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';

// import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { Chain } from 'wagmi/chains';
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const HederaChain: Chain = {
  id: 0x12a,
  name: 'Hedera Testnet',
  network: 'Hedra',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'HBAR',
    symbol: 'HBAR',
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hashio.io/api"],
    },
  },
  // blockExplorers: {
  //   default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  //   etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  // },
  testnet: true,
};




const { chains, publicClient } = configureChains(
  [HederaChain],
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] })
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: '',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
         <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
      </WagmiConfig>
        </body>
    </html>
  )
}
