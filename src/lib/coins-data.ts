import axios from "axios";

export interface CoinData {
  id: number;
  name: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
    };
  };
  logoUrl?: string;
}

export const getMovingBarData = async (): Promise<CoinData[]> => {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const baseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5`;
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };

  try {
    const response = await axios.get(baseUrl, { headers });
    const data: CoinData[] = response.data.data;

    const detailedTokenData = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
      {
        params: {
          id: data.map((token) => token.id).join(","),
        },
        headers,
      }
    );

    const detailedDataMap: { [key: string]: { logo: string } } =
      detailedTokenData.data.data;

    const updatedData: CoinData[] = data.map((token) => ({
      ...token,
      logoUrl: detailedDataMap[token.id]?.logo,
    }));
    return updatedData;
  } catch (err) {
    return [];
  }
};
