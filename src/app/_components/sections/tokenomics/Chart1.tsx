import React from "react";

const Chart1 = ({
  width = "380",
  height = "380",
}: {
  width?: string;
  height?: string;
}) => {
  const data = [
    { label: "Private Sale", percentage: 10, color: "#7100BD" },
    { label: "Public Sale", percentage: 10, color: "#D1A3FF" },
    { label: "Presale", percentage: 15, color: "#7F38CC" },
    { label: "Liquidity", percentage: 10, color: "#D08BFE" },
    { label: "Staking Reward", percentage: 15, color: "#5A199A" },
  ];

  const total = 60; // Total percentage
  const radius = 190; // Radius of the circle
  const centerX = 200; // Center X
  const centerY = 200; // Center Y

  // Helper to calculate arc paths
  const calculatePath = (
    percentage: number,
    startAngle: number,
  ): { path: string; endAngle: number } => {
    const angle = (percentage / total) * 360; // Convert percentage to degrees
    const endAngle = startAngle + angle;

    const x1 = centerX + radius * Math.cos((Math.PI * startAngle) / 180);
    const y1 = centerY + radius * Math.sin((Math.PI * startAngle) / 180);

    const x2 = centerX + radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = centerY + radius * Math.sin((Math.PI * endAngle) / 180);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const path = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
    return { path, endAngle };
  };

  let startAngle = 0;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 400"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {data.map((item, index) => {
        const { path, endAngle } = calculatePath(item.percentage, startAngle);
        startAngle = endAngle; // Update start angle for the next slice

        return (
          <path
            key={index}
            d={path}
            fill={item.color}
            className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
          />
        );
      })}
      {/* Inner Circle */}
      <circle cx={centerX} cy={centerY} r="56.8032" fill="white" />
      <text
        x={centerX}
        y={centerY - 10}
        textAnchor="middle"
        className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
        dominantBaseline="middle"
      >
        Total
      </text>
      <text
        x={centerX}
        y={centerY + 5}
        textAnchor="middle"
        className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
        dominantBaseline="middle"
      >
        Supply
      </text>
      <text
        x={centerX}
        y={centerY + 20}
        textAnchor="middle"
        className="fill-black font-neue text-[12px] font-bold md:text-[14px] lg:text-[16px]"
        dominantBaseline="middle"
      >
        100M
      </text>
    </svg>
  );
};

export default Chart1;
