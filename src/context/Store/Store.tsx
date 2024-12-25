"use client";
import React, { useState, createContext } from "react";
import {
  useAppKitAccount,
  useAppKitNetworkCore,
  useAppKitProvider,
} from "@reown/appkit/react";
import {
  BrowserProvider,
  Eip1193Provider,
  ethers,
  formatEther,
  formatUnits,
  JsonRpcProvider,
  parseEther,
} from "ethers";

/////////////////////////////////////////// INTERFACES ////////////////////////////////////

import {
  StoreProviderProps,
  StoreContextType,
  BuyWithETHProps,
  BuyWithUSDCProps,
} from "./storeInterfaces";

/////////////////////////////////////////// ETHEREUM CHAIN PRESALE ////////////////////////////////////

import cdlPresaleContractAddress from "../contractsData/Crypto_Data_Live_Presale-address.json";
import cdlPresaleContract from "../contractsData/Crypto_Data_Live_Presale.json";
import USDTContractAddress from "../contractsData/USDTToken-address.json";
import USDTContract from "../contractsData/USDTToken.json";
import USDCContractAddress from "../contractsData/USDCToken-address.json";
import USDCContract from "../contractsData/USDCToken.json";
import cdlTokenAddress from "../contractsData/CryptoDataLive-address.json";
import cdlTokenContract from "../contractsData/CryptoDataLive.json";

/////////////////////////////////////////// Ethereum CHAIN PRESALE ////////////////////////////////////

import USDTContractAbis from "../contractsData/USDCToken.json";
import USDTTokenEthereumAddress from "../contractsData/USDTTokenEthereum-address.json";
import USDCTokenEthereumAddress from "../contractsData/USDCTokenEthereum-address.json";
import WrapedBridgecdlEthereumAddress from "../contractsData/CryptoDataLiveBridge-address.json";
import WrapedBridgecdlEthereumAbis from "../contractsData/CryptoDataLiveBridge.json";
import WrapedcdlEthereumAddress from "../contractsData/WrappedCryptoDataLive-address.json";
import WrapedcdlEthereumAbis from "../contractsData/WrappedCryptoDataLive.json";

import { toast } from "react-toastify";

import useDisableLocalStorage from "@/components/notification/useDisableLocalStorage";

///////////////////////////////////// ----------**************----------------- //////////////////////////

