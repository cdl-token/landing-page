"use client";

import { createChart, ColorType } from "lightweight-charts";
import Image from "next/image";
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
  const lineColor = "#57bfbf";
  const textColor = "white"; // Set text color to white
  const areaTopColor = "#57bfbf99";
  const areaBottomColor = "#57bfbf10";
  const axisLineColor = "#2b2b43"; // Axis lines color

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
        borderColor: axisLineColor, // Set axis line color
      },
      timeScale: {
        visible: true, // Enable bottom time scale
        borderColor: axisLineColor, // Set axis line color
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
  }, [
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    axisLineColor,
  ]);

  return (
    <div className="relative max-h-[40rem] w-full">
      <div
        className="flex h-full min-h-[40rem] w-full items-center justify-center"
        ref={chartContainerRef}
      />
      <div className="absolute bottom-[100px] left-2 z-20 h-10 w-10 rounded-full bg-black">
        <Image src="/static/logo.svg" width={40} height={40} alt="Logo" />
      </div>
    </div>
  );
};

export default LightGraph;
