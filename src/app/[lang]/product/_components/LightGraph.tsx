"use client";

import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";

const LightGraph = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

  const backgroundColor = "transparent"; // Set background to transparent
  const lineColor = "#2962FF";
  const textColor = "black";
  const areaTopColor = "#2962FF";
  const areaBottomColor = "rgba(41, 98, 255, 0.28)";

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor: textColor,
      },
      grid: {
        vertLines: { visible: false }, // Remove vertical grid lines
        horzLines: { visible: false }, // Remove horizontal grid lines
      },
      rightPriceScale: {
        visible: true, // Enable right price scale
        borderColor: "rgba(197, 203, 206, 1)",
      },
      timeScale: {
        visible: true, // Enable bottom time scale
        borderColor: "rgba(197, 203, 206, 1)",
      },
      width: chartContainerRef.current.clientWidth,
      height: 500, // Updated height to 500
    });

    chart.timeScale().fitContent();

    // Add area series
    const areaSeries = chart.addAreaSeries({
      lineColor: lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    areaSeries.setData(initialData);

    // Set up resizing
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "500px" }} />
  );
};

export default LightGraph;