export const Store = createContext<StoreContextType | null>(null);

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  useDisableLocalStorage();

  const { address, isConnected } = useAppKitAccount();

  const { walletProvider } = useAppKitProvider("eip155");

  const { chainId } = useAppKitNetworkCore();

  function isEip1193Provider(provider: unknown): provider is Eip1193Provider {
    return (
      typeof provider === "object" &&
      provider !== null &&
      "request" in provider &&
      typeof (provider as Eip1193Provider).request === "function"
    );
  }

  const [loader, setloader] = useState(true);

  const [purchaseLoader, setPurchaseLoader] = useState(false);

  // TRANSACTION SUCCESS DIALOGUE BOX
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [approvalPending, setApprovalPending] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [transactionFailed, setTransactionFailed] = useState(false);
  const [errorToast, setErrorToast] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionHashID, setTransactionHashID] = useState("");

  const [contractData, setContractData] = useState({
    ethBalance: 0,
    usdcBalance: 0,
    usdtBalance: 0,
    cdlBalance: 0,
    raisedAmount: 0,
    tokenPrice: "23000000000000000",
    totalSupply: 100000000,
    isPreSaleActive: false,
    stakedTokens: 0,
    startTime: 0,
    duration: 0,
    rewardEarned: 0,
    ClaimedReward: 0,
    tokensInContract: 0,
    remainTokensForSale: 0,
    soldTokenOfEthereum: 0,
    soldTokenOfBinance: 0,
  });

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// HELPING FUNCTIONS ////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  const getTokensValues = async (raised: number, price: number) => {
    const tokens = raised / price;
    console.log(tokens, "tokenstokens");
    return tokens;
  };

  const GetValues = async () => {
    try {
      setloader(true);
      const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
      const provider = new JsonRpcProvider(providers); //TODO:: providers  //"http://localhost:8545/"

      console.log("🚀 ~ GetValues ~ provider:", provider);

      const presaleContract = new ethers.Contract(
        cdlPresaleContractAddress.address,
        cdlPresaleContract.abi,
        provider,
      );

      const etherProvider = process.env.NEXT_PUBLIC_RPC_URL_ETH;
      const providerEthereum = new JsonRpcProvider(etherProvider); //TODO:: providers  //"http://localhost:8545/"

      const EthereumPresaleContract = new ethers.Contract(
        WrapedBridgecdlEthereumAddress.address,
        WrapedBridgecdlEthereumAbis.abi,
        providerEthereum,
      );

      const raisedAmount = await presaleContract.raisedAmount();
      const salePriceToken = await presaleContract.salePrice();

      console.log(salePriceToken, "salePricesalePrice");

      console.log("🚀 ~ GetValues ~ raisedAmount:", raisedAmount?.toString());

      const raisedAmountEthereum = await EthereumPresaleContract.raisedAmount();

      ////////////////////// Smart Contract Balance Check ////////////////////////////

      // const tokens = +Number(
      //   formatUnits(raisedAmountEthereum?.toString() || "0", 6)?.toString(),
      // );

      console.log(salePriceToken?.toString(), "salePriceToken?.toString()");

      const sold = await getTokensValues(
        Number(formatUnits(raisedAmount?.toString() || "0", 18)?.toString()),
        Number(formatUnits(salePriceToken?.toString() || "0", 18)),
      );

      console.log(sold?.toString(), "soldsoldsoldsold");

      const cdlContracts = new ethers.Contract(
        cdlTokenAddress.address,
        cdlTokenContract.abi,
        provider,
      );

      const TokensInContracts = await cdlContracts.balanceOf(
        cdlPresaleContractAddress.address,
      );

      const cdlContractsOnEthereum = new ethers.Contract(
        WrapedcdlEthereumAddress.address,
        WrapedcdlEthereumAbis.abi,
        providerEthereum,
      );

      const supply = await cdlContractsOnEthereum.totalSupply();

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: 0,
        tokensInContract: 0,
        remainTokensForSale: 0,
      }));

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount:
          Number(formatUnits(raisedAmount?.toString() || "0", 18)?.toString()) +
          Number(
            formatUnits(raisedAmountEthereum?.toString() || "0", 6)?.toString(),
          ),
        tokensInContract: Number(
          formatUnits(TokensInContracts?.toString() || "0", 18)?.toString(),
        ),
        soldTokenOfBinance:
          Number(formatUnits(supply?.toString() || "0", 18)?.toString()) +
          Number(sold?.toString()),

        //Supply For Sale
        // 13043478.26
        remainTokensForSale:
          2000 -
          (Number(formatUnits(supply?.toString() || "0", 18)?.toString()) +
            Number(sold?.toString())),

        soldTokenOfEthereum:
          Number(formatUnits(supply?.toString() || "0", 18)?.toString()) +
          Number(sold?.toString()),
      }));

      if (chainId === 1) {
        //TODO::1 //mainnet
        setContractData((prevState) => ({
          ...prevState,
          tokenPrice: "0",
        }));
        const sellPrice = await EthereumPresaleContract.salePrice();
        console.log(sellPrice?.toString(), "sellPricesellPricesellPrice");
        setContractData((prevState) => ({
          ...prevState,
          tokenPrice: sellPrice?.toString(),
        }));
      }

      setContractData((prevState) => ({
        ...prevState,
        isPreSaleActive: true,
      }));

      setloader(false);

      if (isConnected && chainId === 56) {
        //TODO::56
        console.log("This is check to go in values");
        if (!walletProvider) throw Error("No wallet provider found");

        if (walletProvider && isEip1193Provider(walletProvider)) {
          const ethersProvider = new BrowserProvider(walletProvider);
          const signer = ethersProvider.getSigner();
          const USDTContracts = new ethers.Contract(
            USDTContractAddress.address,
            USDTContract.abi,
            await signer,
          );

          const USDCContracts = new ethers.Contract(
            USDCContractAddress.address,
            USDCContract.abi,
            await signer,
          );

          const cdlContracts = new ethers.Contract(
            cdlTokenAddress.address,
            cdlTokenContract.abi,
            await signer,
          );

          const balance = await ethersProvider.getBalance(address || "");

          const USDTBalance = await USDTContracts.balanceOf(address);

          const USDCBalance = await USDCContracts.balanceOf(address);

          const cdlBalance = await cdlContracts.balanceOf(address);

          setContractData((prevState) => ({
            ...prevState,
            ethBalance: Number(formatUnits(balance || "0", 18)?.toString()),
            usdcBalance: Number(
              formatUnits(USDCBalance || "0", 18)?.toString(),
            ),
            usdtBalance: Number(
              formatUnits(USDTBalance || "0", 18)?.toString(),
            ),
            cdlBalance: Number(formatUnits(cdlBalance || "0", 18)?.toString()),
          }));
        }
        setloader(false);
      }
    } catch (error) {
      setloader(false);
      console.log("getErrorr", error);
    }
  };

  const addTokenToMetamask = async () => {
    if (!isConnected) throw Error("User disconnected");
    if (walletProvider && isEip1193Provider(walletProvider)) {
      try {
        const wasAdded = await walletProvider?.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address:
                chainId == 1
                  ? WrapedcdlEthereumAddress.address
                  : cdlTokenAddress.address,
              symbol: "CDL",
              decimals: 18,
              image: "https://cdl.vercel.app/static/logo.svg",
            },
          },
        });
        if (wasAdded) {
          toast.success("Token successfully added to Metamask!");
        } else {
          toast.error("Failed to add the token.");
        }
      } catch (error) {
        toast.error("Failed to add token to Metamask. Please try again later.");
        console.error("Failed to add token to Metamask: ", error);
      }
    }
  };

  const copyToClipboardBinance = () => {
    const tokenAddress = cdlTokenAddress?.address;
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("Token address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const copyToClipboardEthereum = () => {
    const tokenAddress = WrapedcdlEthereumAddress?.address; // Your token address
    navigator.clipboard
      .writeText(tokenAddress || "")
      .then(() => {
        toast.success("Token address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const BuyWithUSDTandUSDC = async ({
    payAmountInUSDT,
    tokens,
    isUSDT,
  }: BuyWithUSDCProps): Promise<void> => {
    if (!isConnected) throw Error("User disconnected");
    try {
      const buyingTokensAmount = formatEther(tokens?.toString() || "0");

      if (+buyingTokensAmount < 43.48) {
        toast.error("Please buy minimum One Dollar");
      } else if (+buyingTokensAmount > 1304400) {
        toast.error("Please buy maximum Three Thousands 30000 Dollars");
      }

      setShowModel(true);
      setPurchaseLoader(true);
      setApprovalPending(true);

      if (walletProvider && isEip1193Provider(walletProvider)) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const presaleContract = new ethers.Contract(
          cdlPresaleContractAddress.address,
          cdlPresaleContract.abi,
          signer,
        );
        const USDTContracts = new ethers.Contract(
          USDTContractAddress.address,
          USDTContract.abi,
          signer,
        );

        const USDCContracts = new ethers.Contract(
          USDCContractAddress.address,
          USDCContract.abi,
          signer,
        );

        const amountInWei = parseEther(payAmountInUSDT?.toString() || "0");

        const amountAginstTokens = await presaleContract.sellTokenInUDSTPrice(
          tokens?.toString(),
        );

        console.log(amountInWei?.toString(), "amountInWei");

        if (isUSDT) {
          const tokenApprove = await USDTContracts.approve(
            cdlPresaleContractAddress.address,
            amountAginstTokens,
          );
          setApprovalPending(false);
          setTransactionPending(true);

          await tokenApprove.wait();

          setTransactionPending(false);
          setApprovalPending(true);

          const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
          setApprovalPending(false);
          setTransactionPending(true);
          await buying.wait();

          const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
          setTransactionHashID(buying?.hash);
          setTransactionHash(bnbLink);
          setTransactionPending(false);
          setTransactionSuccess(true);
        } else {
          const tokenApprove = await USDCContracts.approve(
            cdlPresaleContractAddress.address,
            amountAginstTokens,
          );
          setApprovalPending(false);
          setTransactionPending(true);
          await tokenApprove.wait();
          setTransactionPending(false);
          setApprovalPending(true);
          const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
          setApprovalPending(false);
          setTransactionPending(true);
          await buying.wait();
          const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
          setTransactionHashID(buying?.hash);
          setTransactionHash(bnbLink);
          setTransactionPending(false);
          setTransactionSuccess(true);
        }

        await GetValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionSuccess(false);
      setApprovalPending(false);
      setTransactionHash("");
      // Type assertion to assume error is of type any (or specific type like Error)
      if ((error as { reason?: string }).reason) {
        setErrorToast(`${(error as { reason: string }).reason}`);
      } else {
        setErrorToast("An unknown error occurred.");
      }
      setShowModel(true);
      setTransactionFailed(true);
      console.log(error);
    }
  };

  const BuyWithETH = async ({
    tokens,
    amountInEthPayable,
  }: BuyWithETHProps): Promise<void> => {
    if (!isConnected) throw Error("User disconnected");
    try {
      const buyingTokensAmount = formatEther(tokens?.toString() || "0");

      if (+buyingTokensAmount < 43.48) {
        toast.error("Please buy minimum One (1) Dollar");
      } else if (+buyingTokensAmount > 1304400) {
        toast.error("Please buy maximum Three Thousands (3000) Dollars");
      }

      setShowModel(true);
      setPurchaseLoader(true);
      setApprovalPending(true);

      if (!walletProvider) throw Error("No wallet provider found");

      if (walletProvider && isEip1193Provider(walletProvider)) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const presaleContract = new ethers.Contract(
          cdlPresaleContractAddress.address,
          cdlPresaleContract.abi,
          signer,
        );

        const amountInWei = parseEther(amountInEthPayable?.toString() || "0");
        const buying = await presaleContract.buyWithBNB(tokens?.toString(), {
          value: amountInWei?.toString(),
        });
        setApprovalPending(false);
        setTransactionPending(true);
        await buying.wait();
        const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(bnbLink);
        setTransactionPending(false);
        setTransactionSuccess(true);
        await GetValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionSuccess(false);
      setApprovalPending(false);
      setTransactionPending(false);
      setTransactionHash("");
      console.log(error);
      // Type assertion to assume error is of type any (or specific type like Error)
      if ((error as { reason?: string }).reason) {
        setErrorToast(`${(error as { reason: string }).reason}`);
      } else {
        setErrorToast("An unknown error occurred.");
      }
      setShowModel(true);
      setTransactionFailed(true);
      console.log(error);
    }
  };

  const networkChange = async () => {
    const chainid = process.env.NEXT_PUBLIC_CHAIN_ID_ETHEREUM;
    if (isConnected && chainId?.toString() !== chainid?.toString()) {
      console.log(chainid, chainId, "chainidchainid");
      // useSwitchNetwork(Number(chainid));
      return;
    }
  };

  // ////////////////////////////////////////////////////////////////////////////////////
  // //////////////////////////////-------  Ethereum -------////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////

  const GetBridgeValues = async () => {
    try {
      setloader(true);

      const etherProvider = process.env.NEXT_PUBLIC_RPC_URL_ETH;
      const provider = new JsonRpcProvider(etherProvider);
      const EthereumPresaleContract = new ethers.Contract(
        WrapedBridgecdlEthereumAddress.address,
        WrapedBridgecdlEthereumAbis.abi,
        provider,
      );

      if (chainId === 1) {
        //TODO::1
        const sellPrice = await EthereumPresaleContract.salePrice();
        setContractData((prevState) => ({
          ...prevState,
          tokenPrice: sellPrice?.toString(),
        }));
      }

      if (isConnected && chainId === 1) {
        //TODO: 1 change ChainId

        if (!walletProvider) throw Error("No wallet provider found");

        if (walletProvider && isEip1193Provider(walletProvider)) {
          const ethersProvider = new BrowserProvider(walletProvider);

          const balance = await ethersProvider.getBalance(address || "");

          const USDTContracts = new ethers.Contract(
            USDTTokenEthereumAddress.address,
            USDTContractAbis.abi,
            ethersProvider,
          );
          const USDCContracts = new ethers.Contract(
            USDCTokenEthereumAddress.address,
            USDTContractAbis.abi,
            ethersProvider,
          );

          const cdlContracts = new ethers.Contract(
            WrapedcdlEthereumAddress.address,
            WrapedcdlEthereumAbis.abi,
            ethersProvider,
          );

          console.log(
            balance?.toString(),
            "balancebalancebalancebalancebalance",
          );

          const USDTBalance = await USDTContracts.balanceOf(address);
          const USDCBalance = await USDCContracts.balanceOf(address);
          const cdlBalance = await cdlContracts.balanceOf(address);

          setContractData((prevState) => ({
            ...prevState,
            ethBalance: Number(formatUnits(balance || "0", 18)?.toString()),
            usdcBalance: Number(formatUnits(USDCBalance || "0", 6)?.toString()),
            usdtBalance: Number(formatUnits(USDTBalance || "0", 6)?.toString()),
            cdlBalance: Number(formatUnits(cdlBalance || "0", 18)?.toString()),
          }));
        }
        setloader(false);
      }
    } catch (error) {
      setloader(false);
      console.log("Ethereum");
      console.log(error);
    }
  };

  const BuyWithUSDTandUSDCOnEthereum = async ({
    payAmountInUSDT,
    tokens,
    isUSDT,
  }: BuyWithUSDCProps): Promise<void> => {
    try {
      networkChange();

      const tokensss = formatEther(tokens?.toString());
      console.log(+tokensss?.toString(), "tokenssstokenssstokensss");

      if (+tokensss?.toString() < 43.48) {
        toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 1304400) {
        toast.error("Please buy maximum Three Thousands (3000) Dollars");
      }
      setShowModel(true);
      setPurchaseLoader(true);
      setApprovalPending(true);

      if (walletProvider && isEip1193Provider(walletProvider)) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const presaleContract = new ethers.Contract(
          WrapedBridgecdlEthereumAddress.address,
          WrapedBridgecdlEthereumAbis.abi,
          signer,
        );
        const USDTContracts = new ethers.Contract(
          USDTTokenEthereumAddress.address,
          USDTContractAbis.abi,
          signer,
        );
        const USDCContracts = new ethers.Contract(
          USDCTokenEthereumAddress.address,
          USDTContractAbis.abi,
          signer,
        );

        const amountInWei = +payAmountInUSDT?.toString() * 10 ** 6;
        if (isUSDT) {
          const allowance = await USDTContracts.allowance(
            address,
            WrapedBridgecdlEthereumAddress?.address,
          );

          if (+allowance?.toString() < +amountInWei?.toString()) {
            const tokenApprove = await USDTContracts.approve(
              WrapedBridgecdlEthereumAddress?.address,
              amountInWei,
            );
            setApprovalPending(false);
            setTransactionPending(true);
            await tokenApprove.wait();
          }
          setTransactionPending(false);
          setApprovalPending(true);
          const buying = await presaleContract.buyWithUSDT(
            address,
            tokens,
            isUSDT,
          );
          setApprovalPending(false);
          setTransactionPending(true);
          await buying.wait();
          const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
          setTransactionHashID(buying?.hash);
          setTransactionHash(ethLink);
          setTransactionPending(false);
          setTransactionSuccess(true);
        } else {
          console.log("check2");
          const allowance = await USDCContracts.allowance(
            address,
            WrapedBridgecdlEthereumAddress?.address,
          );
          console.log(+allowance?.toString(), "allowanceallowanceallowance");
          if (+allowance?.toString() < +amountInWei?.toString()) {
            console.log("check3");
            const tokenApprove = await USDCContracts.approve(
              WrapedBridgecdlEthereumAddress?.address,
              amountInWei,
            );
            setApprovalPending(false);
            setTransactionPending(true);
            await tokenApprove.wait();
          }
          setTransactionPending(false);
          setApprovalPending(true);
          console.log("check", isUSDT);
          const buying = await presaleContract.buyWithUSDT(
            address,
            tokens,
            isUSDT,
          );
          setApprovalPending(false);
          setTransactionPending(true);
          await buying.wait();
          const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
          setTransactionHashID(buying?.hash);
          setTransactionHash(ethLink);
          setTransactionPending(false);
          setTransactionSuccess(true);
        }
        await GetBridgeValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionSuccess(false);
      // Type assertion to assume error is of type any (or specific type like Error)
      if ((error as { reason?: string }).reason) {
        setErrorToast(`${(error as { reason: string }).reason}`);
      } else {
        setErrorToast("An unknown error occurred.");
      }

      setTransactionHash("");
      setShowModel(true);
      setTransactionFailed(true);
      console.log(error);
    }
  };

  const BuyWithETHOnEthereum = async ({
    tokens,
    amountInEthPayable,
  }: BuyWithETHProps): Promise<void> => {
    try {
      networkChange();
      const tokensss = formatEther(tokens?.toString());

      if (+tokensss?.toString() < 43.48) {
        toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 1304400) {
        toast.error("Please buy maximum Three Thousands (3000) Dollars");
      }

      console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()");
      console.log(
        amountInEthPayable?.toString(),
        "tokens?.toString()tokens?.toString()",
      );

      setShowModel(true);
      setPurchaseLoader(true);
      setApprovalPending(true);

      if (walletProvider && isEip1193Provider(walletProvider)) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const bridgePresaleContract = new ethers.Contract(
          WrapedBridgecdlEthereumAddress.address,
          WrapedBridgecdlEthereumAbis.abi,
          signer,
        );
        const amountInWei = parseEther(amountInEthPayable?.toString());
        const buying = await bridgePresaleContract.buyWithETH(
          address,
          tokens?.toString(),
          { value: amountInWei?.toString() },
        );
        setApprovalPending(false);
        setTransactionPending(true);
        await buying.wait();
        const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(ethLink);
        setTransactionPending(false);
        setTransactionSuccess(true);
        await GetBridgeValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      setApprovalPending(false);
      setTransactionPending(false);
      console.log(error);

      // Type assertion to assume error is of type any (or specific type like Error)
      if ((error as { reason?: string }).reason) {
        setErrorToast(`${(error as { reason: string }).reason}`);
      } else {
        setErrorToast("An unknown error occurred.");
      }

      setTransactionHash("");
      setTransactionSuccess(false);
      setShowModel(true);
      setTransactionFailed(true);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////-------  ETHEREUM -------////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Store.Provider
        value={{
          setloader,
          copyToClipboardBinance,
          BuyWithETH,
          GetValues,
          loader,
          contractData,
          purchaseLoader,
          approvalPending,
          setApprovalPending,
          transactionSuccess,
          setTransactionSuccess,
          showModel,
          setShowModel,
          transactionHash,
          transactionHashID,
          transactionPending,
          transactionFailed,
          setTransactionHash,
          setTransactionHashID,
          setTransactionFailed,
          errorToast,
          setErrorToast,
          setTransactionPending,
          addTokenToMetamask,
          copyToClipboardEthereum,
          networkChange,
          BuyWithUSDTandUSDC,

          ///////////////////// Ethereum Pre Sale ///////////////////////////
          GetBridgeValues,
          BuyWithUSDTandUSDCOnEthereum,
          BuyWithETHOnEthereum,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
