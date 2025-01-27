import StayInformed from "@/components/StayInformed";
import CDLvs from "./_components/cdl-vs/CDLvs";
import Comprehensive from "./_components/Comprehensive";
import FilterSearch from "./_components/FilterSearch";
import HowDoes from "./_components/HowDoes";
import ServiceMain from "./_components/ServiceMain";
import SimpleScalabale from "./_components/SimpleScalabale";
import VersatileDelivery from "./_components/VersatileDelivery";
import ExploreNow from "./_components/ExploreNow";
import axios from "axios";

const getData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
  const baseUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/historical?symbol=SOL,ETH,BNB,BTC&count=100&interval=5m&time_end=${currentTime}`;
  const latestPriceUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=SOL,ETH,BNB,BTC`; // Endpoint to get the latest price
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };

  try {
    // Fetch historical data
    const historicalResponse = await axios.get(baseUrl, { headers });
    const tokenList = historicalResponse.data.data;

    // Fetch latest price data
    const latestPriceResponse = await axios.get(latestPriceUrl, { headers });
    const latestPriceData = latestPriceResponse.data.data;

    // Format the data
    const formattedData = Object.keys(tokenList).reduce((acc, symbol) => {
      const historicalPrices = tokenList[symbol][0].quotes
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

      // Add the latest price to the end of the array
      const latestPrice = latestPriceData[symbol]?.quote?.USD?.price;
      if (latestPrice) {
        const latestPriceEntry = {
          time: currentTime, // Use current time for the latest price
          price: latestPrice,
        };
        historicalPrices.push(latestPriceEntry);
      }

      acc[symbol] = historicalPrices;
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
      <StayInformed />
    </div>
  );
};

export default ServicesPage;
