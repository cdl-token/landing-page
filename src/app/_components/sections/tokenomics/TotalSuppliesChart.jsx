"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalSuppliesChart = () => {
  const state = {
    series: [8, 10, 9, 7, 5], // Your data values
    options: {
      chart: {
        width: 200,
        height: 200,
        type: "donut",
      },
      labels: [
        "15% Private Sale",
        "15% Public Sale",
        "15% Stalking Reward",
        "10% Partnership Funds",
        "5% Team Pool",
      ], // Your labels
      colors: ["#7100BD", "#CE86FF", "#DEEBBC", "#FEDB31", "#F7931A"],
      stroke: {
        width: 0,
      },
      // legend: {
      //   show: false,
      // },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "45%", // Adjusts the diameter of the donut hole
            background: "white",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "10px",
                offsetY: -5,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
              },
              value: {
                show: true,
                fontSize: "10px",
                offsetY: -5,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
              },
              total: {
                show: true,
                showAlways: true,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
                label: "Total 5B",
                formatter: function () {
                  // every word to new line
                  return "Supplies";
                },
                fontSize: "10px",
              },
            },
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
        type="donut"
        width={250}
        height={250}
      />
    </div>
  );
};

export default TotalSuppliesChart;
