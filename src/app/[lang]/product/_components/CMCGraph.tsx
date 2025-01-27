import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { ApexOptions } from "apexcharts";

type ChartData = {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
};

const CMCChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    series: [],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: "Cryptocurrency Prices",
        align: "center",
      },
      yaxis: {
        title: {
          text: "Price (USD)",
        },
        labels: {
          formatter: (value: number) => `$${value.toFixed(2)}`,
        },
      },
    },
  });

  useEffect(() => {
    const fetchCMCData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY; // Replace with your API key
      const url = "/api/cmc";

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

        const data = response.data;

        console.log("DATA", data);
        const categories = data.map((coin: any) => coin.name);
        const prices = data.map((coin: any) => coin.quote.USD.price);

        setChartData({
          series: [
            {
              name: "Price",
              data: prices,
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              categories,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data from CMC API:", error);
      }
    };

    fetchCMCData();
  }, []);

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CMCChart;
