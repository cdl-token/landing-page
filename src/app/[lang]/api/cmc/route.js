import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const apiKey = process.env.CMC_API_KEY; // Ensure the API key is stored securely in environment variables
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

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

    // Return a JSON response with the data
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap API:", error);
    return NextResponse.json(
      { message: "Failed to fetch data from CoinMarketCap API" },
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
