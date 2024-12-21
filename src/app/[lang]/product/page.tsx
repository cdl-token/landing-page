import StayInformed from "@/components/StayInformed";
import CDLvs from "./_components/cdl-vs/CDLvs";
import Comprehensive from "./_components/Comprehensive";
import FilterSearch from "./_components/FilterSearch";
import HowDoes from "./_components/HowDoes";
import ServiceMain from "./_components/ServiceMain";
import SimpleScalabale from "./_components/SimpleScalabale";
import TokenPowers from "./_components/TokenPowers";
import VersatileDelivery from "./_components/VersatileDelivery";
import ExploreNow from "./_components/ExploreNow";
import axios from "axios";

const getData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const baseUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/historical?symbol=SOL,ETH,BNB,BTC&count=100&interval=5m`;
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };

  try {
    const response = await axios.get(baseUrl, { headers });
    const tokenList = response.data.data;

    const formattedData = Object.keys(tokenList).reduce((acc, symbol) => {
      acc[symbol] = tokenList[symbol][0].quotes
        .map((quote) => {
          const timestamp = quote?.timestamp;
          const price = quote?.quote?.USD?.price;

          // Convert timestamp to UNIX time (seconds since epoch)
          const unixTime = timestamp
            ? Math.floor(new Date(timestamp).getTime() / 1000)
            : null;

          // Include only valid data points
          if (unixTime && price) {
            return { time: unixTime, price };
          }
          return null;
        })
        .filter(Boolean) // Remove invalid data
        .sort((a, b) => a.time - b.time); // Sort by ascending time
      return acc;
    }, {});

    return formattedData;
  } catch (error) {
    console.error("Error fetching portfolio tokens:", error);
    throw new Error("Failed to fetch data");
  }
};

const ServicesPage = async ({ params }) => {
  const lang = (await params).lang;
  const data = await getData();

  return (
    <div className="max-w-screen flex flex-col overflow-hidden">
      <ServiceMain />
      <HowDoes />
      <Comprehensive />
      <ExploreNow coinData={data} />
      <VersatileDelivery />
      <FilterSearch />
      <CDLvs />
      <SimpleScalabale lang={lang} />
      <TokenPowers />
      <StayInformed />
    </div>
  );
};

export default ServicesPage;
