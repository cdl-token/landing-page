"use client";

import { useContext, useEffect, useState } from "react";
import PresaleCountdown from "./PresaleCountdown";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import cdlToken from "@/context/contractsData/WrappedCryptoDataLive-address.json";
import cdlPresaleContractEthereumAddress from "@/context/contractsData/CryptoDataLiveBridge-address.json";
import cdlPresaleEthereumContract from "@/context/contractsData/CryptoDataLiveBridge.json";
import { Store } from "@/context/Store/Store";
import {
  ethers,
  formatEther,
  formatUnits,
  JsonRpcProvider,
  parseEther,
} from "ethers";
import useDisableLocalStorage from "@/components/notification/useDisableLocalStorage";
import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/Loader";
import TransactionSuccessModal from "@/components/TransactionSuccessModal";

const PresaleCardEthereum = () => {
  useDisableLocalStorage();

  {
    console.log("EthereumEthereumEthereum");
  }

  const context = useContext(Store);
  if (!context) {
    throw new Error("Store context must be used within a StoreProvider");
  }

  const {
    contractData,
    GetBridgeValues,
    loader,
    purchaseLoader,
    transactionSuccess,
    showModel,
    copyToClipboard,
    addTokenToMetamask,
    BuyWithUSDTandUSDCOnEthereum,
    BuyWithETHOnEthereum,
  } = context;

  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();
  const [cdlValue, setcdlValue] = useState("0");
  // const [ethValue, setETHValue] = useState(0);
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [tokenAmount, setTokensAmount] = useState("");
  const [buttonText, setButtonText] = useState("Buy");

  useEffect(() => {
    const main = async () => {
      if (selectedToken === "ETH" && tokenAmount !== "") {
        setTimeout(async () => {
          const parse = parseEther(tokenAmount?.toString() || "0");

          if (parse > 0) {
            const etherProvider = process.env.NEXT_PUBLIC_RPC_URL_ETH;
            const provider = new JsonRpcProvider(etherProvider); //TODO:: providers  //"http://localhost:8545/"
            const presaleContract = new ethers.Contract(
              cdlPresaleContractEthereumAddress.address,
              cdlPresaleEthereumContract.abi,
              provider,
            );
            const oneDoller = await presaleContract.getLatestUSDTPrice();

            console.log(
              oneDoller?.toString(),
              "oneDolleroneDolleroneDolleroneDoller",
            );

            const howMuch = +parse?.toString() / +oneDoller?.toString();

            console.log(howMuch, "howMuchhowMuchhowMuchhowMuch");

            const tokenTokens =
              +howMuch / (+contractData?.tokenPrice / 10 ** 6);

            const parse2 = parseEther(tokenTokens?.toString() || "0");

            setcdlValue(parse2?.toString());
            // setETHValue(howMuch);
          }
        }, 500);
      } else if (selectedToken !== "ETH" && tokenAmount !== "") {
        try {
          const price = +contractData?.tokenPrice / 10 ** 6;
          const tokens = +tokenAmount?.toString() / +price;
          const force = parseEther(tokens?.toString())?.toString();
          setcdlValue(force?.toString());
          // setETHValue(tokenAmount);
        } catch (error) {
          console.error("Error in else block:", error);
        }
      } else {
        setcdlValue("");
        // setETHValue(0);
        setTokensAmount("");
      }
    };
    main();
  }, [tokenAmount, selectedToken]);

  useEffect(() => {
    GetBridgeValues();
  }, [address]);

  useEffect(() => {
    const checked = () => {
      const tokenBalance =
        selectedToken == "ETH"
          ? contractData?.ethBalance
          : selectedToken == "USDC"
            ? contractData?.usdcBalance
            : contractData?.usdtBalance;
      // if (
      //   parseFloat(tokenAmount > "0" ? tokenAmount?.toString() : "0") >
      //   parseFloat(tokenBalance > 0 ? tokenBalance?.toString() : "0")
      // ) {
      //   setButtonText("Insufficient Balance");
      //   return;
      // } else if (
      if (
        parseFloat(formatEther(cdlValue?.toString() || "0")?.toString()) >
        parseFloat(
          contractData?.remainTokensForSale?.toString() > "0"
            ? contractData?.remainTokensForSale?.toString()
            : "0",
        )
      ) {
        setButtonText("Available Supply Exceed");
        return;
      } else {
        setButtonText("Buy");
        return;
      }
    };
    checked();
  }, [tokenAmount, selectedToken, cdlValue]);

  const soldPercentage = (contractData?.raisedAmount * 100) / 10000000;

  return (
    <>
      {showModel && <TransactionSuccessModal />}
      <div className="relative">
        <div className="absolute -right-5 -top-24 -z-10">{btcBG}</div>
        <div className="absolute left-3 top-3 -z-10">
          <Image
            src="/static/coinsvgs/ether.svg"
            width={96}
            height={96}
            alt="Ether"
          />
        </div>
        <div
          className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-white/30 bg-[#F2F2F2]/10 px-5 py-10 lg:px-10 lg:py-14 xl:px-14 xl:py-20"
          style={{
            backdropFilter: "blur(3px)",
            borderImageSource:
              "linear-gradient(164.11deg, rgba(255, 255, 255, 0.28) 4.4%, rgba(255, 255, 255, 0) 54.85%)",
          }}
        >
          {purchaseLoader ? (
            <Loader isPresale />
          ) : (
            <>
              {loader ? (
                <Skeleton className="h-8 w-[250px] max-w-full bg-gray-500" />
              ) : (
                <h1 className="font-neue font-bold uppercase sm:text-2xl">
                  Token sale ends in:
                </h1>
              )}
              {loader ? (
                <Skeleton className="h-24 w-full max-w-full bg-gray-500" />
              ) : (
                <PresaleCountdown />
              )}
              <div className="flex w-full flex-col gap-5 rounded-lg bg-black/20 px-3 py-5">
                <div className="flex w-full flex-col gap-1">
                  {loader ? (
                    <Skeleton className="h-5 w-[70px] max-w-full bg-gray-500" />
                  ) : (
                    <span className="font-neue text-sm font-bold">
                      USD RAISED
                    </span>
                  )}
                  {loader ? (
                    <Skeleton className="h-12 w-full max-w-full bg-gray-500" />
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="font-neue text-3xl font-bold text-primary">
                        $285,980
                      </span>
                      <div className="font-neue text-xl">/$10,000,000</div>
                    </div>
                  )}
                  {loader ? (
                    <Skeleton className="h-5 w-2/3 max-w-full bg-gray-500" />
                  ) : (
                    <div className="text-gray-400">
                      240250215.03 of 333,333,334 tokens
                    </div>
                  )}
                </div>
                {loader ? (
                  <Skeleton className="h-24 w-full max-w-full bg-gray-500" />
                ) : (
                  <ProgressBar
                    raisedAmount={contractData?.raisedAmount}
                    soldPercentage={soldPercentage || 0}
                  />
                )}
              </div>
              <div className="flex w-full items-center gap-2">
                <div className="h-[1px] w-full bg-white"></div>
                <span className="text-nowrap font-apfel">
                  {loader ? (
                    <Skeleton className="h-5 w-[100px] bg-gray-500" />
                  ) : (
                    `1 CDL = ${formatUnits(contractData?.tokenPrice || "0", 18)}$`
                  )}
                </span>
                <div className="h-[1px] w-full bg-white"></div>
              </div>
              <div className="grid w-full grid-cols-3 gap-2 font-neue text-sm font-bold sm:gap-5">
                {["BNB", "USDT", "USDC"].map((token) => (
                  <div key={token}>
                    {loader ? (
                      <Skeleton className="h-16 w-full max-w-full bg-gray-500" />
                    ) : (
                      <button
                        className={cn(
                          "flex h-10 w-full items-center justify-center gap-1 rounded-md border text-xs sm:h-12 sm:text-base",
                          selectedToken === token
                            ? "border-primary bg-primary"
                            : "border-white",
                        )}
                        onClick={() => setSelectedToken(token)}
                      >
                        <Image
                          src={`/static/coinsvgs/${token.toLowerCase()}.svg`}
                          width={20}
                          height={20}
                          alt={token}
                        />
                        <span className="pt-1">{token}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5 grid w-full gap-5 font-neue font-bold sm:grid-cols-2">
                {loader ? (
                  <Skeleton className="h-28 w-full max-w-full bg-gray-500" />
                ) : (
                  <>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between sm:flex-col-reverse sm:items-start">
                        <label htmlFor="tokenAmount">
                          Amount in {selectedToken}:
                        </label>
                        <span className="font-apfel text-sm">
                          (balance:{" "}
                          {Number(
                            selectedToken === "BNB"
                              ? contractData?.ethBalance
                              : selectedToken === "USDT"
                                ? contractData?.usdtBalance
                                : contractData?.usdcBalance,
                          ).toFixed(4)}
                          )
                        </span>
                      </div>
                      <input
                        className="rounded-md border border-white bg-transparent px-3 py-2"
                        type="text"
                        name="tokenAmount"
                        id="tokenAmount"
                        placeholder="0.0"
                        value={tokenAmount}
                        onChange={(e) => setTokensAmount(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between sm:flex-col-reverse sm:items-start">
                        <label htmlFor="cdlAmount">Amount in $CDL:</label>
                        <span className="font-apfel text-sm">
                          (balance:{" "}
                          {Number(contractData?.cdlBalance)?.toFixed(2)})
                        </span>
                      </div>
                      <input
                        className="rounded-md border border-white bg-transparent px-3 py-2"
                        type="number"
                        name="cdlAmount"
                        value={Number(
                          formatEther(cdlValue?.toString() || "0"),
                        )?.toFixed(2)}
                        readOnly
                      />
                    </div>
                  </>
                )}
              </div>
              {loader ? (
                <Skeleton className="h-16 w-full max-w-full bg-gray-500" />
              ) : isConnected == true ? (
                <div className="mt-5 flex w-full flex-col items-center justify-between gap-5 xl:flex-row">
                  <PrimaryButton
                    className="w-full text-sm sm:text-base"
                    action={
                      isConnected && buttonText === "Buy"
                        ? () =>
                            BuyWithETH({
                              tokens: cdlValue?.toString(),
                              amountInEthPayable: tokenAmount?.toString(),
                            })
                        : () => open()
                    }
                    title={buttonText}
                  />
                  <SecondaryButton
                    className="w-full text-sm sm:text-base"
                    action={() => addTokenToMetamask()}
                    title="ADD TOKEN IN METAMASK"
                  />
                </div>
              ) : (
                <div className="mt-5 flex w-full flex-col items-center justify-between gap-5 xl:flex-row">
                  <PrimaryButton
                    className="w-full text-sm sm:text-base"
                    action={() => open()}
                    title={"Connect Wallet"}
                  />
                  <SecondaryButton
                    className="w-full text-sm sm:text-base"
                    action={() => addTokenToMetamask()}
                    title="ADD TOKEN IN METAMASK"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
const clipboardIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.05775 17.5C8.55258 17.5 8.125 17.325 7.775 16.975C7.425 16.625 7.25 16.1974 7.25 15.6923V4.30775C7.25 3.80258 7.425 3.375 7.775 3.025C8.125 2.675 8.55258 2.5 9.05775 2.5H17.4423C17.9474 2.5 18.375 2.675 18.725 3.025C19.075 3.375 19.25 3.80258 19.25 4.30775V15.6923C19.25 16.1974 19.075 16.625 18.725 16.975C18.375 17.325 17.9474 17.5 17.4423 17.5H9.05775ZM9.05775 16H17.4423C17.5192 16 17.5898 15.9679 17.6538 15.9038C17.7179 15.8398 17.75 15.7692 17.75 15.6923V4.30775C17.75 4.23075 17.7179 4.16025 17.6538 4.09625C17.5898 4.03208 17.5192 4 17.4423 4H9.05775C8.98075 4 8.91025 4.03208 8.84625 4.09625C8.78208 4.16025 8.75 4.23075 8.75 4.30775V15.6923C8.75 15.7692 8.78208 15.8398 8.84625 15.9038C8.91025 15.9679 8.98075 16 9.05775 16ZM5.55775 21C5.05258 21 4.625 20.825 4.275 20.475C3.925 20.125 3.75 19.6974 3.75 19.1923V6.30775H5.25V19.1923C5.25 19.2693 5.28208 19.3398 5.34625 19.4038C5.41025 19.4679 5.48075 19.5 5.55775 19.5H15.4423V21H5.55775Z"
      fill="white"
    />
  </svg>
);

const btcBG = (
  <svg
    width="214"
    height="204"
    viewBox="0 0 214 204"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M169.948 62.0406C193.127 94.9849 183.834 139.566 149.194 161.616C114.566 183.652 67.6918 174.816 44.516 141.871C21.3302 108.927 30.6177 64.3441 65.2503 42.3029C99.8892 20.255 146.765 29.0964 169.946 62.0423L169.948 62.0406Z"
      fill="#F7931A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M116.003 80.3336C111.639 75.2624 105.441 76.5765 98.8644 80.0126L93.5736 72.4931L88.7605 75.5576L93.912 82.8789C92.6481 83.6831 91.3716 84.53 90.1039 85.3721L84.9194 78.0017L80.1095 81.0628L85.3968 88.5815C84.3692 89.2649 83.3589 89.9345 82.3617 90.5701L82.3446 90.5472L75.7057 94.7696L79.1464 99.6573C79.1464 99.6573 82.6548 97.3311 82.6395 97.4309C84.5892 96.1908 85.9819 96.8622 86.8189 97.6747L92.8464 106.241C92.9814 106.156 93.1606 106.05 93.3775 105.949L92.8706 106.272L101.312 118.275C101.637 118.913 101.931 120.073 100.57 120.942C100.668 120.954 97.0715 123.167 97.0715 123.167L99.9624 129.243L106.226 125.256C106.934 124.806 107.639 124.368 108.337 123.934L108.337 123.934L108.337 123.934C108.789 123.653 109.238 123.374 109.682 123.096L115.036 130.701L119.843 127.642L114.55 120.116C115.887 119.303 117.172 118.5 118.418 117.705L123.686 125.197L128.498 122.133L123.158 114.54C130.938 108.95 135.238 103.406 130.856 95.7351C127.329 89.5551 122.626 88.7892 117.294 90.6623C119.131 87.5332 119.2 84.0419 116.001 80.3348L116.003 80.3336ZM120.71 100.882C124.381 106.098 115.683 111.468 111.707 113.922L111.706 113.922C111.35 114.142 111.032 114.339 110.764 114.509L103.676 104.432C104.004 104.224 104.396 103.961 104.84 103.664C108.813 101.004 116.957 95.5515 120.711 100.881L120.71 100.882ZM101.228 99.3247C104.553 97.2826 111.8 92.8313 108.467 88.0909C105.056 83.242 98.2819 87.8061 94.9734 90.0351C94.6015 90.2857 94.2733 90.5067 93.9987 90.6816L100.428 99.8207C100.655 99.6764 100.925 99.5105 101.228 99.3247Z"
      fill="#F7931A"
    />
  </svg>
);

export default PresaleCardEthereum;
