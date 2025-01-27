import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical";

  const symbol = "BTC"; // Fetch data only for Bitcoin
  const now = Math.floor(Date.now() / 1000); // Current timestamp
  const oneWeekAgo = now - 7 * 24 * 60 * 60; // One week ago in seconds

  try {
    const response = await axios.get(url, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
      params: {
        symbol,
        time_start: oneWeekAgo,
        time_end: now,
        interval: "1h", // Fetch hourly data
      },
    });

    // Process data to return an array of { time, price }
    const data = response.data.data[symbol].map((entry) => ({
      time: entry.timestamp / 1000, // Convert to seconds for lightweight-charts
      price: entry.quote.USD.price,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching BTC data:", error);
    return NextResponse.json(
      { message: "Failed to fetch BTC data" },
      { status: 500 },
    );
  }
}

export function POST() {
  return NextResponse.json(
    { message: "Method POST Not Allowed" },
    { status: 405 },
  );
}
