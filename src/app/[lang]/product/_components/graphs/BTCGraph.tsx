"use client";

import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface BTCDataPoint {
  time: number; // UNIX timestamp in seconds
  price: number; // Price in USD
}

const BTCGraph: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const [btcData, setBtcData] = useState<BTCDataPoint[]>([]);
  const [latestPrice, setLatestPrice] = useState<number>(0);

  useEffect(() => {
    const fetchBTCData = async () => {
      try {
        const response = await axios.get<BTCDataPoint[]>("/api/btc");
        const data = response.data;

        setBtcData(data);
        setLatestPrice(data[data.length - 1]?.price || 0); // Latest price
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    fetchBTCData();
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current || btcData.length === 0) return;

    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: "white",
        },
        grid: {
          vertLines: { visible: false },
          horzLines: { visible: false },
        },
        rightPriceScale: {
          visible: true,
          borderColor: "#2b2b43",
        },
        timeScale: {
          visible: true,
          borderColor: "#2b2b43",
        },
        width: chartContainerRef.current.clientWidth,
        height: 500,
      });

      seriesRef.current = chartRef.current.addAreaSeries({
        lineColor: "#ff9900",
        topColor: "#ff990099",
        bottomColor: "#ff990010",
      });
    }

    if (seriesRef.current) {
      const transformedData = btcData.map((item) => ({
        time: item.time,
        value: item.price,
      }));

      seriesRef.current.setData(transformedData);
    }

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.remove();
    };
  }, [btcData]);

  return (
    <div className="relative h-full w-full">
      <div className="mb-5 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Bitcoin (BTC) Price</h1>
        <p className="text-5xl font-bold text-[#ff9900]">
          ${latestPrice.toFixed(2)}
        </p>
      </div>
      <div
        className="flex h-full w-full items-center justify-center"
        ref={chartContainerRef}
      />
    </div>
  );
};

export default BTCGraph;
