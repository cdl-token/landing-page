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
  transactionSuccess: boolean;
  transactionPending: boolean;
  showModel: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorToast: React.Dispatch<React.SetStateAction<string>>;
  setTransactionHash: React.Dispatch<React.SetStateAction<string>>;
  errorToast: string;
  transactionFailed: boolean;
  setTransactionFailed: React.Dispatch<React.SetStateAction<boolean>>;
  setTransactionPending: React.Dispatch<React.SetStateAction<boolean>>;
  approvalPending: boolean;
  setApprovalPending: React.Dispatch<React.SetStateAction<boolean>>;
  setTransactionSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  copyToClipboardAddress: () => void;
  transactionHash: string;
  transactionHashID: string;
  addTokenToMetamask: () => void;
  GetValues: () => void;
  networkChange: () => void;
  BuyWithUSDTandUSDC: (args: BuyWithUSDCProps) => Promise<void>;

  GetBridgeValues: () => void;
  BuyWithUSDTandUSDCOnEthereum: (args: BuyWithUSDCProps) => Promise<void>;
  BuyWithETHOnEthereum: (args: BuyWithETHProps) => Promise<void>;
}
