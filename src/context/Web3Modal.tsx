"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { bsc, mainnet, bscTestnet, sepolia } from "@reown/appkit/networks";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// const bscTestnet = {
//   id: 97,
//   name: "bscTestnet",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Binance Smartchain Testnet",
//     symbol: "BSC",
//   },
//   rpcUrls: {
//     default: { http: ["https://bsc-testnet-rpc.publicnode.com"] },
//   },
// };

// const sepolia = {
//   id: 11155111,
//   name: "Sepolia",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Sepolia",
//     symbol: "SepoliaETH",
//   },
//   rpcUrls: {
//     default: { http: ["https://1rpc.io/sepolia"] },
//   },
// };

const metadata = {
  name: "CDL Presale",
  description: "This is CDL Presale",
  url: "https://www.CDL.com/",
  icons: ["https://www.CDL.com/"],
};

createAppKit({
  adapters: [new EthersAdapter()],
  metadata: metadata,
  defaultNetwork: bsc,
  networks: [bsc, mainnet],
  projectId,
  features: {
    swaps: false, // Disable swaps feature
    onramp: false, // Disable onramp feature
    email: false, // Disable email feature
    emailShowWallets: false, // Hide wallets when email is disabled
    socials: false, // Disable social media options
    history: false, // Disable history feature
    analytics: true, // Keep analytics enabled if needed
    allWallets: false, // Disable "All Wallets" feature
    smartSessions: false, // Disable smart sessions feature
  },
});

interface AppKitProps {
  children: React.ReactNode;
}
export function AppKit({ children }: AppKitProps): JSX.Element {
  return <>{children}</>;
}
