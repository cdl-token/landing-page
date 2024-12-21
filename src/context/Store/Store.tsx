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

// import USDTContractAbis from "../contractsData/USDCToken.json";
// import USDTTokenEthereumAddress from "../contractsData/USDTTokenEthereum-address.json";
// import USDCTokenEthereumAddress from "../contractsData/USDCTokenEthereum-address.json";
// import WrapedBridgecdlEthereumAddress from "../contractsData/WrappedBridgeCDL-address.json";
// import WrapedBridgecdlEthereumAbis from "../contractsData/WrappedBridgeCDL.json";
// import WrapedcdlEthereumAddress from "../contractsData/WrappedCryptoDataLive-address.json";
// import WrapedcdlEthereumAbis from "../contractsData/WrappedCryptoDataLive.json";

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

  // // TRANSACTION SUCCESS DIALOGUE BOX
  // const [transactionSuccess, setTransactionSuccess] = useState(false);
  // const [transactionHash, setTransactionHash] = useState("");
  // const [transactionHashID, setTransactionHashID] = useState("");

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
  });

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// HELPING FUNCTIONS ////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

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

      // const providerEthereum = new JsonRpcProvider(); //TODO:: providers  //"http://localhost:8545/"
      // const EthereumPresaleContract = new ethers.Contract(
      //   WrapedBridgecdlEthereumAddress.address,
      //   WrapedBridgecdlEthereumAbis.abi,
      //   providerEthereum,
      // );

      const raisedAmount = await presaleContract.raisedAmount();

      console.log("🚀 ~ GetValues ~ raisedAmount:", raisedAmount?.toString());

      // const raisedAmountEthereum = await EthereumPresaleContract.raisedAmount();

      ////////////////////// Smart Contract Balance Check ////////////////////////////

      //const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
      const cdlContracts = new ethers.Contract(
        cdlTokenAddress.address,
        cdlTokenContract.abi,
        provider,
      );

      const TokensInContract = await cdlContracts.balanceOf(
        cdlPresaleContractAddress.address,
      );

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: 0,
        tokensInContract: 0,
      }));

      // Number(formatUnits(raisedAmount?.toString() || "0", 6)?.toString()) +
      // Number(
      //   formatUnits(
      //     raisedAmountEthereum?.toString() || "0",
      //     18,
      //   )?.toString(),
      // ),

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: Number(
          formatUnits(raisedAmount?.toString() || "0", 18)?.toString(),
        ),
        tokensInContract: Number(
          formatUnits(TokensInContract?.toString() || "0", 18)?.toString(),
        ),
      }));

      // if (chainId === 1) {
      //   //TODO::1 //mainnet
      //   const sellPrice = await presaleContract.salePrice();
      //   setContractData((prevState) => ({
      //     ...prevState,
      //     tokenPrice: sellPrice?.toString(),
      //   }));
      // }

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
              address: cdlTokenAddress.address,
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

  const copyToClipboard = () => {
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

  // const copyToClipboardAddress = () => {
  //   const tokenAddress = address; // Your token address
  //   navigator.clipboard
  //     .writeText(tokenAddress)
  //     .then(() => {
  //       toast.success("User address copied to clipboard!");
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy: ", error);
  //     });
  // };

  const BuyWithUSDTandUSDC = async ({
    payAmountInUSDT,
    tokens,
    isUSDT,
  }: BuyWithUSDCProps): Promise<void> => {
    if (!isConnected) throw Error("User disconnected");
    try {
      const buyingTokensAmount = formatEther(tokens?.toString() || "0");

      if (+buyingTokensAmount < 10) {
        toast.error("Please buy minimum One Dollar");
      } else if (+buyingTokensAmount > 30000) {
        toast.error("Please buy maximum Three Thousands 30000 Dollars");
      }

      setPurchaseLoader(true);
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

          await tokenApprove.wait();

          const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
          buying.wait();

          // const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
          // setTransactionHashID(buying?.hash);
          // setTransactionHash(bnbLink);
          // setTransactionSuccess(true);
        } else {
          const tokenApprove = await USDCContracts.approve(
            cdlPresaleContractAddress.address,
            amountAginstTokens,
          );

          await tokenApprove.wait();

          const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
          buying.wait();

          // const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
          // setTransactionHashID(buying?.hash);
          // setTransactionHash(bnbLink);
          // setTransactionSuccess(true);
        }

        await GetValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      // setTransactionSuccess(false);
      // setTransactionHash("");
      // sendErrorToast(`${JSON.stringify(error.reason)}`);
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

      if (+buyingTokensAmount < 10) {
        toast.error("Please buy minimum One (1) Dollar");
      } else if (+buyingTokensAmount > 30000) {
        toast.error("Please buy maximum Three Thousands (3000) Dollars");
      }

      setPurchaseLoader(true);

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

        buying.wait();
        // const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
        // setTransactionHashID(buying?.hash);
        // setTransactionHash(bnbLink);
        // setTransactionSuccess(true);
        // await GetValues();
        setPurchaseLoader(false);
      }
    } catch (error) {
      setPurchaseLoader(false);
      // setTransactionSuccess(false);
      // setTransactionHash("");
      console.log(error);
      // if (error?.reason) {
      //   // If error.reason is defined, show it in the toast
      //   sendErrorToast(`${JSON.stringify(error.reason)}`);
      // } else {
      //   // If error.reason is undefined, show a custom message
      //   const shortErrorMessage =
      //     error?.data?.message?.split(":")[0] + ": insufficient funds";
      //   sendErrorToast(shortErrorMessage || "An unknown error occurred.");
      // }
      // sendErrorToast(`${JSON.stringify(error.reason)}`);
      // const shortErrorMessage = error?.data?.message.split(':')[0] + ": insufficient funds";
      // sendErrorToast(`${JSON.stringify(shortErrorMessage)}`);
      // console.log(error?.data?.message,"error?.data?.messageerror?.data?.message");
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

  // const GetBridgeValues = async () => {
  //   try {
  //     setloader(true);

  //     const provider = new JsonRpcProvider(
  //       "https://bsc-testnet-rpc.publicnode.com",
  //     ); //TODO:: providers  //"http://localhost:8545/"
  //     const EthereumPresaleContract = new ethers.Contract(
  //       WrapedBridgecdlEthereumAddress.address,
  //       WrapedBridgecdlEthereumAbis.abi,
  //       provider,
  //     );

  //     if (chainId === 97) {
  //       //TODO::56
  //       const sellPrice = await EthereumPresaleContract.salePrice();
  //       setContractData((prevState) => ({
  //         ...prevState,
  //         tokenPrice: sellPrice?.toString(),
  //       }));
  //     }

  //     if (isConnected && chainId === 97) {
  //       //TODO: 56 change ChainId

  //       if (!walletProvider) throw Error("No wallet provider found");

  //       if (walletProvider && isEip1193Provider(walletProvider)) {
  //         const ethersProvider = new BrowserProvider(walletProvider);

  //         const balance = await ethersProvider.getBalance(address || "");

  //         const USDTContracts = new ethers.Contract(
  //           USDTTokenEthereumAddress.address,
  //           USDTContractAbis.abi,
  //           ethersProvider,
  //         );
  //         const USDCContracts = new ethers.Contract(
  //           USDCTokenEthereumAddress.address,
  //           USDTContractAbis.abi,
  //           ethersProvider,
  //         );
  //         const cdlContracts = new ethers.Contract(
  //           WrapedcdlEthereumAddress.address,
  //           WrapedcdlEthereumAbis.abi,
  //           ethersProvider,
  //         );

  //         console.log(
  //           balance?.toString(),
  //           "balancebalancebalancebalancebalance",
  //         );

  //         const USDTBalance = await USDTContracts.balanceOf(address);
  //         const USDCBalance = await USDCContracts.balanceOf(address);
  //         const cdlBalance = await cdlContracts.balanceOf(address);

  //         setContractData((prevState) => ({
  //           ...prevState,
  //           ethBalance: Number(formatUnits(balance || "0", 18)?.toString()),
  //           usdcBalance: Number(
  //             formatUnits(USDCBalance || "0", 18)?.toString(),
  //           ),
  //           usdtBalance: Number(
  //             formatUnits(USDTBalance || "0", 18)?.toString(),
  //           ),
  //           cdlBalance: Number(formatUnits(cdlBalance || "0", 18)?.toString()),
  //         }));
  //       }
  //       setloader(false);
  //     }
  //   } catch (error) {
  //     setloader(false);
  //     console.log("Ethereum");
  //     console.log(error);
  //   }
  // };

  // const BuyWithUSDTandUSDCOnEthereum = async ({
  //   payAmountInUSDT,
  //   tokens,
  //   isUSDT,
  // }: BuyWithUSDCProps): Promise<void> => {
  //   try {
  //     networkChange();

  //     const tokensss = formatEther(tokens?.toString());
  //     console.log(+tokensss?.toString(), "tokenssstokenssstokensss");

  //     if (+tokensss?.toString() < 10) {
  //       toast.error("Please buy minimum One (1) Dollar");
  //     } else if (+tokensss?.toString() > 30000) {
  //       toast.error("Please buy maximum Three Thousands (3000) Dollars");
  //     }

  //     setPurchaseLoader(true);

  //     if (walletProvider && isEip1193Provider(walletProvider)) {
  //       const ethersProvider = new BrowserProvider(walletProvider);
  //       const signer = await ethersProvider.getSigner();

  //       const presaleContract = new ethers.Contract(
  //         WrapedBridgecdlEthereumAddress.address,
  //         WrapedBridgecdlEthereumAbis.abi,
  //         signer,
  //       );
  //       const USDTContracts = new ethers.Contract(
  //         USDTTokenEthereumAddress.address,
  //         USDTContractAbis.abi,
  //         signer,
  //       );
  //       const USDCContracts = new ethers.Contract(
  //         USDCTokenEthereumAddress.address,
  //         USDTContractAbis.abi,
  //         signer,
  //       );

  //       const amountInWei = +payAmountInUSDT?.toString() * 10 ** 6;
  //       if (isUSDT) {
  //         const allowance = await USDTContracts.allowance(
  //           address,
  //           WrapedBridgecdlEthereumAddress?.address,
  //         );

  //         if (+allowance?.toString() < +amountInWei?.toString()) {
  //           const tokenApprove = await USDTContracts.approve(
  //             WrapedBridgecdlEthereumAddress?.address,
  //             amountInWei,
  //           );
  //           await tokenApprove.wait();
  //         }

  //         const buying = await presaleContract.buyWithUSDT(
  //           address,
  //           tokens,
  //           isUSDT,
  //         );
  //         buying.wait();
  //         // const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
  //         // setTransactionHashID(buying?.hash);
  //         // setTransactionHash(ethLink);
  //         // setTransactionSuccess(true);
  //       } else {
  //         console.log("check2");
  //         const allowance = await USDCContracts.allowance(
  //           address,
  //           WrapedBridgecdlEthereumAddress?.address,
  //         );
  //         console.log(+allowance?.toString(), "allowanceallowanceallowance");
  //         if (+allowance?.toString() < +amountInWei?.toString()) {
  //           console.log("check3");
  //           const tokenApprove = await USDCContracts.approve(
  //             WrapedBridgecdlEthereumAddress?.address,
  //             amountInWei,
  //           );
  //           await tokenApprove.wait();
  //         }
  //         console.log("check", isUSDT);
  //         const buying = await presaleContract.buyWithUSDT(
  //           address,
  //           tokens,
  //           isUSDT,
  //         );
  //         buying.wait();
  //         // const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
  //         // setTransactionHashID(buying?.hash);
  //         // setTransactionHash(ethLink);
  //         // setTransactionSuccess(true);
  //       }
  //       await GetBridgeValues();
  //       setPurchaseLoader(false);
  //     }
  //   } catch (error) {
  //     setPurchaseLoader(false);
  //     // setTransactionHash("");
  //     // setTransactionSuccess(false);
  //     // sendErrorToast(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  //   }
  // };

  // const BuyWithETHOnEthereum = async ({
  //   tokens,
  //   amountInEthPayable,
  // }: BuyWithETHProps): Promise<void> => {
  //   try {
  //     networkChange();
  //     const tokensss = formatEther(tokens?.toString());

  //     if (+tokensss?.toString() < 10) {
  //       toast.error("Please buy minimum One (1) Dollar");
  //     } else if (+tokensss?.toString() > 30000) {
  //       toast.error("Please buy maximum Three Thousands (3000) Dollars");
  //     }

  //     console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()");
  //     console.log(
  //       amountInEthPayable?.toString(),
  //       "tokens?.toString()tokens?.toString()",
  //     );

  //     setPurchaseLoader(true);

  //     if (walletProvider && isEip1193Provider(walletProvider)) {
  //       const ethersProvider = new BrowserProvider(walletProvider);
  //       const signer = await ethersProvider.getSigner();

  //       const bridgePresaleContract = new ethers.Contract(
  //         WrapedBridgecdlEthereumAddress.address,
  //         WrapedBridgecdlEthereumAbis.abi,
  //         signer,
  //       );
  //       const amountInWei = parseEther(amountInEthPayable?.toString());
  //       const buying = await bridgePresaleContract.buyWithETH(
  //         address,
  //         tokens?.toString(),
  //         { value: amountInWei?.toString() },
  //       );
  //       buying.wait();
  //       // const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
  //       // setTransactionHashID(buying?.hash);
  //       // setTransactionHash(ethLink);
  //       // setTransactionSuccess(true);
  //       await GetBridgeValues();
  //       setPurchaseLoader(false);
  //     }
  //   } catch (error) {
  //     setPurchaseLoader(false);
  //     console.log(error);
  //     // setTransactionHash("");
  //     // setTransactionSuccess(false);
  //     // sendErrorToast(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////-------  ETHEREUM -------////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Store.Provider
        value={{
          setloader,
          copyToClipboard,
          BuyWithETH,
          GetValues,
          loader,
          contractData,
          purchaseLoader,
          // setPurchaseLoader,
          // transactionSuccess,
          // setTransactionSuccess,
          // copyToClipboardAddress,
          // transactionHash,
          // transactionHashID,
          addTokenToMetamask,
          networkChange,
          BuyWithUSDTandUSDC,

          ///////////////////// Ethereum Pre Sale ///////////////////////////
          // GetBridgeValues,
          // BuyWithUSDTandUSDCOnEthereum,
          // BuyWithETHOnEthereum,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
