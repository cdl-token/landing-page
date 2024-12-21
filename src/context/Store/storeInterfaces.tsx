import React from "react";

export interface StoreProviderProps {
  children: React.ReactNode;
}

export interface BuyWithETHProps {
  tokens: string;
  amountInEthPayable: string;
}

export interface BuyWithUSDCProps {
  payAmountInUSDT: number;
  tokens: string;
  isUSDT: boolean;
}

export interface ContractData {
  ethBalance: number;
  usdcBalance: number;
  usdtBalance: number;
  cdlBalance: number;
  raisedAmount: number;
  tokenPrice: string;
  totalSupply: number;
  isPreSaleActive: boolean;
  stakedTokens: number;
  startTime: number;
  duration: number;
  rewardEarned: number;
  ClaimedReward: number;
  tokensInContract: number;
}

export interface StoreContextType {
  loader: boolean;
  setloader: React.Dispatch<React.SetStateAction<boolean>>;
  BuyWithETH: (args: BuyWithETHProps) => Promise<void>;
  copyToClipboard: () => void;
  purchaseLoader: boolean;
  contractData: ContractData;

  //   setPurchaseLoader: React.Dispatch<React.SetStateAction<boolean>>;
  transactionSuccess: boolean;
  setTransactionSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  //   copyToClipboardAddress: string;
  //   transactionHash: string;
  //   transactionHashID: string;
  addTokenToMetamask: () => void;
  GetValues: () => void;
  networkChange: () => void;
  BuyWithUSDTandUSDC: (args: BuyWithUSDCProps) => Promise<void>;

  // GetBridgeValues: () => void;
  // BuyWithUSDTandUSDCOnBinance: (args: BuyWithUSDCProps) => Promise<void>;
  // BuyWithETHOnBinance: (args: BuyWithETHProps) => Promise<void>;
}
