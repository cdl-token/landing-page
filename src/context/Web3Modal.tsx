'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { localhost, sepolia } from '@reown/appkit/networks'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// const LocalHost = {
//   id: 1337,
//   name: "Localhost",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Ether",
//     symbol: "ETH",
//   },
//   rpcUrls: {
//     default: { http: ["http://127.0.0.1:8545"] },
//   },
// };

const metadata = {
  name: 'CDL Presale',
  description: 'This is CDL Presale',
  url: 'https://www.CDL.com/',
  icons: ['https://www.CDL.com/']
}

createAppKit({
  adapters: [new EthersAdapter()],
  metadata: metadata,
  networks: [localhost,sepolia],
  projectId,
  features: {
    swaps: false,          // Disable swaps feature
    onramp: false,         // Disable onramp feature
    email: false,          // Disable email feature
    emailShowWallets: false, // Hide wallets when email is disabled
    socials: false,        // Disable social media options
    history: false,        // Disable history feature
    analytics: true,       // Keep analytics enabled if needed
    allWallets: false,     // Disable "All Wallets" feature
    smartSessions: false,  // Disable smart sessions feature
  },
})

interface AppKitProps {
  children: React.ReactNode;
}
export function AppKit({ children }: AppKitProps): JSX.Element {
  return (<>{children}</>);
}