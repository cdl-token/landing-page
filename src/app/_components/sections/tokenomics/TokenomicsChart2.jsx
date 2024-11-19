"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenomicsChart2 = () => {
  const state = {
    series: [8, 6, 7, 6, 9], // Your data values
    options: {
      chart: {
        width: 200,
        height: 200,
        type: "polarArea",
      },
      labels: [
        "10% Operations",
        "5% Legal Department",
        "16% Team Management",
        "10% Marketing Development",
        "Others",
      ], // Your labels
      colors: ["#5A189A", "#7F38CC", "#7100BD", "#D1A3FF", "#7F38CC"],
      stroke: {
        width: 0,
      },
      legend: { show: false },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
    },
  };

  return (
    <div id="chart" className="flex items-center justify-center">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="polarArea"
        width={250}
        height={250}
      />
    </div>
  );
};

export default TokenomicsChart2;
