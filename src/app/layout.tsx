"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  // Chain
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { fantomTestnet, fantom } from 'wagmi/chains';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { QueryClient, QueryClientProvider } from 'react-query';


const { chains, publicClient } = configureChains(
  [ fantom],
  [
    jsonRpcProvider({
      rpc: chain => ({ 
        http: `https://ftm.getblock.io/9e74fe6f-1592-4db1-adb4-384bc58269c1/mainnet/`
      })
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

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">

      <body className={inter.className}>
         <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode>
        <QueryClientProvider client={client}>

        {children}
        </QueryClientProvider>
      </RainbowKitProvider>
      </WagmiConfig>
        </body>
    </html>
  )
}
