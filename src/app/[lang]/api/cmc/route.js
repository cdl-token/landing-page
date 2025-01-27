import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const apiKey = process.env.CMC_API_KEY; // Store your API key in an environment variable
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  try {
    const response = await axios.get(url, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
      params: {
        start: 1,
        limit: 10,
        convert: "USD",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap API:", error);
    res.status(500).json({ message: "Failed to fetch data from CoinMarketCap API" });
  }
}
